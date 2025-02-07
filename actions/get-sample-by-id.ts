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
    const sampleFromDB = await prisma.sampleAudio.findFirst({
      where: { id },
    });
    if (!sampleFromDB) {
      return null;
    }
    if (sampleFromDB.userId !== session.user.id && !sampleFromDB.public) {
      return null;
    }
    return sampleFromDB;
  } catch (error) {
    console.error(error);
    return null;
  }
}
