"use server";

import { authOptions } from "@/lib/auth/options";
import { getFileUrl } from "@/lib/files/get-file-url";
import { prisma } from "@/lib/prisma";
import { replicate } from "@/lib/replicate";
import { getServerSession } from "next-auth";
import { v4 as uuidv4 } from "uuid";
import { uploadFileToBucket } from "@/lib/files/upload-to-bucket";
import { revalidatePath } from "next/cache";

export async function textToSpeech(
  voiceId: number,
  text: string
): Promise<{ success: boolean; message?: string; url?: string }> {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return {
        success: false,
        message: "Forbidden",
      };
    }

    const sampleAudio = await prisma.sampleAudio.findFirst({
      where: {
        AND: [
          {
            userId: session.user.id,
          },
          {
            id: voiceId,
          },
        ],
      },
    });

    if (!sampleAudio) {
      return {
        success: false,
        message: "Sample not found",
      };
    }

    const key = `users/${session.user.email}/samples/${sampleAudio.audioFile}`;

    const url = await getFileUrl(key);

    const output = await replicate.run(
      "lucataco/xtts-v2:684bc3855b37866c0c65add2ff39c78f3dea3f4ff103a436465326e0f438d55e",
      {
        input: {
          text,
          speaker: url,
          language: "en",
          cleanup_voice: false,
        },
      }
    );

    const resultKey = `users/${session.user.email}/results/${uuidv4()}.wav`;

    // @ts-ignore
    await uploadFileToBucket(output, resultKey);

    const resultUrl = await getFileUrl(resultKey);

    const savedRequest = await prisma.request.create({
      data: {
        sampleAudioId: voiceId,
        text,
        characterCount: text.length,
      },
    });

    revalidatePath("/app/history");

    console.log("saved request: ", savedRequest);

    return {
      success: true,
      url: resultUrl,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Something went wrong. Please, try again later",
    };
  }
}
