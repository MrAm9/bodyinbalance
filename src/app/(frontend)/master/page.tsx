import { PageHeader } from "@/components/layout/PageHeader";
import { BookingSteps } from "@/components/sections/booking-steps/BookingSteps";
import { MasterIntro } from "@/components/sections/master-intro/MasterIntro";
import { masterPage } from "@/data/pages";
import { pageSeo } from "@/data/seo";
import { studioInfo } from "@/data/studio-info";
import { env } from "@/lib/env";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.master);

export default function MasterPage() {
  return (
    <main>
      <PageHeader
        siteUrl={env.SITE_URL}
        crumbs={[{ name: masterPage.eyebrow, path: pageSeo.master.path }]}
        eyebrow={masterPage.eyebrow}
        title={masterPage.title}
        lead={masterPage.lead}
      />
      <MasterIntro
        title={masterPage.aboutTitle}
        paragraphs={studioInfo.masterAbout}
        photo={studioInfo.masterPhoto}
        photoAlt={masterPage.photoAlt}
        documents={studioInfo.masterDocuments}
      />
      <BookingSteps />
    </main>
  );
}
