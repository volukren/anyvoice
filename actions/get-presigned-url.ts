"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "@/lib/s3";
const mime = require("mime-types");

export async function getPresignedUrl(
  fileType: string,
): Promise<{ success: boolean; url?: string; filename?: string }> {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return {
        success: false,
      };
    }

    const filename = `users/${session.user.email}/${uuidv4()}.${mime.extension(fileType)}`;

    const command = new PutObjectCommand({
      Bucket: process.env.CLOUDFLARE_BUCKET_NAME!,
      Key: filename,
      ContentType: fileType,
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // URL будет действовать 1 час

    return {
      success: true,
      url,
      filename,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
}
