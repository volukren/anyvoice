import SignInForm from "@/components/sign-in-form";

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
      <SignInForm />
    </>
  );
}
