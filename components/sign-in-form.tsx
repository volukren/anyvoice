"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const email = e.currentTarget.email.value;
    await signIn("email", { email, callbackUrl: "/", redirect: true });
    setLoading(false);
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="rounded-lg flex flex-col w-full max-w-lg"
    >
      <div className="grid gap-2">
        <label htmlFor="email" className="cursor-pointer">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="p-2 rounded-md bg-gray-100 border outline:none"
          placeholder="johndoe@example.com"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-primary text-primary-foreground py-2 rounded-md font-semibold"
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign in with email"}
      </button>
    </form>
  );
}
