import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/app/billing", "/app", "/auth/signin"],
      },
    ],
    sitemap: `https://anyvoice.app/sitemap.xml`,
  };
}
