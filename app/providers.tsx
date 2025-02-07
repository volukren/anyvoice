"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

interface ProviderProps {
  children: React.ReactNode;
  session: Session | null;
}

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "always", // or 'always' to create profiles for anonymous users as well
  });
}

export default function Providers({ children, session }: ProviderProps) {
  return (
    <PostHogProvider client={posthog}>
      <SessionProvider session={session}>{children}</SessionProvider>
    </PostHogProvider>
  );
}
