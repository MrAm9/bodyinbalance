import { PageHeader } from "@/components/layout/PageHeader";
import { Location } from "@/components/sections/location/Location";
import { StudioDetails } from "@/components/sections/studio-details/StudioDetails";
import { contactsPage } from "@/data/pages";
import { pageSeo } from "@/data/seo";
import { studioInfo } from "@/data/studio-info";
import { env } from "@/lib/env";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.contacts);

export default function ContactsPage() {
  return (
    <main>
      <PageHeader
        siteUrl={env.SITE_URL}
        crumbs={[{ name: contactsPage.eyebrow, path: pageSeo.contacts.path }]}
        eyebrow={contactsPage.eyebrow}
        title={contactsPage.title}
        lead={contactsPage.lead}
      />
      <Location tone="light" />
      <StudioDetails info={studioInfo} />
    </main>
  );
}
