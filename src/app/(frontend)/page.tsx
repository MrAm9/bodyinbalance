import { BookingSteps } from "@/components/sections/booking-steps/BookingSteps";
import { Concerns } from "@/components/sections/concerns/Concerns";
import { Faq } from "@/components/sections/faq/Faq";
import { Hero } from "@/components/sections/hero/Hero";
import { Location } from "@/components/sections/location/Location";
import { MasterIntro } from "@/components/sections/master-intro/MasterIntro";
import { ServicesMenu } from "@/components/sections/services-menu/ServicesMenu";
import { StudioGallery } from "@/components/sections/studio-gallery/StudioGallery";
import { master } from "@/data/master";
import { contactsPage, masterPage } from "@/data/pages";
import { pageSeo } from "@/data/seo";
import { homeFaq } from "@/data/faq";
import { studio } from "@/data/contacts";
import { getActiveServices } from "@/features/services/server";
import { masterPhotoOf } from "@/features/studio";
import { getStudioInfo } from "@/features/studio/server";
import { JsonLd } from "@/components/ui/JsonLd";
import { env } from "@/lib/env";
import { businessSchema, faqSchema, websiteSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.home);

// Services are edited in the admin; the page picks up changes within five minutes
export const revalidate = 300;

export default async function HomePage() {
  const [services, studioInfo] = await Promise.all([
    getActiveServices(),
    getStudioInfo(),
  ]);
  const [mainPhone] = studio.phones;

  return (
    <main>
      <JsonLd
        schema={businessSchema({
          siteUrl: env.SITE_URL,
          name: studio.name,
          description: pageSeo.home.description,
          phone: mainPhone.href.replace("tel:", ""),
          streetAddress: studio.address.street,
          city: studio.address.city,
          postalCode: studio.address.postalCode,
          latitude: studio.coordinates.latitude,
          longitude: studio.coordinates.longitude,
          opens: studio.hours.opens,
          closes: studio.hours.closes,
          sameAs: [studio.yandexMapsUrl],
        })}
      />
      <JsonLd schema={websiteSchema(env.SITE_URL, studio.name)} />
      <JsonLd schema={faqSchema([...homeFaq.items])} />
      <Hero />
      <Concerns services={services} />
      <ServicesMenu services={services} />
      <StudioGallery />
      <MasterIntro
        title={master.name}
        paragraphs={[master.lead, master.audience]}
        photo={masterPhotoOf(studioInfo, masterPage.photoAlt)}
        moreLink={{ href: pageSeo.master.path, label: master.moreLink }}
      />
      <BookingSteps />
      <Location
        entrance={studioInfo.entrance || contactsPage.entranceFallback}
      />
      <Faq />
    </main>
  );
}
