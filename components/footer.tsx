import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t p-5 bg-base-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-start md:justify-between md:items-start">
        <div className="text-sm text-left md:text-center">
          &copy; {new Date().getFullYear()} AnyVoice. All rights reserved.{" "}
          <div className="flex flex-col gap-2 text-left mt-4">
            <a href="https://sprunki-mod.com/">Sprunki Mod</a>
            <a href="https://AIBest.Tools">AI Best Tools</a>
            <a
              href="https://aibesttop.com/"
              title="aibesttop AI Tools Directory"
            >
              aibesttop AI Tools Diresctory
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row pt-4 md:pt-0 md:justify-end md:items-center gap-4">
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
