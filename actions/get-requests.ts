"use server";

import { authOptions } from "@/lib/auth/options";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function getRequests() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return [];
    }

    const samples = await prisma.sampleAudio.findMany({
      where: {
        userId: session.user.id,
      },
    });

    if (samples.length === 0) {
      return [];
    }

    return await prisma.request.findMany({
      where: {
        sampleAudioId: {
          in: samples.map((sample) => sample.id),
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}
