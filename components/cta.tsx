import Link from "next/link";

export default function CTA() {
  return (
    <div className="bg-primary rounded-md text-white py-10">
      <h2 className="text-3xl font-bold text-center">
        Ready to start cloning?
      </h2>
      <div className="flex justify-center items-center py-10">
        <Link
          href="/app"
          className="bg-white text-primary font-bold px-5 py-4 rounded-md text-center"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
