import Stripe from "stripe";
import { plans } from "@/lib/constants";
import { log } from "@/lib/utils";

export async function customerSubscriptionUpdated(event: Stripe.Event) {
  const subscriptionUpdated = event.data.object as Stripe.Subscription;
  const priceId = subscriptionUpdated.items.data[0].price.id;

  const plan = plans.find((p) => p.priceIds.has(priceId));
  if (!plan) {
    await log({
      message: `Invalid price ID in customer.subscription.updated event: ${priceId}`,
      type: "error",
    });
    return;
  }

  const customerId = subscriptionUpdated.customer as string;
}
