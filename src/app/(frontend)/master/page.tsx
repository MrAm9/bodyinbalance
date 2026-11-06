import { PageHeader } from "@/components/layout/PageHeader";
import { BookingSteps } from "@/components/sections/booking-steps/BookingSteps";
import { MasterIntro } from "@/components/sections/master-intro/MasterIntro";
import { masterPage } from "@/data/pages";
import { pageSeo } from "@/data/seo";
import { masterPhotoOf, paragraphsOf } from "@/features/studio";
import { getStudioInfo } from "@/features/studio/server";
import { env } from "@/lib/env";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.master);

export const revalidate = 300;

export default async function MasterPage() {
  const studioInfo = await getStudioInfo();
  const about = paragraphsOf(studioInfo.masterAbout);

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
        paragraphs={about.length > 0 ? about : [...masterPage.aboutFallback]}
        photo={masterPhotoOf(studioInfo, masterPage.photoAlt)}
      />
      <BookingSteps />
    </main>
  );
}
