import type { Metadata } from "next";

interface PageSeo {
  title: string;
  description: string;
  // Path with the trailing slash, e.g. "/massazh/"; resolved against metadataBase from the root layout
  path: string;
}

export const ogImage = { url: "/og.jpg", width: 1200, height: 630 } as const;

export function buildMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      locale: "ru_RU",
      type: "website",
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
