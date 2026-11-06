import { buttonVariants } from "@/components/ui/button-variants";
import { Reveal } from "@/components/ui/Reveal";
import { studio } from "@/data/contacts";
import { bookingPage } from "@/data/pages";
import { formatRub, sharedPriceList } from "@/features/services";
import { ru } from "@/i18n/ru";
import { typograph } from "@/lib/typograph";
import type { Service } from "@/payload-types";

interface BookingOptionsProps {
  services: Service[];
}

export function BookingOptions({ services }: BookingOptionsProps) {
  const sharedPrices = sharedPriceList(services);

  return (
    <section aria-label={bookingPage.title} className="bg-paper py-20 sm:py-28">
      <Reveal trigger="scroll" className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div
            data-reveal
            className="flex flex-col rounded-t-full bg-night px-8 pt-24 pb-10 text-center text-cream"
          >
            <h2 className="font-display text-3xl">
              {bookingPage.online.title}
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-cream-muted">
              {typograph(bookingPage.online.text)}
            </p>
            <a
              href={studio.yandexBookingUrl}
              target="_blank"
              rel="noopener"
              className={buttonVariants({
                size: "lg",
                className: "mx-auto mt-8",
              })}
            >
              {bookingPage.online.action}
            </a>
          </div>

          <div
            data-reveal
            className="flex flex-col rounded-t-full border border-ink/15 px-8 pt-24 pb-10 text-center"
          >
            <h2 className="font-display text-3xl text-ink">
              {bookingPage.phone.title}
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-ink-muted">
              {typograph(bookingPage.phone.text)}
            </p>
            <ul className="mt-6 space-y-2">
              {studio.phones.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="font-display text-3xl text-ink transition-colors hover:text-olive"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {sharedPrices && (
          <div data-reveal className="mx-auto mt-16 max-w-2xl text-center">
            <h2 className="font-display text-2xl text-ink">
              {bookingPage.pricesTitle}
            </h2>
            <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-gold-deep/40 pt-6">
              {sharedPrices.map((option) => (
                <div
                  key={option.id ?? option.durationMinutes}
                  className="flex flex-col-reverse gap-1"
                >
                  <dt className="text-sm text-ink-muted">
                    {option.durationMinutes} {ru.services.minutes}
                  </dt>
                  <dd className="font-display text-3xl whitespace-nowrap text-ink">
                    {formatRub(option.priceRub)}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm text-ink-muted">
              {typograph(bookingPage.cancellation)}
            </p>
          </div>
        )}
      </Reveal>
    </section>
  );
}
