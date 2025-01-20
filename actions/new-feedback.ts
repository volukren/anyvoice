"use server";

import { authOptions } from "@/lib/auth/options";
import { log } from "@/lib/utils";
import { getServerSession } from "next-auth";

export async function newFeedback(
  feedback: string
): Promise<{ error?: string; success?: string }> {
  try {
    if (!feedback || feedback.length < 4 || feedback.length > 255) {
      return { error: "Feedback must be between 4 and 255 characters" };
    }
    const session = await getServerSession(authOptions);
    if (!session) {
      return { error: "You must be logged in to submit feedback" };
    }
    const user = session.user;
    await log({
      message: `User ${user.email} submitted feedback: ${feedback}`,
      type: "info",
    });
    console.log(`Feedback ${feedback} submitted by ${user.email}`);
    return { success: "Feedback submitted" };
  } catch (error) {
    return { error: "Something went wrong. Please, try again later" };
  }
}
