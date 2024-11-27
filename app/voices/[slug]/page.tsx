import Footer from "@/components/footer";
import Header from "@/components/header";
import { examples } from "@/lib/examples";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const voice = examples.find((voice) => voice.slug === params.slug);

  if (!voice) {
    return {
      title: "AI Voice",
    };
  }

  return {
    title: `${voice?.name} AI Voice - AnyVoice`,
    alternates: {
      canonical: `https://anyvoice.app/voices/${voice.slug}`,
    },
  };
}

export default function VoicePage({ params }: { params: { slug: string } }) {
  const voice = examples.find((voice) => voice.slug === params.slug);

  if (!voice) {
    notFound();
  }

  return (
    <div className="flex flex-col h-screen w-full bg-base-200">
      <div className="w-full flex-1">
        <div className="bg-base-100">
          <Header className="p-4 max-w-5xl mx-auto" />
        </div>
        <div className="py-20 lg:py-30 max-w-5xl mx-auto px-4">
          <Image
            src={voice.image}
            alt={voice.name}
            width={100}
            height={100}
            className="mx-auto rounded-full"
          />
          <h1 className="max-w-xl mx-auto text-4xl font-extrabold tracking-tight text-center">
            {voice.name} AI Voice
          </h1>
          <div className="py-3 max-w-3xl mx-auto text-center">
            <p className="tracking-wide text-lg">
              Try the best AI tool that turns any text into {voice.name}'s
              voice!
            </p>
          </div>
          <div className="py-10 lg:py-16 grid grid-cols-1 md:grid-cols-2 gap-5">
            {voice.examples.map((example, i) => (
              <div key={i} className="rounded-md p-6 relative bg-base-100">
                <div className="absolute top-0 right-0 bg-primary py-0.5 px-1 rounded-tr-md rounded-bl-md text-primary-foreground text-xs">
                  AI Generated
                </div>
                <p className="text-gray-800 text-base mb-4 text-center">
                  {example.text}
                </p>
                <audio
                  src={example.voiceFile}
                  controls
                  className="w-full h-10"
                />
              </div>
            ))}
          </div>
          <div className="py-10 lg:py-16"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
