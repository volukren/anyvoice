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
    name: "Free Plan",
    slug: "free",
    link: "/app",
    yearlyLink: "/app",
    price: 0,
    yearlyPrice: 0,
    features: ["Up to 3 voices", "1,000 characters", "Non-commercial use"],
    recommended: false,
    period: "month",
    priceIds: new Set(),
    characters: 1_000,
    voices: 3,
  },
  {
    name: "Pro Plan",
    slug: "pro",
    link:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_dR6045gHR08L7IY000"
        : "https://buy.stripe.com/4gwg0EbmafHAcXm7sv",
    yearlyLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_cN2aIJ8blcVxfbq005"
        : "https://buy.stripe.com/fZe15KgGueDwaPeaEG",
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
        : new Set([
            "price_1QP0T3Hrs1WjSO3rAOxo3YBc",
            "price_1QP0RlHrs1WjSO3rcmCq3J5O",
          ]),
    characters: 1_000_000,
    voices: 100,
  },
  {
    name: "Basic Plan",
    slug: "basic",
    link:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_eVa4klgHR7BdfbqcMQ"
        : "https://buy.stripe.com/9AQcOseym6704qQcMM",
    yearlyLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_dR62cddvF6x91kA4gi"
        : "https://buy.stripe.com/eVa6q4dui9jc3mM001",
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
        : new Set([
            "price_1QP0WjHrs1WjSO3ruVw2O9kr",
            "price_1QP0WXHrs1WjSO3rPOnND0vG",
          ]),
    characters: 100_000,
    voices: 10,
  },
];
