import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://juanjosegarcia.dev",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
