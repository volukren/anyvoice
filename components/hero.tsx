import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export default function Hero({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2",
        className,
      )}
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-center md:text-left">
          The best AI in voice cloning
        </h1>
        <div className="py-3 max-w-xl mx-auto text-center md:text-left">
          <p className="tracking-wide text-xl">
            Clone any voice in seconds from an audio sample and use it to speak
            any text
          </p>
        </div>
        <div className="py-10 flex justify-center md:justify-start">
          <Link
            href="/app"
            className="font-medium text-white text-lg bg-primary rounded-md hover:bg-primary/80 px-10 py-4"
          >
            Get started
          </Link>
        </div>
      </div>
      <div className="hidden md:flex md:justify-end">
        <Image src="/voices.png" alt="Hero image" width={400} height={400} />
      </div>
    </div>
  );
}
