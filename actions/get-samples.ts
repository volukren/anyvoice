"use server";

import { authOptions } from "@/lib/auth/options";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function getSamples() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return [];
    }
    return await prisma.sampleAudio.findMany({
      where: {
        OR: [
          {
            userId: session.user.id,
          },
          {
            public: true
          }
        ]
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
