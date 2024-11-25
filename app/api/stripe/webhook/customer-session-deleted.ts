import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { log } from "@/lib/utils";

export async function customerSessionDeleted(event: Stripe.Event) {
  const subscriptionDeleted = event.data.object as Stripe.Subscription;

  const subscriptionId = subscriptionDeleted.id;

  await prisma.user.update({
    where: {
      subscriptionId,
    },
    data: {
      plan: "free",
      subscriptionId: null,
      endsAt: null,
      startsAt: null,
      characters: 1_000,
      voices: 3,
    },
  });

  await log({
    message: `:cry: User with Subscription ID *\`${subscriptionId}\`* deleted their subscription`,
    type: "info",
  });
}
