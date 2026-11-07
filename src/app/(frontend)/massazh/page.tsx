import { PageHeader } from "@/components/layout/PageHeader";
import { BookingSteps } from "@/components/sections/booking-steps/BookingSteps";
import { Concerns } from "@/components/sections/concerns/Concerns";
import { ServicesMenu } from "@/components/sections/services-menu/ServicesMenu";
import { servicesPage } from "@/data/pages";
import { pageSeo } from "@/data/seo";
import { services } from "@/data/services";
import { env } from "@/lib/env";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.services);

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        siteUrl={env.SITE_URL}
        crumbs={[{ name: servicesPage.eyebrow, path: pageSeo.services.path }]}
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
        lead={servicesPage.lead}
      />
      <ServicesMenu services={services} />
      <Concerns services={services} />
      <BookingSteps />
    </main>
  );
}
