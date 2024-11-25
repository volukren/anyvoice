"use server";

import { nameSchema } from "@/lib/zod/sample-name-schema";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { revalidatePath } from "next/cache";
import { log } from "@/lib/utils";

type SaveSampleAudioResponse = {
  success: boolean;
  message?: string;
};

export async function saveSampleAudio(
  name: string,
  filename: string,
): Promise<SaveSampleAudioResponse> {
  try {
    const validation = nameSchema.safeParse(name);
    if (!validation.success) {
      return {
        success: false,
        message: validation.error.issues[0].message,
      };
    }

    const session = await getServerSession(authOptions);
    if (!session) {
      return {
        success: false,
        message: "Forbidden",
      };
    }

    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    });
    if (!user) {
      return {
        success: false,
        message: "Forbidden",
      };
    }

    if (user.voices === 0) {
      console.log("user.voices", user.voices);
      return {
        success: false,
        message: user.plan
          ? "You have reached the limit of sample audios for your plan"
          : "To upload a sample audio, you need to subscribe to a plan",
      };
    }

    const [saveSampleAudio] = await prisma.$transaction([
      prisma.sampleAudio.create({
        data: {
          name,
          audioFile: filename,
          userId: session.user.id,
        },
      }),
      prisma.user.update({
        where: {
          id: session.user.id,
        },
        data: {
          voices: {
            decrement: 1,
          },
        },
      }),
    ]);

    console.log("save sampleAudio", saveSampleAudio);

    revalidatePath("/app");

    return {
      success: true,
    };
  } catch (error: any) {
    await log({
      message: `Error saving sample audio: ${error.message}`,
      type: "error",
    });
    return {
      success: false,
      message: "Something went wrong. Please, try again",
    };
  }
}
