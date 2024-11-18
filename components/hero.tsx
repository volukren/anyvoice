import clsx from "clsx";
import Link from "next/link";

export default function Hero({ className }: { className?: string }) {
  return (
    <div className={clsx("max-w-3xl mx-auto", className)}>
      <h1 className="text-4xl font-extrabold text-center tracking-tight">
        The best AI in voice cloning
      </h1>

      <div className="py-3 max-w-xl mx-auto text-center">
        <p className="tracking-wide text-xl text-center">
          Clone any voice in seconds from an audio sample and use it to speak
          any text
        </p>
      </div>

      <div className="flex justify-center py-10">
        <Link
          href="/app"
          className="font-medium text-white text-lg bg-primary rounded-full hover:bg-primary/80 px-10 py-4"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}
