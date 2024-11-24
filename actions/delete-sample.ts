"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { prisma } from "@/lib/prisma";

export async function deleteSample(
  id: number,
): Promise<{ success: boolean; message?: string }> {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return {
        success: false,
        message: "Forbidden",
      };
    }

    const sample = await prisma.sampleAudio.findUnique({
      where: {
        id,
      },
    });

    if (!sample || sample.userId !== session.user.id) {
      return {
        success: false,
        message: "Not Found",
      };
    }

    await prisma.sampleAudio.delete({
      where: {
        id,
      },
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Internal Server Error",
    };
  }
}
