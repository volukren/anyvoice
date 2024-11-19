"use client";

import AudioUploader from "@/components/audio-uploader";
import { useState } from "react";
import { saveSampleAudio } from "@/actions/save-sample-audio";
import { useRouter } from "next/navigation";

export default function AddVoiceForm() {
  const [filename, setFilename] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      setError(null);

      setLoading(true);
      event.preventDefault();

      if (!filename) {
        setError("Upload sample audio");
        return;
      }

      const response = await saveSampleAudio(name, filename);

      if (!response.success) {
        setError(response.message!);
        return;
      }

      router.push("/app");
    } catch (error) {
      setError("Something went wrong. Please, try again later");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <div className="flex flex-col md:flex-row gap-2 items-start md:items-end">
          <label htmlFor="name">
            Model name <span className="text-red-600">*</span>
          </label>
          <span className="text-xs">Only letters and numbers</span>
        </div>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded-md border"
        />
      </div>
      <div className="grid gap-2">
        <div className="flex flex-col md:flex-row gap-2 items-start md:items-end">
          <label htmlFor="file-uploader">
            Upload sample audio <span className="text-red-600">*</span>
          </label>
          <span className="text-xs">Min 10s, Recommended 30s+</span>
        </div>
        <AudioUploader onComplete={(filename) => setFilename(filename)} />
      </div>
      <div className="flex justify-between items-center">
        {error ? <div className="text-red-500">{error}</div> : <div></div>}
        <button
          type="submit"
          className="bg-primary text-primary-foreground p-3 rounded-md"
          disabled={loading}
        >
          {loading ? "Please wait..." : "Create"}
        </button>
      </div>
    </form>
  );
}
