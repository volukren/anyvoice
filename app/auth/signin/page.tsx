import GoogleButton from "@/components/google-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Sign in | AnyVoice`,
  alternates: {
    canonical: "https://anyvoice.app/auth/signin",
  },
};

export default function SignInPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const error = searchParams.error;

  return (
    <>
      {error && (
        <div className="text-red-600 py-2 text-lg tracking-wide text-center">
          Something went wrong. Please, try again later
        </div>
      )}
      <div className="py-2">
        <GoogleButton />
      </div>
    </>
  );
}
