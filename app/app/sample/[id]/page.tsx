import { getSampleById } from "@/actions/get-sample-by-id";
import { notFound } from "next/navigation";

export default async function SamplePage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const id = params.id;
  const sampleFromDB = await getSampleById(parseInt(id));

  if (!sampleFromDB) {
    notFound();
    return;
  }

  return <>{sampleFromDB.name}</>;
}
