import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Providers from "@/app/providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import Script from "next/script";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `AnyVoice: AI-powered voice cloning, turning your text into any voice you want`,
  description:
    "High-quality AI voice cloning in seconds. Upload an audio sample and create a custom voice instantly",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased text-sm text-foreground`}
      >
        <Providers session={session}>{children}</Providers>
      </body>
      <Script async src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
