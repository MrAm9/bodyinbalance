import type { MetadataRoute } from "next";

import { pageSeo } from "@/data/seo";
import { services } from "@/data/services";
import { env } from "@/lib/env";
import { absoluteUrl } from "@/lib/schema";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = Object.values(pageSeo).map((page) => ({
    url: absoluteUrl(env.SITE_URL, page.path),
    changeFrequency: "monthly" as const,
    priority: page.path === "/" ? 1 : 0.7,
  }));

  const servicePages = services.map((service) => ({
    url: absoluteUrl(env.SITE_URL, `/massazh/${service.slug}/`),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}
