"use client";
import { textToSpeech } from "@/actions/text-to-speech";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";

type GenerateVoiceFormProps = {
  voiceId: number;
};

const textSchema = z
  .string()
  .min(2, { message: "Min 2 characters" })
  .max(5000, { message: "Max 5000 characters" });

export default function GenerateVoiceForm({ voiceId }: GenerateVoiceFormProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [text, setText] = useState<string>("");
  const [url, setUrl] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      setLoading(true);
      setUrl(null);
      event.preventDefault();

      const validation = textSchema.safeParse(text);
      if (!validation.success) {
        setError(validation.error.issues[0].message);
        return;
      }

      const response = await textToSpeech(voiceId, text);
      if (response.success) {
        setUrl(response.url!);
      } else {
        setError(response.message!);
      }
    } catch (error) {
      setError("Something went wrong. Please, try again later");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="grid gap-4 my-4">
        {error && <div className="text-red-500">{error}</div>}
        <div className="grid gap-2">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-3">
            <label htmlFor="text" className="cursor-pointer">
              Text <span className="text-red-500">*</span>
            </label>
            <span className="text-xs">
              Min 2 characters, Max 5000 characters
            </span>
          </div>
          <textarea
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            className="border rounded-md p-3"
            rows={5}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary text-primary-foreground rounded-md p-3 font-bold"
          disabled={loading}
        >
          {loading ? "Please wait..." : "Generate Speech"}
        </button>
      </form>

      {url && (
        <div className="py-5 flex flex-col gap-5">
          <h2 className="font-bold text-lg text-green-600">
            Speech generated successfully
          </h2>
          <audio controls className="w-full">
            <source src={url} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <Link
            href={url}
            download="speech.wav"
            className="text-primary border-2 border-primary text-center font-bold p-2 rounded-md"
          >
            Download generated audio
          </Link>
        </div>
      )}
    </>
  );
}
