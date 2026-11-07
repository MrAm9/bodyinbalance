import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";
import { Reveal } from "@/components/ui/Reveal";
import { audienceLabels } from "@/data/audience";
import { bookingHref } from "@/data/navigation";
import { servicePage } from "@/data/pages";
import { formatRub } from "@/features/services";
import { ru } from "@/i18n/ru";
import { typograph } from "@/lib/typograph";
import type { Service } from "@/data/services";

interface ServiceDetailProps {
  service: Service;
}

const blockTitle = "font-display text-3xl text-ink";

export function ServiceDetail({ service }: ServiceDetailProps) {
  const { audience } = service;
  const description = service.description ?? [servicePage.descriptionFallback];

  return (
    <section aria-label={service.title} className="bg-paper py-20 sm:py-28">
      <Reveal
        trigger="scroll"
        className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-12 lg:px-10"
      >
        <div className="flex flex-col gap-14 lg:col-span-7">
          <div data-reveal>
            <h2 className={blockTitle}>{servicePage.descriptionTitle}</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-ink-muted">
              {description.map((paragraph) => (
                <p key={paragraph}>{typograph(paragraph)}</p>
              ))}
            </div>
          </div>

          {audience.length > 0 && (
            <div data-reveal>
              <h2 className={blockTitle}>{servicePage.audienceTitle}</h2>
              <ul className="mt-5 flex flex-wrap gap-3">
                {audience.map((value) => (
                  <li
                    key={value}
                    className="rounded-full border border-olive/40 px-4 py-1.5 text-sm text-olive"
                  >
                    {audienceLabels[value]}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.contraindications && (
            <div data-reveal>
              <h2 className={blockTitle}>
                {servicePage.contraindicationsTitle}
              </h2>
              <p className="mt-5 leading-relaxed text-ink-muted">
                {typograph(service.contraindications)}
              </p>
              <p className="mt-4 text-sm text-gold-deep">{ru.footer.warning}</p>
            </div>
          )}
        </div>

        <aside data-reveal className="lg:col-span-5">
          <div className="rounded-lg bg-night px-8 py-10 text-cream lg:sticky lg:top-10">
            <h2 className="text-center font-display text-2xl">
              {servicePage.pricesTitle}
            </h2>
            <dl className="mt-8 flex flex-col">
              {service.options.map((option) => (
                <div
                  key={option.durationMinutes}
                  className="flex items-baseline gap-3 border-t border-gold/20 py-4"
                >
                  <dt className="text-cream-muted">
                    {option.durationMinutes} {ru.services.minutes}
                  </dt>
                  <span
                    aria-hidden
                    className="flex-1 border-b border-dotted border-gold/30"
                  />
                  <dd className="font-display text-2xl text-gold-soft">
                    {formatRub(option.priceRub)}
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              href={bookingHref}
              className={buttonVariants({
                size: "lg",
                className: "mt-6 w-full",
              })}
            >
              {servicePage.action}
            </Link>
          </div>
        </aside>
      </Reveal>
    </section>
  );
}
