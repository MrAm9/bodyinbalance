import { PageHeader } from "@/components/layout/PageHeader";
import { BookingOptions } from "@/components/sections/booking-options/BookingOptions";
import { bookingPage } from "@/data/pages";
import { pageSeo } from "@/data/seo";
import { getActiveServices } from "@/features/services/server";
import { env } from "@/lib/env";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.booking);

export const revalidate = 300;

export default async function BookingPage() {
  const services = await getActiveServices();

  return (
    <main>
      <PageHeader
        siteUrl={env.SITE_URL}
        crumbs={[{ name: bookingPage.eyebrow, path: pageSeo.booking.path }]}
        eyebrow={bookingPage.eyebrow}
        title={bookingPage.title}
        lead={bookingPage.lead}
      />
      <BookingOptions services={services} />
    </main>
  );
}
