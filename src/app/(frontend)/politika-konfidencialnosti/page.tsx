import { PageHeader } from "@/components/layout/PageHeader";
import { studio } from "@/data/contacts";
import { privacyPage } from "@/data/privacy";
import { pageSeo } from "@/data/seo";
import { studioInfo } from "@/data/studio-info";
import { env } from "@/lib/env";
import { buildMetadata } from "@/lib/seo";
import { typograph } from "@/lib/typograph";

export const metadata = buildMetadata(pageSeo.privacy);

export default function PrivacyPage() {
  const [mainPhone] = studio.phones;
  const operator = [
    studioInfo.legalName || `${studio.kind} «${studio.name}»`,
    studioInfo.inn && `ИНН ${studioInfo.inn}`,
    studioInfo.ogrn && `ОГРН ${studioInfo.ogrn}`,
    `${studio.address.city}, ${studio.address.street}`,
    `Телефон ${mainPhone.display}`,
    studioInfo.email && `Почта ${studioInfo.email}`,
  ].filter((line): line is string => Boolean(line));

  return (
    <main>
      <PageHeader
        siteUrl={env.SITE_URL}
        crumbs={[{ name: privacyPage.title, path: pageSeo.privacy.path }]}
        eyebrow={privacyPage.eyebrow}
        title={privacyPage.title}
        lead={privacyPage.updated}
      />
      <article className="bg-paper py-20 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-12 px-5 lg:px-10">
          {privacyPage.sections.map((section) => (
            <section key={section.id}>
              <h2 className="font-display text-2xl text-ink">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 leading-relaxed text-ink-muted"
                >
                  {typograph(paragraph)}
                </p>
              ))}
            </section>
          ))}
          <section>
            <h2 className="font-display text-2xl text-ink">
              {privacyPage.operatorTitle}
            </h2>
            <ul className="mt-4 space-y-1 text-ink-muted">
              {operator.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
