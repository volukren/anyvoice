import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t p-5 bg-base-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-start md:justify-between md:items-start">
        <div className="text-sm text-left md:text-center">
          &copy; {new Date().getFullYear()} AnyVoice. All rights reserved.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-0 gap-5">
          <div className="flex flex-col gap-2">
            <div className="font-bold text-black/70">Links</div>
            <Link href="https://allpmjobs.com" className="underline">
              AllPMJobs
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-black/70">Resources</div>
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>
            <Link href="/tos" className="underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
