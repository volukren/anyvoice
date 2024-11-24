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
      <div className="my-2 p-5 bg-white rounded-md">
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
            <div className="font-semibold">Subscription Plan</div>
            <div className="flex">{user?.plan || "No plan"}</div>
            <div className="flex md:justify-end">
              <Link
                href="/app/billing"
                className="text-primary border-2 border-primary p-2 rounded-md transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Manage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
