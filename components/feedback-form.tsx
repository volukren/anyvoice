"use client";

import { newFeedback } from "@/actions/new-feedback";
import { useState } from "react";

export default function FeedbackForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event?.preventDefault();
      setLoading(true);
      setError(undefined);
      if (!feedback || feedback.length < 4 || feedback.length > 255) {
        setError("Feedback must be between 4 and 255 characters");
        return;
      }
      const response = await newFeedback(feedback);
      if (response.error) {
        setError(response.error);
      } else {
        setFeedback("");
        setSuccess(response.success);
      }
    } catch (error) {
      setError("Something went wrong. Please, try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 border rounded-md p-5"
    >
      {error && <div className="font-bold text-red-600">{error}</div>}
      {success && <div className="font-bold text-emerald-600">{success}</div>}
      <div className="space-y-2">
        <div className="font-bold text-lg">
          Please give us your feedback; IT will help us improve AnyVoice
        </div>
      </div>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        id="feedback"
        name="feedback"
        required={true}
        rows={5}
        className="border outline-none rounded-md p-2"
        placeholder="Let us know what's on your mind"
      ></textarea>
      <div className="flex">
        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-primary-foreground px-4 py-3 rounded-md"
        >
          {loading ? "Please wait..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
