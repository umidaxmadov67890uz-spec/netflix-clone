const { onCall, onRequest, HttpsError } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const admin = require("firebase-admin");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
require("dotenv").config();

setGlobalOptions({ maxInstances: 10 });

admin.initializeApp();

const db = getFirestore();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Reja narxlari (backend'da belgilaymiz, frontend'ga ishonmaymiz)
const PLANS = {
  lite_1m: { name: "Lite (1 oy)", amount: 241, interval: "month", intervalCount: 1 },
  lite_3m: { name: "Lite (3 oy)", amount: 647, interval: "month", intervalCount: 3 },
  lite_1y: { name: "Lite (1 yil)", amount: 2400, interval: "year", intervalCount: 1 },

  pro_1m: { name: "Pro (1 oy)", amount: 324, interval: "month", intervalCount: 1 },
  pro_3m: { name: "Pro (3 oy)", amount: 870, interval: "month", intervalCount: 3 },
  pro_1y: { name: "Pro (1 yil)", amount: 3233, interval: "year", intervalCount: 1 },

  premium_1m: { name: "Premium (1 oy)", amount: 489, interval: "month", intervalCount: 1 },
  premium_3m: { name: "Premium (3 oy)", amount: 1318, interval: "month", intervalCount: 3 },
  premium_1y: { name: "Premium (1 yil)", amount: 4889, interval: "year", intervalCount: 1 },
};

exports.createCheckoutSession = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Avval tizimga kiring");
  }

  const plan = PLANS[request.data.planId];
  if (!plan) {
    throw new HttpsError("invalid-argument", "Noto'g'ri reja tanlandi");
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: plan.name },
          unit_amount: plan.amount,
          recurring: {
            interval: plan.interval,
            interval_count: plan.intervalCount,
          },
        },
        quantity: 1,
      },
    ],
    client_reference_id: request.auth.uid,
    metadata: { planId: request.data.planId },
    success_url: "http://localhost:5173/payment-success",
    cancel_url: "http://localhost:5173/pricing",
  });

  return { url: session.url };
});

exports.stripeWebhook = onRequest(async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  // 1. Avval Stripe'dan kelgan signalning haqiqiyligini tekshiramiz
  try {
    event = stripe.webhooks.constructEvent(
      req.rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature xato:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // 2. Faqat to'lov muvaffaqiyatli tugagan holatni qayta ishlaymiz
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const userId = session.client_reference_id;
    const planId = session.metadata.planId;
    const tier = planId.split("_")[0]; // "pro_3m" → "pro"

    try {
      await db.collection("users").doc(userId).set(
        {
          subscription: tier,
          subscriptionPlanId: planId,
          subscriptionStatus: "active",
          subscriptionStartedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
      console.log(`Foydalanuvchi ${userId} obunasi yangilandi: ${tier}`);
    } catch (err) {
      console.error("Firestore yangilashda xato:", err);
      return res.status(500).send("Firestore update failed");
    }
  }

  res.status(200).json({ received: true });
});