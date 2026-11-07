import { BookingSteps } from "@/components/sections/booking-steps/BookingSteps";
import { Concerns } from "@/components/sections/concerns/Concerns";
import { Faq } from "@/components/sections/faq/Faq";
import { Hero } from "@/components/sections/hero/Hero";
import { Location } from "@/components/sections/location/Location";
import { MasterIntro } from "@/components/sections/master-intro/MasterIntro";
import { ServicesMenu } from "@/components/sections/services-menu/ServicesMenu";
import { StudioGallery } from "@/components/sections/studio-gallery/StudioGallery";
import { JsonLd } from "@/components/ui/JsonLd";
import { studio } from "@/data/contacts";
import { homeFaq } from "@/data/faq";
import { master } from "@/data/master";
import { contactsPage, masterPage } from "@/data/pages";
import { pageSeo } from "@/data/seo";
import { services } from "@/data/services";
import { studioInfo } from "@/data/studio-info";
import { env } from "@/lib/env";
import { businessSchema, faqSchema, websiteSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.home);

export default function HomePage() {
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
        photo={studioInfo.masterPhoto}
        photoAlt={masterPage.photoAlt}
        documents={studioInfo.masterDocuments}
        moreLink={{ href: pageSeo.master.path, label: master.moreLink }}
      />
      <BookingSteps />
      <Location
        tone="dark"
        entrance={studioInfo.entrance ?? contactsPage.entranceFallback}
      />
      <Faq />
    </main>
  );
}
