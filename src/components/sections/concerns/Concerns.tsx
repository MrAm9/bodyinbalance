import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeConcerns } from "@/data/home";
import { typograph } from "@/lib/typograph";
import type { Service } from "@/data/services";

interface ConcernsProps {
  services: Service[];
}

export function Concerns({ services }: ConcernsProps) {
  const servicesBySlug = new Map(
    services.map((service) => [service.slug, service]),
  );

  return (
    <section
      aria-labelledby="concerns-title"
      className="bg-paper py-24 sm:py-32"
    >
      <Reveal
        trigger="scroll"
        className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-10 lg:px-10"
      >
        <div className="lg:sticky lg:top-12 lg:col-span-5 lg:self-start">
          <SectionHeading
            id="concerns-title"
            eyebrow={homeConcerns.eyebrow}
            title={homeConcerns.title}
            tone="light"
          />
          <p
            data-reveal
            className="mt-6 max-w-md leading-relaxed text-ink-muted"
          >
            {typograph(homeConcerns.lead)}
          </p>
        </div>

        <ul className="lg:col-span-7">
          {homeConcerns.items.map((item) => {
            const linkedServices = item.serviceSlugs.flatMap((slug) => {
              const service = servicesBySlug.get(slug);
              return service ? [service] : [];
            });

            return (
              <li
                key={item.id}
                data-reveal
                className="grid gap-3 border-t border-ink/15 py-7 last:border-b sm:grid-cols-5 sm:gap-8"
              >
                <p className="font-display text-2xl leading-snug text-ink sm:col-span-3">
                  {typograph(item.concern)}
                </p>
                {linkedServices.length > 0 && (
                  <ul className="flex flex-col items-start gap-2 text-sm sm:col-span-2 sm:pt-1.5">
                    {linkedServices.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/massazh/${service.slug}/`}
                          className="text-olive underline decoration-olive/30 underline-offset-4 transition-colors hover:decoration-olive"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
