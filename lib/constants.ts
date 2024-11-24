export type Plan = {
  name: string;
  link: string;
  yearlyLink: string;
  spots?: number;
  price: number;
  yearlyPrice: number;
  features: string[];
  recommended: boolean;
  period?: string;
};

export const plans: Plan[] = [
  {
    name: "Lifetime Plan",
    link: "https://buy.stripe.com/test_dR6045gHR08L7IY000",
    yearlyLink: "https://buy.stripe.com/test_dR6045gHR08L7IY000",
    spots: 50,
    price: 299,
    yearlyPrice: 299,
    features: [
      "Up to 1000 voices",
      "1,000,000 characters/month",
      "Commercial use",
    ],
    recommended: true,
    period: "one-time",
  },
  {
    name: "Basic Plan",
    link: "https://buy.stripe.com/test_eVa4klgHR7BdfbqcMQ",
    yearlyLink: "https://buy.stripe.com/test_dR62cddvF6x91kA4gi",
    price: 9,
    yearlyPrice: 7.5,
    features: ["Up to 10 voices", "100,000 characters/month", "Commercial use"],
    recommended: false,
    period: "month",
  },
  {
    name: "Pro Plan",
    yearlyLink: "https://buy.stripe.com/test_cN2aIJ8blcVxfbq005",
    link: "https://buy.stripe.com/test_dR6045gHR08L7IY000",
    price: 29,
    yearlyPrice: 24.1,
    features: [
      "Up to 100 voices",
      "1,000,000 characters/month",
      "Commercial use",
    ],
    recommended: false,
    period: "month",
  },
];
