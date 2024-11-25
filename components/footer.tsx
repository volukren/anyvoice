import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t py-5">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="text-sm text-center">
          &copy; {new Date().getFullYear()} AnyVoice. All rights reserved.
        </div>
        <div className="flex justify-end items-center gap-4">
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
          <Link href="/tos" className="underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
