"use client";
import clsx from "clsx";
import { CheckIcon, GiftIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Plan, plans } from "@/lib/constants";

export default function Pricing({
  className,
  link,
  showTitle,
}: {
  className?: string;
  link?: string;
  showTitle?: boolean;
}) {
  const [yearly, setYearly] = useState<boolean>(true);

  return (
    <div className={className} id="pricing">
      {showTitle && (
        <h2 className="text-2xl md:text-3xl text-primary font-bold text-center">
          Pricing
        </h2>
      )}
      <div className="flex justify-center items-center gap-5 py-5">
        <div className="flex gap-2 bg-red-50 rounded-full p-2">
          <button
            className={clsx("p-1 rounded-full font-semibold", {
              "bg-primary border-primary text-primary-foreground": !yearly,
            })}
            onClick={() => setYearly(false)}
          >
            Monthly
          </button>
          <button
            className={clsx("p-1 rounded-full font-semibold", {
              "bg-primary border-primary text-primary-foreground": yearly,
            })}
            onClick={() => setYearly(true)}
          >
            Yearly{" "}
            <span className={clsx("text-green-600", { "text-white": yearly })}>
              (2 months free)
            </span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 py-10">
        {plans.map((plan: Plan, i) => (
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
                href={link ? link : yearly ? plan.yearlyLink : plan.link}
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
