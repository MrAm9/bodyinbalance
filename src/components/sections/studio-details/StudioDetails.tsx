import { Reveal } from "@/components/ui/Reveal";
import { contactsPage } from "@/data/pages";
import { typograph } from "@/lib/typograph";
import type { StudioInfo } from "@/data/studio-info";

interface StudioDetailsProps {
  info: Pick<StudioInfo, "entrance" | "parking" | "legalName" | "inn" | "ogrn">;
}

export function StudioDetails({ info }: StudioDetailsProps) {
  const legalLines = [
    info.legalName,
    info.inn && `ИНН ${info.inn}`,
    info.ogrn && `ОГРН ${info.ogrn}`,
  ].filter((line): line is string => Boolean(line));

  return (
    <section
      aria-label={contactsPage.entranceTitle}
      className="bg-marble py-20 sm:py-28"
    >
      <Reveal
        trigger="scroll"
        className="mx-auto flex max-w-6xl flex-wrap gap-x-16 gap-y-12 px-5 lg:px-10"
      >
        <div data-reveal className="max-w-md min-w-64 flex-1">
          <h2 className="font-display text-2xl text-ink">
            {contactsPage.entranceTitle}
          </h2>
          <p className="mt-4 leading-relaxed whitespace-pre-line text-ink-muted">
            {typograph(info.entrance || contactsPage.entranceFallback)}
          </p>
        </div>

        {info.parking && (
          <div data-reveal className="max-w-md min-w-64 flex-1">
            <h2 className="font-display text-2xl text-ink">
              {contactsPage.parkingTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              {typograph(info.parking)}
            </p>
          </div>
        )}

        {legalLines.length > 0 && (
          <div data-reveal className="max-w-md min-w-64 flex-1">
            <h2 className="font-display text-2xl text-ink">
              {contactsPage.legalTitle}
            </h2>
            <ul className="mt-4 space-y-1 text-ink-muted">
              {legalLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        )}
      </Reveal>
    </section>
  );
}
