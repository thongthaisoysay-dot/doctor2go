/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { setGlobalOptions } = require("firebase-functions");
const { onRequest, onCall } = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

const admin = require("firebase-admin");
const { defineSecret } = require("firebase-functions/params");
const lineChannelAccessToken = defineSecret("LINE_CHANNEL_ACCESS_TOKEN");
admin.initializeApp();

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.completeRegistration = onCall(
  { secrets: [lineChannelAccessToken] },
  async (request) => {
    const lineIdToken = request.data.lineIdToken;
    const lineResponse = await fetch("https://api.line.me/oauth2/v2.1/verify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `id_token=${lineIdToken}&client_id=2010746451`,
    });

    const lineData = await lineResponse.json();

    if (!lineResponse.ok) {
      return {
        success: false,
        reason: "invalid_line_token",
        lineData: lineData,
      };
    }

    const lineUserId = lineData.sub;
    const db = admin.firestore();
    const existingQuery = await db
      .collection("members")
      .where("lineUserId", "==", lineUserId)
      .get();

    if (!existingQuery.empty) {
      return { success: false, reason: "duplicate" };
    }

    const memberType = request.data.memberType;

    if (memberType === "corporate") {
      const companyNameInput = (request.data.companyName || "")
        .trim()
        .toLowerCase();
      const companiesSnapshot = await db
        .collection("companies")
        .select("companyName")
        .get();
      const nameAlreadyExists = companiesSnapshot.docs.some(
        (doc) =>
          (doc.data().companyName || "").trim().toLowerCase() ===
          companyNameInput,
      );

      if (nameAlreadyExists) {
        return { success: false, reason: "company_already_exists" };
      }
    }

    const memberCounterRef = db.collection("counters").doc("memberCode");

    const { memberCode } = await db.runTransaction(async (transaction) => {
      const memberCounterDoc = await transaction.get(memberCounterRef);
      const nextMemberNumber =
        (memberCounterDoc.exists ? memberCounterDoc.data().value : 0) + 1;
      const memberCode = `DG-${String(nextMemberNumber).padStart(6, "0")}`;

      let companyId = null;

      if (memberType === "corporate") {
        const newCompanyRef = db.collection("companies").doc();
        companyId = newCompanyRef.id;

        transaction.set(newCompanyRef, {
          companyName: request.data.companyName,
          primaryContactName: request.data.name,
          mobileNumber: request.auth.token.phone_number,
          companyEmail: request.data.email,
          category: request.data.category,
          createdByLineUserId: lineUserId,
          paymentSchedule: "Monthly Settlement",
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });
      }

      transaction.set(memberCounterRef, { value: nextMemberNumber });

      const newMemberRef = db.collection("members").doc();
      transaction.set(newMemberRef, {
        memberCode: memberCode,
        memberType: memberType,
        companyId: companyId,
        role: memberType === "corporate" ? "admin" : null,
        name: request.data.name,
        category: memberType === "individual" ? request.data.category : null,
        email: request.data.email,
        lineUserId: lineUserId,
        phone: request.auth.token.phone_number,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      return { memberCode };
    });

    await fetch("https://api.line.me/v2/bot/message/push", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${lineChannelAccessToken.value()}`,
      },
      body: JSON.stringify({
        to: lineUserId,
        messages: [
          {
            type: "text",
            text:
              memberType === "corporate"
                ? `Welcome to Doctor2Go Travel Network\nYour company account has been created.\n\nMember Code: ${memberCode}\n\nUse the "Invite a member" button in your profile to add your team - no code needed, just send them the link.\n\nWhen your travelers need a doctor, call us anytime, 24 hours a day.`
                : `Welcome to Doctor2Go Travel Network\nYour registration is complete.\n\nMember Code: ${memberCode}\n\nWhen you need a doctor, call us anytime, 24 hours a day.`,
          },
        ],
      }),
    });
    return { success: true, memberCode: memberCode };
  },
);

exports.getMyProfile = onCall(
  { secrets: [lineChannelAccessToken] },
  async (request) => {
    const lineIdToken = request.data.lineIdToken;

    const lineResponse = await fetch("https://api.line.me/oauth2/v2.1/verify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `id_token=${lineIdToken}&client_id=2010746451`,
    });

    const lineData = await lineResponse.json();

    if (!lineResponse.ok)
      return {
        success: false,
        reason: "invalid_line_token",
      };

    const lineUserId = lineData.sub;
    const db = admin.firestore();
    const memberQuery = await db
      .collection("members")
      .where("lineUserId", "==", lineUserId)
      .get();
    if (memberQuery.empty) {
      return {
        success: false,
        reason: "member_not_found",
      };
    }
    const memberDoc = memberQuery.docs[0];
    const memberData = memberDoc.data();

    if (memberData.memberType === "individual") {
      return {
        success: true,
        profile: {
          ...memberData,
          paymentSchedule: "Within 24 Hours",
        },
      };
    }

    const companyDoc = await db
      .collection("companies")
      .doc(memberData.companyId)
      .get();
    const companyData = companyDoc.data();

    return {
      success: true,
      profile: {
        ...memberData,
        companyName: companyData.companyName,
        primaryContactName: companyData.primaryContactName,
        mobileNumber: companyData.mobileNumber,
        companyEmail: companyData.companyEmail,
        category: companyData.category,
        paymentSchedule: companyData.paymentSchedule,
      },
    };
  },
);

exports.createInvite = onCall(async (request) => {
  const lineIdToken = request.data.lineIdToken;
  const lineResponse = await fetch("https://api.line.me/oauth2/v2.1/verify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `id_token=${lineIdToken}&client_id=2010746451`,
  });

  const lineData = await lineResponse.json();

  if (!lineResponse.ok) {
    return { success: false, reason: "invalid_line_token" };
  }

  const lineUserId = lineData.sub;
  const db = admin.firestore();
  const memberQuery = await db
    .collection("members")
    .where("lineUserId", "==", lineUserId)
    .get();

  if (memberQuery.empty) {
    return { success: false, reason: "member_not_found" };
  }

  const memberData = memberQuery.docs[0].data();

  if (memberData.role !== "admin") {
    return { success: false, reason: "not_admin" };
  }

  const newInviteRef = db.collection("invites").doc();
  await newInviteRef.set({
    companyId: memberData.companyId,
    createdByLineUserId: lineUserId,
    status: "pending",
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  return { success: true, inviteToken: newInviteRef.id };
});

exports.searchCompanies = onCall(async (request) => {
  const lineIdToken = request.data.lineIdToken;
  const lineResponse = await fetch("https://api.line.me/oauth2/v2.1/verify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `id_token=${lineIdToken}&client_id=2010746451`,
  });

  if (!lineResponse.ok) {
    return { success: false, reason: "invalid_line_token" };
  }

  const searchText = (request.data.query || "").trim().toLowerCase();
  if (searchText.length === 0) {
    return { success: true, companyNames: [] };
  }

  const db = admin.firestore();
  const snapshot = await db
    .collection("companies")
    .select("companyName")
    .get();

  const matches = snapshot.docs
    .map((doc) => doc.data().companyName)
    .filter((name) => name && name.toLowerCase().includes(searchText));

  matches.sort((a, b) => {
    const aStartsWith = a.toLowerCase().startsWith(searchText);
    const bStartsWith = b.toLowerCase().startsWith(searchText);
    if (aStartsWith && !bStartsWith) return -1;
    if (!aStartsWith && bStartsWith) return 1;
    return a.localeCompare(b);
  });

  return { success: true, companyNames: matches.slice(0, 8) };
});

exports.claimInvite = onCall(
  { secrets: [lineChannelAccessToken] },
  async (request) => {
    const lineIdToken = request.data.lineIdToken;
    const lineResponse = await fetch(
      "https://api.line.me/oauth2/v2.1/verify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `id_token=${lineIdToken}&client_id=2010746451`,
      },
    );

    const lineData = await lineResponse.json();

    if (!lineResponse.ok) {
      return { success: false, reason: "invalid_line_token" };
    }

    const lineUserId = lineData.sub;
    const db = admin.firestore();
    const existingQuery = await db
      .collection("members")
      .where("lineUserId", "==", lineUserId)
      .get();

    if (!existingQuery.empty) {
      return { success: false, reason: "duplicate" };
    }

    const inviteToken = request.data.inviteToken;
    const inviteRef = db.collection("invites").doc(inviteToken);
    const memberCounterRef = db.collection("counters").doc("memberCode");

    let memberCode;
    try {
      ({ memberCode } = await db.runTransaction(async (transaction) => {
        const inviteDoc = await transaction.get(inviteRef);
        if (!inviteDoc.exists || inviteDoc.data().status !== "pending") {
          throw new Error("invalid_invite");
        }
        const companyId = inviteDoc.data().companyId;

        const memberCounterDoc = await transaction.get(memberCounterRef);
        const nextMemberNumber =
          (memberCounterDoc.exists ? memberCounterDoc.data().value : 0) + 1;
        const memberCode = `DG-${String(nextMemberNumber).padStart(6, "0")}`;

        transaction.set(memberCounterRef, { value: nextMemberNumber });

        const newMemberRef = db.collection("members").doc();
        transaction.set(newMemberRef, {
          memberCode: memberCode,
          memberType: "corporate",
          companyId: companyId,
          role: "member",
          name: request.data.name,
          category: null,
          email: null,
          lineUserId: lineUserId,
          phone: request.auth.token.phone_number,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        transaction.update(inviteRef, {
          status: "used",
          usedByLineUserId: lineUserId,
          usedAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        return { memberCode };
      }));
    } catch (error) {
      if (error.message === "invalid_invite") {
        return { success: false, reason: "invalid_invite" };
      }
      throw error;
    }

    await fetch("https://api.line.me/v2/bot/message/push", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${lineChannelAccessToken.value()}`,
      },
      body: JSON.stringify({
        to: lineUserId,
        messages: [
          {
            type: "text",
            text: `Welcome to Doctor2Go Travel Network\nYou've joined your company's account.\n\nMember Code: ${memberCode}\n\nWhen you need a doctor, call us anytime, 24 hours a day.`,
          },
        ],
      }),
    });

    return { success: true, memberCode: memberCode };
  },
);
