export type Plan = {
  name: string;
  slug: string;
  link: string;
  yearlyLink: string;
  price: number;
  yearlyPrice: number;
  features: string[];
  recommended: boolean;
  period?: string;
  priceIds: Set<string>;
  characters: number;
  voices: number;
};

export const plans: Plan[] = [
  {
    name: "Pro Plan",
    slug: "pro",
    yearlyLink: "https://buy.stripe.com/test_cN2aIJ8blcVxfbq005",
    link: "https://buy.stripe.com/test_dR6045gHR08L7IY000",
    price: 29,
    yearlyPrice: 24.1,
    features: [
      "Up to 100 voices",
      "1,000,000 characters/month",
      "Commercial use",
    ],
    recommended: true,
    period: "month",
    priceIds:
      process.env.NODE_ENV === "development"
        ? new Set([
            "price_1QO6gMEKH0t3iQ0bTWbV4MEq",
            "price_1QO6gMEKH0t3iQ0bPHoBhUZ2",
          ])
        : new Set(),
    characters: 1_000_000,
    voices: 100,
  },
  {
    name: "Basic Plan",
    slug: "basic",
    link: "https://buy.stripe.com/test_eVa4klgHR7BdfbqcMQ",
    yearlyLink: "https://buy.stripe.com/test_dR62cddvF6x91kA4gi",
    price: 9,
    yearlyPrice: 7.5,
    features: ["Up to 10 voices", "100,000 characters/month", "Commercial use"],
    recommended: false,
    period: "month",
    priceIds:
      process.env.NODE_ENV === "development"
        ? new Set([
            "price_1QOcQSEKH0t3iQ0bvFrzqBKt",
            "price_1QO6heEKH0t3iQ0bBygbuHYk",
          ])
        : new Set([]),
    characters: 100_000,
    voices: 10,
  },
];
