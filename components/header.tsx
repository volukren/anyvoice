"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const { status } = useSession();

  return (
    <div className="flex justify-between items-center">
      <Link
        href="/"
        className="font-bold text-xl lg:text-2xl flex gap-1 items-center"
      >
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <span>AnyVoice</span>
      </Link>
      <div className="flex gap-4 items-center">
        <div className="hidden md:flex md:items-center md:gap-2">
          <Link
            href="/#pricing"
            className="font-semibold py-2 px-3 rounded-md hover:bg-primary/5 hover:text-primary"
          >
            Pricing
          </Link>
        </div>
        {status !== "authenticated" && (
          <Link
            href="/auth/signin"
            className="font-bold bg-primary text-primary-foreground py-2 px-3 rounded-md hover:bg-primary/90"
          >
            Sign in
          </Link>
        )}
        {status === "authenticated" && (
          <Link
            href="/app"
            className="font-bold bg-primary text-primary-foreground py-2 px-3 rounded-md hover:bg-primary/90"
          >
            To dashboard
          </Link>
        )}
      </div>
    </div>
  );
}
