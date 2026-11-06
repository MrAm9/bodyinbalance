import type { MetadataRoute } from "next";

import { env } from "@/lib/env";
import { absoluteUrl } from "@/lib/schema";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin/", "/api/"] },
      // AI crawlers are allowed explicitly so the studio can be cited in AI answers
      { userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot"], allow: "/" },
    ],
    sitemap: absoluteUrl(env.SITE_URL, "/sitemap.xml"),
  };
}
