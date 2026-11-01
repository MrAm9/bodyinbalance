import type { Metadata } from "next";

interface PageSeo {
  title: string;
  description: string;
}

// canonical, OG and JSON-LD are added once the production domain is known
export function buildMetadata({ title, description }: PageSeo): Metadata {
  return {
    title,
    description,
    openGraph: { title, description, locale: "ru_RU", type: "website" },
  };
}
