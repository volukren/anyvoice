"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import clsx from "clsx";

export default function Header({ className }: { className?: string }) {
  const { status } = useSession();

  return (
    <div className={clsx("flex justify-between items-center", className)}>
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="font-bold text-xl lg:text-2xl flex gap-1 items-center"
        >
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span>AnyVoice</span>
        </Link>
        <Link
          href="/#pricing"
          className="font-semibold hidden md:block ml-3 py-1 px-2 rounded-md hover:bg-primary/5 hover:text-primary"
        >
          Pricing
        </Link>
        <Link
          href="/voices"
          className="font-semibold hidden md:block py-1 px-2 rounded-md hover:bg-primary/5 hover:text-primary"
        >
          Examples
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <div className="hidden md:flex md:items-center md:gap-2"></div>
        {status !== "authenticated" && (
          <div className="flex gap-2 items-center">
            <Link
              href="/auth/signin"
              className="font-bold text-primary border border-primary hover:bg-primary py-2 px-3 rounded-md hover:text-primary-foreground duration-300 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/app"
              className="font-bold text-primary-foreground bg-primary hover:bg-primaru/90 py-2 px-3 rounded-md"
            >
              Try for Free
            </Link>
          </div>
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
