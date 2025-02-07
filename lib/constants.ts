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
    name: "Basic Plan",
    slug: "basic",
    link:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_bIY9Ci3cc8Pv94QaEG"
        : "https://buy.stripe.com/bIYg0E3TI52WcXm6os",
    yearlyLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_7sI7uafYYe9P6WIeUX"
        : "https://buy.stripe.com/6oE3dS1LAang8H6dQW",
    price: 5,
    yearlyPrice: 4.1,
    features: ["Up to 5 voices", "50,000 characters", "Commercial use"],
    recommended: false,
    period: "month",
    priceIds:
      process.env.NODE_ENV === "development"
        ? new Set([
            "price_1Qpk5DHrs1WjSO3rQjheRk9n",
            "price_1Qpk5RHrs1WjSO3r598kDeb1",
          ])
        : new Set([
            "price_1QpkMNHrs1WjSO3rKdnxadzA",
            "price_1Qpk2zHrs1WjSO3rCEWyIwXF",
          ]),
    characters: 1_000,
    voices: 3,
  },
  {
    name: "Pro+ Plan",
    slug: "proplus",
    link:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_eVa3dU2888Pv94QeV0"
        : "https://buy.stripe.com/4gwg0EbmafHAcXm7sv",
    yearlyLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_aEUg0GeUU3vbch24gn"
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
            "price_1QpkCnHrs1WjSO3rjnEDU3fe",
            "price_1QpkEBHrs1WjSO3r94AhLRaR",
          ])
        : new Set([
            "price_1QP0T3Hrs1WjSO3rAOxo3YBc",
            "price_1QP0RlHrs1WjSO3rcmCq3J5O",
          ]),
    characters: 1_000_000,
    voices: 100,
  },
  {
    name: "Pro Plan",
    slug: "pro",
    link:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_14kaGmbII3vb3KwaEI"
        : "https://buy.stripe.com/9AQcOseym6704qQcMM",
    yearlyLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_6oEdSy6oo2r71Co7sx"
        : "https://buy.stripe.com/eVa6q4dui9jc3mM001",
    price: 9,
    yearlyPrice: 7.5,
    features: ["Up to 10 voices", "100,000 characters/month", "Commercial use"],
    recommended: false,
    period: "month",
    priceIds:
      process.env.NODE_ENV === "development"
        ? new Set([
            "price_1QpkAnHrs1WjSO3rwnry80MB",
            "price_1QpkBvHrs1WjSO3rpE9DnMg8",
          ])
        : new Set([
            "price_1QP0WjHrs1WjSO3ruVw2O9kr",
            "price_1QP0WXHrs1WjSO3rPOnND0vG",
          ]),
    characters: 100_000,
    voices: 10,
  },
];
