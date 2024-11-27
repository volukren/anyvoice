import { authOptions } from "@/lib/auth/options";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user.id,
    },
  });

  return (
    <>
      <h1 className="text-2xl font-bold text-primary">Settings</h1>
      <div className="my-2 p-5 bg-base-100 rounded-md">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold border-b pb-2">Account</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg py-2">
            <div className="font-semibold">Email</div>
            <div className="col-span-2 flex">
              <div className="rounded-md bg-gray-100 w-full max-w-md p-2">
                {session?.user.email}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg py-2">
            <div className="font-semibold">Subscription</div>
            <div className="flex flex-col gap-1">
              <span>{user?.plan}</span>
              <span className="text-sm grid text-gray-700">
                <span>Characters left: {user?.characters}</span>
                <span>Sample voices left: {user?.voices}</span>
                <div className="flex pt-2">
                  <Link
                    href="/app/billing"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground py-0.5 px-1 rounded-md"
                  >
                    Upgrade
                  </Link>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
