import AddVoiceForm from "@/components/add-voice-form";

export default async function AddSamplePage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-primary">New voice</h1>
      <div className="bg-white p-5 my-2">
        <AddVoiceForm />
      </div>
    </>
  );
}
