import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { examples } from "@/lib/examples";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Generated Voice Examples - AnyVoice",
  alternates: {
    canonical: "https://anyvoice.app/voices",
  },
};

export default function VoicesPage() {
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="w-full flex-1">
        <div className="shadow">
          <Header className="p-4 max-w-5xl mx-auto" />
        </div>
        <div className="max-w-5xl mx-auto py-10 lg:py-20 px-4">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="font-bold tracking-tight text-4xl xl:text-5xl text-black">
              Explore voices created by our AI
            </h1>
            <p className="mt-5 text-lg text-gray-800 lg:text-xl text-black/70">
              See what you can create using AnyVoice
            </p>
          </div>
          <div className="py-10 lg:py-20 flex gap-5">
            {examples.map((example, i) => {
              return (
                <Link
                  key={i}
                  href={`/voices/${example.slug}`}
                  className={`flex flex-col gap-2 items-center p-3 rounded-md hover:rotate-12 transform transition-transform duration-300`}
                >
                  <Image
                    src={example.image}
                    alt={example.name}
                    width={80}
                    height={80}
                  />
                  <p className="text-gray-800 text-sm font-extrabold text-center">
                    {example.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
