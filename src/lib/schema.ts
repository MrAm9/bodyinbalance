interface Crumb {
  name: string;
  path: string;
}

interface BusinessInput {
  siteUrl: string;
  name: string;
  description: string;
  phone: string;
  streetAddress: string;
  city: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  opens: string;
  closes: string;
  sameAs: string[];
}

export function absoluteUrl(siteUrl: string, path: string): string {
  return new URL(path, siteUrl).toString();
}

export function businessSchema(input: BusinessInput) {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": absoluteUrl(input.siteUrl, "/#business"),
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.siteUrl, "/"),
    image: absoluteUrl(input.siteUrl, "/og.jpg"),
    telephone: input.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: input.streetAddress,
      addressLocality: input.city,
      postalCode: input.postalCode,
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: input.latitude,
      longitude: input.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: input.opens,
      closes: input.closes,
    },
    sameAs: input.sameAs,
  };
}

export function websiteSchema(siteUrl: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url: absoluteUrl(siteUrl, "/"),
    inLanguage: "ru-RU",
  };
}

export function breadcrumbSchema(siteUrl: string, crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, position) => ({
      "@type": "ListItem",
      position: position + 1,
      name: crumb.name,
      item: absoluteUrl(siteUrl, crumb.path),
    })),
  };
}

export function serviceSchema(
  siteUrl: string,
  service: {
    name: string;
    description: string;
    path: string;
    prices: number[];
  },
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: absoluteUrl(siteUrl, service.path),
    provider: { "@id": absoluteUrl(siteUrl, "/#business") },
    areaServed: "Москва, Южное Бутово",
    offers: service.prices.map((price) => ({
      "@type": "Offer",
      price,
      priceCurrency: "RUB",
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
