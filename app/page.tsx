import Header from "@/components/header";
import Hero from "@/components/hero";
import Examples from "@/components/examples";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4">
        <div className="pt-5">
          <Header />
        </div>
        <Hero className="pt-20 pb-32" />
        <Examples />
        <Pricing className="py-16 lg:py-32" link="/app/billing" />
        <div className="py-16 lg:py-32">
          <CTA />
        </div>
      </div>
      <Footer />
    </>
  );
}
