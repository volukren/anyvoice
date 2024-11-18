import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";

export default async function PrivateLayout() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <h1 className="text-2xl font-bold text-primary">My Voices</h1>
      <div className="flex flex-col gap-4"></div>
    </>
  );
}
