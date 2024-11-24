import { NextRequest, NextResponse } from "next/server";
import { stripeInstance } from "@/lib/stripe";
import Stripe from "stripe";
import { checkoutSessionCompleted } from "@/app/api/stripe/webhook/checkout-session-completed";
import { log } from "@/lib/utils";
import { checkoutSessionDeleted } from "@/app/api/stripe/webhook/checkout-session-deleted";

const relevantEvents = new Set([
  "checkout.session.completed",
  "customer.subscription.updated",
  "customer.subscription.deleted",
  "invoice.payment_failed",
]);

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  const sig = req.headers.get("stripe-signature");
  const buf = await req.text();

  let event: Stripe.Event;
  try {
    if (!sig || !webhookSecret) return;
    event = stripeInstance.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err: any) {
    console.error(`❌ Error message: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Ignore unsupported events
  if (!relevantEvents.has(event.type)) {
    return new Response("Unsupported event, skipping...", { status: 200 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await checkoutSessionCompleted(event);
        break;
      case "customer.subscription.deleted":
        await checkoutSessionDeleted(event);
        break;
    }
  } catch (error) {
    await log({
      message: `Stripe webhook failed. Error: ${error}`,
      type: "error",
    });
    return new Response('Webhook error: "Webhook handler failed. View logs."', {
      status: 400,
    });
  }

  return NextResponse.json({ received: true });
}
