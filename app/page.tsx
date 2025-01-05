import Header from "@/components/header";
import Hero from "@/components/hero";
import Examples from "@/components/examples";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import type { Metadata } from "next";
import {AudioWaveformIcon, BookIcon, Megaphone, MegaphoneIcon, MicIcon, SmartphoneIcon, VideoIcon} from "lucide-react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://anyvoice.app",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full bg-base-200">
      <div className="w-full flex-1">
        <div className="bg-base-100">
          <Header className="p-4 max-w-5xl mx-auto" />
        </div>
        <div className="bg-gradient-to-b from-primary/10 via-primary/5 to-transparent">
          <div className="max-w-5xl mx-auto px-4">
            <Hero className="py-10 lg:py-30" />
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4">
          <div className="p-5 bg-base-300 rounded-md">
            <Examples />
          </div>
          <div className="p-5 py-16 lg:py-32 space-y-4">
            <h2 className="text-center text-primary text-4xl font-bold">
              No voice actor ? No problem
            </h2>
            <p className="text-center tracking-wide text-lg max-w-xl mx-auto text-balance">
              Using AI-powered voice cloning, you can perform dubs, create voiceovers, produce podcasts and audiobooks, and more
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
              <div className="bg-primary/5 p-5 rounded-md space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <BookIcon className="text-primary"/><span>Audiobooks</span>
                </h3>
                <p className="text-lg">Turn your books into audiobooks</p>
              </div>
              <div className="bg-primary/5 p-5 rounded-md space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <VideoIcon className="text-primary"/><span>Voiceovers</span>
                </h3>
                <p className="text-lg">Overlay a voiceover on your video</p>
              </div>
              <div className="bg-primary/5 p-5 rounded-md space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <SmartphoneIcon className="text-primary"/><span>Tiktok shorts</span>
                </h3>
                <p className="text-lg">Make viral short clips and faceless videos</p>
              </div>
              <div className="bg-primary/5 p-5 rounded-md space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <MicIcon className="text-primary"/><span>Podcasts</span>
                </h3>
                <p className="text-lg">Voice podcasts without saying a word</p>
              </div>
              <div className="bg-primary/5 p-5 rounded-md space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <MegaphoneIcon className="text-primary"/><span>Ads</span>
                </h3>
                <p className="text-lg">Build professional ads using AI-cloned voices, hassle-free</p>
              </div>
              <div className="bg-primary/5 p-5 rounded-md space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <AudioWaveformIcon className="text-primary"/><span>Any spoken content</span>
                </h3>
                <p className="text-lg">Voice any spoken content with AI—no need to speak yourself</p>
              </div>
            </div>
          </div>
          <Pricing className="py-16 lg:py-32" link="/app/billing"/>
          <div className="py-16 lg:py-32">
            <CTA/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
