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

exports.completeRegistration = onCall(async (request) => {
  const lineIdToken = request.data.lineIdToken;
  const lineResponse = await fetch("https://api.line.me/oauth2/v2.1/verify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `id_token=${lineIdToken}&client_id=2010746451`,
  });

  const lineData = await lineResponse.json();

  if (!lineResponse.ok) {
    return { success: false, reason: "invalid_line_token", lineData: lineData };
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
  const counterRef = db.collection("counters").doc("memberCode");

  const memberCode = await db.runTransaction(async (transaction) => {
    const counterDoc = await transaction.get(counterRef);
    const currentNumber = counterDoc.exists ? counterDoc.data().value : 0;
    const nextNumber = currentNumber + 1;
    transaction.set(counterRef, { value: nextNumber });
    const paddedNumber = String(nextNumber).padStart(6, "0");
    return `DG-${paddedNumber}`;
  });

  await db.collection("members").add({
    memberCode: memberCode,
    memberType: request.data.memberType,
    name: request.data.name,
    category: request.data.category,
    email: request.data.email,
    companyName: request.data.companyName,
    lineUserId: lineUserId,
    phone: request.auth.token.phone_number,
    paymentSchedule:
      request.data.memberType === "corporate"
        ? "Monthly Settlement"
        : "Within 24 Hours",
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });
  return { success: true, memberCode: memberCode };
});
