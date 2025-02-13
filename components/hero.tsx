import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import SupportedLanguages from "./supported-langs";
import { ArrowRightIcon } from "lucide-react";

export default function Hero({ className }: { className?: string }) {
  return (
    <div className={clsx("grid grid-cols-1 md:grid-cols-2", className)}>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold text-black tracking-tight text-center md:text-left">
          AI voice cloning
        </h1>
        <div className="py-3 max-w-xl mx-auto text-center md:text-left">
          <p className="tracking-wide text-xl text-black/80">
            Turn any audio sample into a voice that can say whatever you want
          </p>
        </div>
        <SupportedLanguages />
        <div className="py-5 flex justify-center md:justify-start">
          <div className="grid gap-2">
            <Link
              href="/app"
              className="font-medium text-white text-lg bg-primary rounded-md hover:bg-primary/80 px-6 py-3 flex items-center gap-2"
            >
              <span>Try for Free</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <span className="text-gray-500 font-semibold">
              No credit card required
            </span>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:justify-end">
        <Image src="/voices.png" alt="Hero image" width={400} height={400} />
      </div>
    </div>
  );
}
