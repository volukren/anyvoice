"use server";

import { nameSchema } from "@/lib/zod/sample-name-schema";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { revalidatePath } from "next/cache";

export async function saveSampleAudio(name: string, filename: string) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return {
        success: false,
        message: "Forbidden",
      };
    }

    const validation = nameSchema.safeParse(name);
    if (!validation.success) {
      return {
        success: false,
        message: validation.error.issues[0].message,
      };
    }

    const saveSampleAudio = await prisma.sampleAudio.create({
      data: {
        name,
        audioFile: filename,
        userId: session.user.id,
      },
    });

    console.log("save sampleAudio", saveSampleAudio);

    revalidatePath("/app");

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Something went wrong. Please, try again",
    };
  }
}
