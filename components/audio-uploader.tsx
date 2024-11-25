"use client";

import { useState } from "react";
import { FolderIcon, TrashIcon } from "lucide-react";
import { getPresignedUrl } from "@/actions/get-presigned-url";
import { LoadingDots } from "@/components/loading-dots";
import { z } from "zod";

const AUDIO_MIME_TYPES = [
  "audio/mpeg", // MP3
  "audio/wav", // WAV
  "audio/m4a", // m4a
  "audio/ogg", // OGG
];

const audioFileSchema = z.instanceof(File).refine(
  (file) => {
    const isAudioFile = AUDIO_MIME_TYPES.includes(file.type);
    const isValidSize = file.size <= 5 * 1024 * 1024;
    return isAudioFile && isValidSize;
  },
  {
    message:
      "Max upload file size: 5MB. Supported file types: wav, mp3, m4a or ogg",
  },
);

export default function AudioUploader({
  onComplete,
}: {
  onComplete?: (filename: string) => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const currentFile = e.target.files?.item(0);
    if (currentFile) {
      setLoading(true);
      try {
        const validation = audioFileSchema.safeParse(currentFile);

        if (!validation.success) {
          setError(validation.error.issues[0].message);
          return;
        }

        setFile(currentFile);

        const presignedResponse = await getPresignedUrl(currentFile.type);
        if (!presignedResponse.success) {
          setFile(null);
          setError(
            presignedResponse.message
              ? presignedResponse.message
              : "Something went wrong! Please try again",
          );
          return;
        }

        const url = presignedResponse.url!;

        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": currentFile.type,
          },
          body: currentFile,
        });

        if (!response.ok) {
          setError("Something went wrong. Please, try again later");
          setFile(null);
          return;
        }

        if (onComplete) {
          onComplete(presignedResponse.filename!);
        }
      } catch (error) {
        setFile(null);
        setError("Something went wrong! Please, try again");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <>
      <>
        {!file && !loading && (
          <button
            onClick={(e) => {
              e.preventDefault();
              if (!loading) {
                document.getElementById("file-uploader")?.click();
              }
            }}
            className="border-2 border-dashed p-5 rounded-md flex justify-center items-center gap-2"
          >
            <FolderIcon />
            <span>Browse</span>
          </button>
        )}

        {error && <div className="text-red-500">{error}</div>}

        {file && !loading && (
          <div className="flex justify-center items-center gap-2 border-2 border-dashed p-5 rounded-md">
            <span>{file.name}</span>
            <button
              onClick={(e) => {
                e.preventDefault();
                setFile(null);
              }}
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        )}

        {file && loading && (
          <div className="border-2 border-dashed p-5 flex justify-center items-center gap-2">
            <span>{file.name}</span>
            <LoadingDots />
          </div>
        )}
      </>

      <input
        type="file"
        accept="audio/*"
        id="file-uploader"
        className="hidden"
        onChange={handleChange}
      />
    </>
  );
}
