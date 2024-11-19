import { Upload } from "@aws-sdk/lib-storage";
import { s3Client } from "@/lib/s3";
import { ReadStream } from "fs";

export async function uploadFileToBucket(stream: ReadStream, filename: string) {
  const Key = filename;
  const Bucket = process.env.CLOUDFLARE_BUCKET_NAME!;

  let res;
  try {
    const parallelUploads = new Upload({
      client: s3Client,
      params: {
        Bucket,
        Key,
        Body: stream,
        ACL: "public-read",
        ContentType: "audio/wav",
      },
    });

    res = parallelUploads.done();
  } catch (error) {
    throw error;
  }
  return res;
}
