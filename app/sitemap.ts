import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

const routes = [
  "",
  "/lessons",
  "/online-yoga",
  "/local-yoga",
  "/saturday-morning-yoga",
  "/rakuten-senior",
  "/agreement",
  "/contact",
  "/instructor",
  "/videos",
  "/blog",
  "/privacy",
  "/legal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
