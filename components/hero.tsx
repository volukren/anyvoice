import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import SupportedLanguages from "./supported-langs";

export default function Hero({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2",
        className
      )}
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-center md:text-left">
          Free AI voice cloning tool
        </h1>
        <div className="py-3 max-w-xl mx-auto text-center md:text-left">
          <p className="tracking-wide text-xl">
            Turn any audio sample into a voice that can say whatever you want
          </p>
        </div>
        <SupportedLanguages />
        <div className="py-5 flex justify-center md:justify-start">
          <div className="grid gap-2">
            <Link
              href="/app"
              className="font-medium text-white text-lg bg-primary rounded-md hover:bg-primary/80 px-6 py-3"
            >
              Try for Free
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
