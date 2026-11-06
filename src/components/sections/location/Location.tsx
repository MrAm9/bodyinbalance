import { buttonVariants } from "@/components/ui/button-variants";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WarmGlows } from "@/components/ui/WarmGlows";
import { studio } from "@/data/contacts";
import { homeLocation } from "@/data/home";
import { typograph } from "@/lib/typograph";

interface LocationProps {
  // Shown on the home page; the contacts page has its own entrance block
  entrance?: string;
}

export function Location({ entrance }: LocationProps) {
  const { latitude, longitude } = studio.coordinates;
  const routeHref = `https://yandex.ru/maps/?rtext=~${String(latitude)},${String(longitude)}&rtt=pd`;

  return (
    <section
      id="kontakty"
      aria-labelledby="location-title"
      className="relative isolate overflow-hidden bg-night py-24 text-cream sm:py-32"
    >
      <WarmGlows />
      <Reveal
        trigger="scroll"
        className="relative z-raised mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2 lg:px-10"
      >
        <div>
          <SectionHeading
            id="location-title"
            eyebrow={homeLocation.eyebrow}
            title={homeLocation.title}
            tone="dark"
          />
          <address
            data-reveal
            className="mt-8 font-display text-3xl leading-snug not-italic"
          >
            {studio.address.city}, {studio.address.street}
          </address>
          <p data-reveal className="mt-4 text-cream-muted">
            {typograph(homeLocation.directions)}
          </p>
          {entrance && (
            <p data-reveal className="mt-2 max-w-md text-cream-muted">
              {typograph(entrance)}
            </p>
          )}
          <div data-reveal className="mt-10 flex flex-wrap gap-4">
            <a
              href={routeHref}
              target="_blank"
              rel="noopener"
              className={buttonVariants({ size: "lg" })}
            >
              {homeLocation.routeAction}
            </a>
            <a
              href={studio.yandexMapsUrl}
              target="_blank"
              rel="noopener"
              className={buttonVariants({ tone: "outline", size: "lg" })}
            >
              {homeLocation.mapAction}
            </a>
          </div>
        </div>

        <dl
          data-reveal
          className="grid content-start gap-8 border-t border-gold/25 pt-8 sm:grid-cols-2 lg:mt-24"
        >
          <div>
            <dt className="text-eyebrow text-gold uppercase">
              {homeLocation.labels.hours}
            </dt>
            <dd className="mt-3 font-display text-2xl">
              {studio.hours.days}, {studio.hours.opens}–{studio.hours.closes}
            </dd>
          </div>
          <div>
            <dt className="text-eyebrow text-gold uppercase">
              {homeLocation.labels.metro}
            </dt>
            <dd className="mt-3 font-display text-2xl">
              {studio.address.metro}
              <span className="mt-1 block font-sans text-sm text-cream-muted">
                {studio.address.walkFromMetro}
              </span>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-eyebrow text-gold uppercase">
              {homeLocation.labels.phones}
            </dt>
            {studio.phones.map((phone) => (
              <dd key={phone.href} className="mt-3 font-display text-2xl">
                <a
                  href={phone.href}
                  className="transition-colors hover:text-gold-soft"
                >
                  {phone.display}
                </a>
              </dd>
            ))}
          </div>
        </dl>
      </Reveal>
    </section>
  );
}
