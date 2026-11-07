import { PageHeader } from "@/components/layout/PageHeader";
import { BookingOptions } from "@/components/sections/booking-options/BookingOptions";
import { bookingPage } from "@/data/pages";
import { pageSeo } from "@/data/seo";
import { services } from "@/data/services";
import { env } from "@/lib/env";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.booking);

export default function BookingPage() {
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
