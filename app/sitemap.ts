import { MetadataRoute } from "next";
import { examples } from "@/lib/examples";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://anyvoice.app",
      lastModified: new Date(),
    },
    {
      url: "https://anyvoice.app/voices",
      lastModified: new Date(),
    },
    ...examples.map((example) => ({
      url: `https://anyvoice.app/voices/${example.slug}`,
      lastModified: new Date(),
    })),
  ];
}
