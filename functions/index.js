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
const { Transaction } = require("firebase-admin/firestore");
const { defineSecret } = require("firebase-functions/params");
const { Message } = require("firebase-functions/pubsub");
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
    const corporateMode = request.data.corporateMode;

    let foundCompanyDoc = null;
    if (memberType === "corporate" && corporateMode === "join") {
      const companyQuery = await db
        .collection("companies")
        .where("companyCode", "==", request.data.companyCode)
        .get();

      if (companyQuery.empty) {
        return { success: false, reason: "company_not_found" };
      }
      foundCompanyDoc = companyQuery.docs[0];
    }

    const memberCounterRef = db.collection("counters").doc("memberCode");
    const companyCounterRef = db.collection("counters").doc("companyCode");

    const { memberCode, companyCode } = await db.runTransaction(
      async (transaction) => {
        const memberCounterDoc = await transaction.get(memberCounterRef);
        const nextMemberNumber =
          (memberCounterDoc.exists ? memberCounterDoc.data().value : 0) + 1;
        const memberCode = `DG-${String(nextMemberNumber).padStart(6, "0")}`;

        let companyId = null;
        let companyCode = null;

        if (memberType === "corporate" && corporateMode === "create") {
          const companyCounterDoc = await transaction.get(companyCounterRef);
          const nextCompanyNumber =
            (companyCounterDoc.exists ? companyCounterDoc.data().value : 0) + 1;
          companyCode = `DGC-${String(nextCompanyNumber).padStart(6, "0")}`;

          const newCompanyRef = db.collection("companies").doc();
          companyId = newCompanyRef.id;

          transaction.set(newCompanyRef, {
            companyName: request.data.companyName,
            category: request.data.category,
            companyCode: companyCode,
            createdByLineUserId: lineUserId,
            paymentSchedule: "Monthly Settlement",
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
          });
          transaction.set(companyCounterRef, { value: nextCompanyNumber });
        } else if (memberType === "corporate" && corporateMode === "join") {
          companyId = foundCompanyDoc.id;
          companyCode = foundCompanyDoc.data().companyCode;
        }

        transaction.set(memberCounterRef, { value: nextMemberNumber });

        const newMemberRef = db.collection("members").doc();
        transaction.set(newMemberRef, {
          memberCode: memberCode,
          memberType: memberType,
          companyId: companyId,
          role:
            memberType === "corporate"
              ? corporateMode === "create"
                ? "admin"
                : "employee"
              : null,
          name: request.data.name,
          category: memberType === "individual" ? request.data.category : null,
          email: request.data.email,
          lineUserId: lineUserId,
          phone: request.auth.token.phone_number,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        return { memberCode, companyCode };
      },
    );

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
              memberType === "corporate" && corporateMode === "create"
                ? `ยินดีต้อนรับสู่ Doctor2Go Travel Network\nสร้างบริษัทและสมัครสมาชิกเรียบร้อยแล้ว\n\nMember Code: ${memberCode}\nรหัสบริษัท (แชร์ให้พนักงานใช้เข้าร่วม): ${companyCode}\n\nเมื่อนักท่องเที่ยวของคุณต้องการแพทย์ โทรหาเราได้ตลอด 24 ชั่วโมง`
                : `ยินดีต้อนรับสู่ Doctor2Go Travel Network\nการสมัครของคุณเสร็จเรียบร้อยแล้ว\n\nMember Code:${memberCode}\n\nเมื่อนักท่องเที่ยวของคุณต้องการแพทย์ โทรหาเราได้ตลอด 24 ชั่วโมง`,
          },
        ],
      }),
    });
    return { success: true, memberCode: memberCode, companyCode: companyCode };
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
        category: companyData.category,
        paymentSchedule: companyData.paymentSchedule,
        companyCode: companyData.companyCode,
      },
    };
  },
);
