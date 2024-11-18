import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <div className="text-center flex flex-col gap-5">
      <h1 className="text-xl md:text-3xl font-bold">Unable to sign in</h1>
      <p className="text-lg tracking-wide text-foreground/80">
        The sign in link is no longer valid
      </p>
      <p className="text-lg tracking-wide text-foreground/80">
        It may have been used already or it may have expired
      </p>
      <Link
        href="/auth/signin"
        className="w-full text-center text-primary-foreground bg-primary hover:bg-primary/90 rounded-md font-semibold py-4"
      >
        Sign in
      </Link>
    </div>
  );
}
