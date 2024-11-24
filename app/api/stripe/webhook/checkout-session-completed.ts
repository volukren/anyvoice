import Stripe from "stripe";
import { stripeInstance } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { log } from "@/lib/utils";
import { plans } from "@/lib/constants";

export async function checkoutSessionCompleted(event: Stripe.Event) {
  const checkoutSession = event.data.object as Stripe.Checkout.Session;

  if (checkoutSession.client_reference_id === null) {
    await log({
      type: "error",
      message: "Missing items in Stripe webhook callback",
    });
    return;
  }

  const userId = checkoutSession.client_reference_id;

  const user = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
  });
  if (!user) {
    await log({
      message: `User not found in checkout session completed. User ID: ${userId}`,
      type: "error",
    });
    return;
  }

  const subscription = await stripeInstance.subscriptions.retrieve(
    checkoutSession.subscription as string,
  );

  const priceId = subscription.items.data[0].price.id;
  const subscriptionId = subscription.id;
  const subscriptionStart = new Date(subscription.current_period_start * 1000);
  const subscriptionEnd = new Date(subscription.current_period_end * 1000);

  const plan = plans.find((p) => p.priceIds.has(priceId));
  if (!plan) {
    await log({
      message: `Invalid price ID in checkout.session.completed event: ${priceId}`,
      type: "error",
    });
    return;
  }

  await prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: {
      plan: plan.slug,
      subscriptionId,
      startsAt: subscriptionStart,
      endsAt: subscriptionEnd,
      customerId: subscription.customer as string,
      characters: plan.characters,
      voices: plan.voices,
    },
  });

  // todo: send email to user
}
