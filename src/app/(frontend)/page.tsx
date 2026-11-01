import { BookingSteps } from "@/components/sections/booking-steps/BookingSteps";
import { Concerns } from "@/components/sections/concerns/Concerns";
import { Faq } from "@/components/sections/faq/Faq";
import { Hero } from "@/components/sections/hero/Hero";
import { Location } from "@/components/sections/location/Location";
import { MasterIntro } from "@/components/sections/master-intro/MasterIntro";
import { ServicesMenu } from "@/components/sections/services-menu/ServicesMenu";
import { StudioGallery } from "@/components/sections/studio-gallery/StudioGallery";
import { pageSeo } from "@/data/seo";
import { getActiveServices } from "@/features/services/server";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.home);

// Services are edited in the admin; the page picks up changes within five minutes
export const revalidate = 300;

export default async function HomePage() {
  const services = await getActiveServices();

  return (
    <main>
      <Hero />
      <Concerns services={services} />
      <ServicesMenu services={services} />
      <StudioGallery />
      <MasterIntro />
      <BookingSteps />
      <Location />
      <Faq />
    </main>
  );
}
