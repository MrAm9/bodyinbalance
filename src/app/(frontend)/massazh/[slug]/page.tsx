import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceDetail } from "@/components/sections/service-detail/ServiceDetail";
import { ServiceFaqAndOthers } from "@/components/sections/service-detail/ServiceFaqAndOthers";
import { buttonVariants } from "@/components/ui/button-variants";
import { JsonLd } from "@/components/ui/JsonLd";
import { studio } from "@/data/contacts";
import { bookingHref } from "@/data/navigation";
import { servicePage, servicesPage } from "@/data/pages";
import { pageSeo } from "@/data/seo";
import {
  getActiveServices,
  getServiceBySlug,
} from "@/features/services/server";
import { ru } from "@/i18n/ru";
import { env } from "@/lib/env";
import { serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 300;

export async function generateStaticParams() {
  const services = await getActiveServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/massazh/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title:
      service.seo?.title ||
      `${service.title} в Южном Бутово — «Тело в балансе»`,
    description: service.seo?.description || service.summary,
    path: `/massazh/${service.slug}/`,
  });
}

export default async function ServicePage({
  params,
}: PageProps<"/massazh/[slug]">) {
  const { slug } = await params;
  const [service, services] = await Promise.all([
    getServiceBySlug(slug),
    getActiveServices(),
  ]);
  if (!service) notFound();

  const path = `/massazh/${service.slug}/`;
  const [mainPhone] = studio.phones;

  return (
    <main>
      <JsonLd
        schema={serviceSchema(env.SITE_URL, {
          name: service.title,
          description: service.summary,
          path,
          prices: service.options.map((option) => option.priceRub),
        })}
      />
      <PageHeader
        siteUrl={env.SITE_URL}
        crumbs={[
          { name: servicesPage.eyebrow, path: pageSeo.services.path },
          { name: service.title, path },
        ]}
        eyebrow={servicePage.eyebrow}
        title={service.title}
        lead={service.summary}
      >
        <div data-reveal className="mt-10 flex flex-wrap gap-4">
          <Link href={bookingHref} className={buttonVariants({ size: "lg" })}>
            {servicePage.action}
          </Link>
          <a
            href={mainPhone.href}
            className={buttonVariants({ tone: "outline", size: "lg" })}
          >
            {ru.hero.call}
          </a>
        </div>
      </PageHeader>
      <ServiceDetail service={service} />
      <ServiceFaqAndOthers
        service={service}
        otherServices={services.filter((other) => other.id !== service.id)}
      />
    </main>
  );
}
