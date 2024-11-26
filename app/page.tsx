import Header from "@/components/header";
import Hero from "@/components/hero";
import Examples from "@/components/examples";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://anyvoice.app" key="canonical" />
      </Head>
      <div className="flex flex-col h-full w-full">
        <div className="w-full flex-1">
          <div className="shadow">
            <Header className="p-4 max-w-5xl mx-auto" />
          </div>
          <div className="bg-gradient-to-b from-primary/10 via-primary/5 to-transparent">
            <div className="max-w-5xl mx-auto px-4">
              <Hero className="py-10 lg:py-30" />
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4">
            <div className="p-5 bg-gray-100/70 rounded-md">
              <Examples />
            </div>
            <Pricing className="py-16 lg:py-32" link="/app/billing" />
            <div className="py-16 lg:py-32">
              <CTA />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
