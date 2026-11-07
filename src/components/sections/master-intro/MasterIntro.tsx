import Link from "next/link";

import { DocumentsDialog } from "@/components/ui/DocumentsDialog";
import { Portrait } from "@/components/ui/Portrait";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { master, masterDocumentsDialog } from "@/data/master";
import type { MasterDocument } from "@/features/studio";
import { typograph } from "@/lib/typograph";

interface MasterIntroProps {
  title: string;
  paragraphs: string[];
  photo: { url: string; alt: string; width: number; height: number } | null;
  documents: readonly MasterDocument[];
  moreLink?: { href: string; label: string };
}

export function MasterIntro({
  title,
  paragraphs,
  photo,
  documents,
  moreLink,
}: MasterIntroProps) {
  const [lead, ...rest] = paragraphs;

  return (
    <section aria-labelledby="master-title" className="bg-paper py-24 sm:py-32">
      <Reveal
        trigger="scroll"
        className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-12 lg:px-10"
      >
        <div data-reveal className="md:col-span-5">
          <Portrait photo={photo} />
        </div>

        <div className="md:col-span-7">
          <SectionHeading
            id="master-title"
            eyebrow={master.eyebrow}
            title={title}
            tone="light"
          />
          {lead && (
            <p
              data-reveal
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink"
            >
              {typograph(lead)}
            </p>
          )}
          {rest.map((paragraph) => (
            <p
              key={paragraph}
              data-reveal
              className="mt-4 max-w-xl leading-relaxed text-ink-muted"
            >
              {typograph(paragraph)}
            </p>
          ))}

          <dl
            data-reveal
            className="mt-10 grid gap-6 border-t border-ink/15 pt-6 sm:grid-cols-2"
          >
            {master.facts.map((fact) => (
              <div key={fact.id}>
                <dt className="text-eyebrow text-gold-deep uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-ink">
                  {"href" in fact ? (
                    <a
                      href={fact.href}
                      target="_blank"
                      rel="noopener"
                      className="underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
                    >
                      {fact.value}
                    </a>
                  ) : (
                    typograph(fact.value)
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div data-reveal className="flex flex-wrap items-center gap-x-8">
            <DocumentsDialog
              documents={documents}
              labels={masterDocumentsDialog}
            />
          </div>

          {moreLink && (
            <Link
              data-reveal
              href={moreLink.href}
              className="mt-8 inline-block text-olive underline decoration-olive/30 underline-offset-4 transition-colors hover:decoration-olive"
            >
              {moreLink.label}
            </Link>
          )}
        </div>
      </Reveal>
    </section>
  );
}
