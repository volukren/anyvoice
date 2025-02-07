import type { Metadata } from "next";
import "@/styles/globals.css";
import { Signika } from "next/font/google";
import Providers from "@/app/providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";

const signika = Signika({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Free AI voice cloning tool - AnyVoice`,
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
        className={`${signika.className} antialiased text-sm text-foreground`}
      >
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
