import { getSampleById } from "@/actions/get-sample-by-id";
import GenerateVoiceForm from "@/components/generate-voice-form";
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
  }

  return (
    <>
      <h1 className="text-xl md:text-2xl font-bold text-primary">
        Text-to-Speech with "{sampleFromDB.name}" Voice
      </h1>
      <div className="bg-base-100 border rounded-md p-5 my-2">
        <GenerateVoiceForm voiceId={sampleFromDB.id} />
      </div>
    </>
  );
}
