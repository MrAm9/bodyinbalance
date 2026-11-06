import Link from "next/link";

import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { servicePage } from "@/data/pages";
import { formatRub, lowestPrice } from "@/features/services";
import { ru } from "@/i18n/ru";
import { faqSchema } from "@/lib/schema";
import { typograph } from "@/lib/typograph";
import type { Service } from "@/payload-types";

interface ServiceFaqAndOthersProps {
  service: Service;
  otherServices: Service[];
}

export function ServiceFaqAndOthers({
  service,
  otherServices,
}: ServiceFaqAndOthersProps) {
  const faq = service.faq ?? [];

  return (
    <section
      aria-label={servicePage.otherTitle}
      className="bg-marble py-20 sm:py-28"
    >
      <Reveal
        trigger="scroll"
        className="mx-auto flex max-w-6xl flex-col gap-20 px-5 lg:px-10"
      >
        {faq.length > 0 && (
          <div>
            <JsonLd schema={faqSchema(faq)} />
            <h2 data-reveal className="font-display text-3xl text-ink">
              {servicePage.faqTitle}
            </h2>
            <div className="mt-6">
              {faq.map((item) => (
                <details
                  key={item.id ?? item.question}
                  data-reveal
                  className="border-t border-ink/15 last:border-b"
                >
                  <summary className="cursor-pointer list-none py-5 font-display text-xl text-ink [&::-webkit-details-marker]:hidden">
                    {typograph(item.question)}
                  </summary>
                  <p className="max-w-2xl pb-6 leading-relaxed text-ink-muted">
                    {typograph(item.answer)}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 data-reveal className="font-display text-3xl text-ink">
            {servicePage.otherTitle}
          </h2>
          <ul className="mt-6 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((other) => (
              <li key={other.id} data-reveal className="border-t border-ink/15">
                <Link
                  href={`/massazh/${other.slug}/`}
                  className="flex items-baseline justify-between gap-4 py-4 text-ink transition-colors hover:text-olive"
                >
                  <span className="font-display text-xl">{other.title}</span>
                  <span className="text-sm whitespace-nowrap text-ink-muted">
                    {ru.services.from} {formatRub(lowestPrice(other))}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
