"use client";
import { Trash2Icon } from "lucide-react";
import { deleteSample } from "@/actions/delete-sample";

export default function DeleteSampleButton({ id }: { id: number }) {
  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (confirm("Are you sure you want to delete this sample?")) {
      const response = await deleteSample(id);
      if (!response.success) {
        alert("🚨 Failed to delete sample");
      } else {
        alert("🎉 Sample deleted");
      }
      window.location.reload();
    }
  }

  return (
    <button
      onClick={handleClick}
      className="absolute right-2 top-2 border rounded-md p-1 hover:bg-gray-50"
    >
      <Trash2Icon className="w-4 h-4" />
    </button>
  );
}
