import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeServicesMenu } from "@/data/home";
import { bookingHref } from "@/data/navigation";
import { formatRub, lowestPrice, sharedPriceList } from "@/features/services";
import { ru } from "@/i18n/ru";
import { typograph } from "@/lib/typograph";
import type { Service } from "@/data/services";

interface ServicesMenuProps {
  services: Service[];
}

export function ServicesMenu({ services }: ServicesMenuProps) {
  const sharedPrices = sharedPriceList(services);

  return (
    <section
      id="massazh"
      aria-labelledby="services-title"
      className="relative bg-marble py-24 sm:py-32"
    >
      <Reveal trigger="scroll" className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow={homeServicesMenu.eyebrow}
            title={homeServicesMenu.title}
            tone="light"
          />

          {sharedPrices && (
            <div data-reveal className="lg:max-w-sm">
              <p className="text-sm text-ink-muted">
                {homeServicesMenu.sharedPriceNote}
              </p>
              <dl className="mt-4 grid grid-cols-3 gap-4 border-t border-gold-deep/40 pt-4">
                {sharedPrices.map((option) => (
                  <div
                    key={option.durationMinutes}
                    className="flex flex-col-reverse gap-1"
                  >
                    <dt className="text-xs text-ink-muted">
                      {option.durationMinutes} {ru.services.minutes}
                    </dt>
                    <dd className="font-display text-2xl whitespace-nowrap text-ink">
                      {formatRub(option.priceRub)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>

        <ul className="mt-16 grid gap-x-16 lg:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.slug}
              data-reveal
              className="border-t border-ink/15"
            >
              <Link
                href={`/massazh/${service.slug}/`}
                className="group flex flex-col gap-2 py-6"
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-display text-2xl text-ink transition-colors group-hover:text-olive">
                    {service.title}
                  </span>
                  <span
                    aria-hidden
                    className="mb-1.5 flex-1 border-b border-dotted border-ink/30"
                  />
                  <span className="text-sm whitespace-nowrap text-ink-muted">
                    {ru.services.from} {formatRub(lowestPrice(service))}
                  </span>
                </span>
                <span className="max-w-md text-sm leading-relaxed text-ink-muted">
                  {typograph(service.summary)}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-14">
          <Link href={bookingHref} className={buttonVariants({ size: "lg" })}>
            {homeServicesMenu.action}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
