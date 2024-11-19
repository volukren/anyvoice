import { getSamples } from "@/actions/get-samples";
import clsx from "clsx";
import dayjs from "dayjs";
import Link from "next/link";

export default async function MyVoicesPage() {
  const samples = await getSamples();

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-primary">My Voices</h1>
        <Link
          href="/app/add-sample"
          className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md"
        >
          New voice
        </Link>
      </div>
      <div className="bg-white p-5 my-2 rounded-md grid grid-cols-1 md:grid-cols-3 gap-4">
        {samples.map((s) => {
          return (
            <Link
              href={`/app/sample/${s.id}`}
              key={s.id}
              className={clsx(
                "flex flex-col gap-4 border rounded text-center p-3 hover:border-primary"
              )}
            >
              <span className="font-bold text-lg">{s.name}</span>
              <span>{dayjs(s.createdAt).format("MMM D, YYYY")}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
