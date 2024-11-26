import Footer from "@/components/footer";
import Header from "@/components/header";
import { examples } from "@/lib/examples";
import Head from "next/head";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const voice = examples.find((voice) => voice.slug === params.slug);

  if (!voice) {
    return {
      title: "AI Voice",
    };
  }

  return {
    title: `${voice?.name} AI Voice`,
  };
}

export default function VoicePage({ params }: { params: { slug: string } }) {
  const voice = examples.find((voice) => voice.slug === params.slug);

  if (!voice) {
    notFound();
  }

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`https://anyvoice.app/voices/${voice.slug}`}
          key="canonical"
        />
      </Head>
      <div className="flex flex-col h-screen">
        <div className="w-full flex-1">
          <div className="shadow">
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
                <div key={i} className="rounded-md p-6 border">
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
    </>
  );
}
