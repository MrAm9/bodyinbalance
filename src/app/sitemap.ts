import type { MetadataRoute } from "next";

import { pageSeo } from "@/data/seo";
import { getActiveServices } from "@/features/services/server";
import { env } from "@/lib/env";
import { absoluteUrl } from "@/lib/schema";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const services = await getActiveServices();

  const staticPages = Object.values(pageSeo).map((page) => ({
    url: absoluteUrl(env.SITE_URL, page.path),
    changeFrequency: "monthly" as const,
    priority: page.path === "/" ? 1 : 0.7,
  }));

  const servicePages = services.map((service) => ({
    url: absoluteUrl(env.SITE_URL, `/massazh/${service.slug}/`),
    lastModified: service.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}
