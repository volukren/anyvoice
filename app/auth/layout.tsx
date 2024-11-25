import Link from "next/link";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="w-96 rounded-md p-5 bg-gray-50 flex flex-col gap-5">
        <Link
          href="/"
          className="font-bold text-xl lg:text-xl text-center flex items-center gap-1 mx-auto"
        >
          <Image src="/logo.png" alt="AnyVoice logo" width={32} height={32} />
          <h1>AnyVoice</h1>
        </Link>
        {children}
      </div>
    </main>
  );
}
