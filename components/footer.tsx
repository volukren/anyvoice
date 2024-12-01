import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t p-5 bg-base-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-start md:justify-between md:items-start">
        <div className="text-sm text-left md:text-center">
          &copy; {new Date().getFullYear()} AnyVoice. All rights reserved.{" "}
          <div className="flex flex-col items-start gap-4 pt-5">
            <a href="https://dang.ai/" target="_blank">
              <img
                src="https://cdn.prod.website-files.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png"
                alt="Dang.ai"
                style={{ width: "150px", height: "54px" }}
                width="150"
                height="54"
              />
            </a>
            <a href="https://www.aitoolzdir.com" target="_blank">
              AI Toolz Dir
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
