"use client";
import clsx from "clsx";
import { CheckIcon, CrownIcon, GiftIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Plan = {
  name: string;
  spots?: number;
  price: number;
  yearlyPrice: number;
  features: string[];
  recommended?: boolean;
  period?: string;
};

const plans: Plan[] = [
  {
    name: "Lifetime Plan",
    spots: 100,
    price: 299,
    yearlyPrice: 299,
    features: [
      "Up to 1000 voices",
      "1,000,000 characters/month",
      "1000 minutes of audio/month",
      "Commercial use",
    ],
    recommended: true,
    period: "one-time",
  },
  {
    name: "Basic Plan",
    price: 9,
    yearlyPrice: 7.5,
    features: [
      "Up to 10 voices",
      "100,000 characters/month",
      "10 minutes of audio/month",
      "Commercial use",
    ],
    period: "month",
  },
  {
    name: "Pro Plan",
    price: 29,
    yearlyPrice: 24.1,
    features: [
      "Up to 100 voices",
      "1,000,000 characters/month",
      "100 minutes of audio/month",
      "Commercial use",
    ],
    period: "month",
  },
];

export default function Pricing({ className }: { className: string }) {
  const [yearly, setYearly] = useState<boolean>(true);

  return (
    <div className={className} id="pricing">
      <h2 className="text-2xl md:text-3xl text-primary font-bold text-center">
        Pricing
      </h2>
      <div className="flex justify-center items-center gap-5 py-5">
        <button
          className={clsx("border-2 px-4 py-2 rounded-md font-semibold", {
            "bg-primary border-primary text-primary-foreground": !yearly,
          })}
          onClick={() => setYearly(false)}
        >
          Monthly
        </button>
        <button
          className={clsx("border-2 px-4 py-2 rounded-md font-semibold", {
            "bg-primary border-primary text-primary-foreground": yearly,
          })}
          onClick={() => setYearly(true)}
        >
          Yearly
        </button>
      </div>
      <div className="flex justify-center py-2">
        <div className="text-center text-gray-800 px-4 py-2 bg-green-300 rounded-full font-bold animate-bounce text-sm">
          Two months FREE with yearly billing!
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 py-10">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={clsx(
              "border-2 px-5 py-10 rounded-md relative flex flex-col gap-4",
              {
                "border-red-600": plan.recommended,
              }
            )}
          >
            <div className="flex-1">
              {plan.recommended && (
                <div className="absolute top-0 right-1/2 -translate-y-1/2 translate-x-1/2 bg-primary text-white px-2 py-1 rounded-md font-semibold">
                  Recommended
                </div>
              )}
              {plan.spots && (
                <div className="flex py-3">
                  <div className="py-1.5 px-2 bg-orange-300 font-bold rounded-full text-sm flex items-center gap-2 select-none">
                    <GiftIcon className="w-5 h-5 text-slate-800" />
                    <span>Only {plan.spots} spots left</span>
                  </div>
                </div>
              )}
              <h3 className="text-2xl font-bold text-primary">{plan.name}</h3>
              <div className="py-4 flex flex-col gap-2 text-left">
                <h4 className="text-xl font-bold line-through text-gray-500">
                  ${yearly ? plan.yearlyPrice * 2 : plan.price * 2}
                </h4>
                <div className="flex items-center gap-2">
                  <h4 className="text-3xl font-bold">
                    ${yearly ? plan.yearlyPrice : plan.price}
                  </h4>
                  <span className="font-semibold text-gray-500">
                    /{plan.period}
                  </span>
                </div>
                {plan.period === "one-time" && (
                  <span className="text-sm text-gray-800 font-bold py-2">
                    Pay once, use forever
                  </span>
                )}
                <div className="font-bold text-lg text-green-600">50% OFF</div>
              </div>
              <div className="grid gap-1">
                {plan.features.map((feature, i) => (
                  <p key={i} className="text-sm flex items-center gap-2">
                    <span className="w-5 h-5">
                      <CheckIcon className="w-5 h-5 text-green-600" />
                    </span>
                    <span className="text-base">{feature}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="pt-5">
              <Link
                href="/"
                className="border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white duration-300 transition-all px-4 py-3 rounded-md block text-center"
              >
                Get {plan.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
