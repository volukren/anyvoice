import { authOptions } from "@/lib/auth/options";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <h1 className="text-2xl font-bold text-primary">Settings</h1>
      <div className="py-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold border-b pb-2">Account</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg py-2">
            <div>Email</div>
            <div className="col-span-2 flex">
              <div className="rounded-md bg-gray-100 w-full max-w-md p-2">
                {session?.user.email}
              </div>
            </div>
            <div>Subscription Plan</div>
            <div className="flex">Basic</div>
            <div className="flex justify-end">
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
