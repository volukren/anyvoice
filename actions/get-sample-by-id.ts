"use server";

import { authOptions } from "@/lib/auth/options";
import { prisma } from "@/lib/prisma";
import { SampleAudio } from "@prisma/client";
import { getServerSession } from "next-auth";

export async function getSampleById(id: number): Promise<SampleAudio | null> {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return null;
    }
    return await prisma.sampleAudio.findFirst({
      where: {
        AND: [
          {
            userId: session.user.id,
          },
          {
            id,
          },
        ],
      },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}
