import { MetadataRoute } from "next";

export const revalidate = 300;

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://anyvoice.app",
      lastModified: new Date(),
    },
  ];
}
