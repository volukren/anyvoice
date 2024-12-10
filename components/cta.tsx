import Link from "next/link";

export default function CTA() {
  return (
    <div className="py-10 space-y-5">
      <h2 className="text-3xl font-bold text-center max-w-2xl text-balance mx-auto">
        Get started with our free plan. No credit card required.
      </h2>
      <div className="flex justify-center items-center">
        <Link
          href="/app"
          className="bg-primary text-primary-foreground font-bold px-5 py-4 rounded-md text-center"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
