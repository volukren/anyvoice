import Link from "next/link";

export default async function MyVoicesPage() {
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
    </>
  );
}
