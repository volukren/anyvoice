import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "@/lib/s3";

export async function getFileUrl(key: string): Promise<string> {
  return await getSignedUrl(
    s3Client,
    new GetObjectCommand({
      Bucket: process.env.CLOUDFLARE_BUCKET_NAME!,
      Key: key,
    }),
    { expiresIn: 3600 } // 1 hour
  );
}
