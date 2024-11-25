import { getSamples } from "@/actions/get-samples";
import SampleCard from "@/components/sample-card";
import Link from "next/link";
import { Head } from "@react-email/components";

export default async function MyVoicesPage() {
  const samples = await getSamples();

  return (
    <>
      <Head>
        <link rel="canonical" href="https://anyvoice.app" key="canonical" />
      </Head>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-primary">My Voices</h1>
        <Link
          href="/app/add-sample"
          className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md"
        >
          New voice
        </Link>
      </div>
      <div className="my-2 rounded-md grid grid-cols-1 md:grid-cols-3 gap-4">
        {samples.map((s) => {
          return <SampleCard key={s.id} sample={s} />;
        })}
      </div>
    </>
  );
}
