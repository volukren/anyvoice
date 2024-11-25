import GoogleButton from "@/components/google-button";
import { Head } from "@react-email/components";

export const metadata = {
  title: `Sign in | AnyVoice`,
};

export default function SignInPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const error = searchParams.error;

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://anyvoice.app/auth/signin"
          key="canonical"
        />
      </Head>
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
