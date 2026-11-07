import { buttonVariants } from "@/components/ui/button-variants";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WarmGlows } from "@/components/ui/WarmGlows";
import { studio } from "@/data/contacts";
import { homeLocation } from "@/data/home";
import { typograph } from "@/lib/typograph";
import { cn } from "@/lib/utils";

// The contacts page opens with a dark header, so the section switches to light there to keep the backgrounds alternating
const toneStyles = {
  dark: {
    section: "bg-night text-cream",
    muted: "text-cream-muted",
    label: "text-gold",
    divider: "border-gold/25",
    phoneHover: "hover:text-gold-soft",
    secondaryButton: "outline",
  },
  light: {
    section: "bg-paper text-ink",
    muted: "text-ink-muted",
    label: "text-gold-deep",
    divider: "border-ink/15",
    phoneHover: "hover:text-olive",
    secondaryButton: "outlineInk",
  },
} as const;

interface LocationProps {
  tone: keyof typeof toneStyles;
  // Shown on the home page; the contacts page has its own entrance block
  entrance?: string;
}

export function Location({ tone, entrance }: LocationProps) {
  const styles = toneStyles[tone];
  const { latitude, longitude } = studio.coordinates;
  const routeHref = `https://yandex.ru/maps/?rtext=~${String(latitude)},${String(longitude)}&rtt=pd`;

  return (
    <section
      id="kontakty"
      aria-labelledby="location-title"
      className={cn(
        "relative isolate overflow-hidden py-24 sm:py-32",
        styles.section,
      )}
    >
      {tone === "dark" && <WarmGlows />}
      <Reveal
        trigger="scroll"
        className="relative z-raised mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2 lg:px-10"
      >
        <div>
          <SectionHeading
            id="location-title"
            eyebrow={homeLocation.eyebrow}
            title={homeLocation.title}
            tone={tone}
          />
          <address
            data-reveal
            className="mt-8 font-display text-3xl leading-snug not-italic"
          >
            {studio.address.city}, {studio.address.street}
          </address>
          <p data-reveal className={cn("mt-4", styles.muted)}>
            {typograph(homeLocation.directions)}
          </p>
          {entrance && (
            <p data-reveal className={cn("mt-2 max-w-md", styles.muted)}>
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
              className={buttonVariants({
                tone: styles.secondaryButton,
                size: "lg",
              })}
            >
              {homeLocation.mapAction}
            </a>
          </div>
        </div>

        <dl
          data-reveal
          className={cn(
            "grid content-start gap-8 border-t pt-8 sm:grid-cols-2 lg:mt-24",
            styles.divider,
          )}
        >
          <div>
            <dt className={cn("text-eyebrow uppercase", styles.label)}>
              {homeLocation.labels.hours}
            </dt>
            <dd className="mt-3 font-display text-2xl">
              {studio.hours.days}, {studio.hours.opens}–{studio.hours.closes}
            </dd>
          </div>
          <div>
            <dt className={cn("text-eyebrow uppercase", styles.label)}>
              {homeLocation.labels.metro}
            </dt>
            <dd className="mt-3 font-display text-2xl">
              {studio.address.metro}
              <span
                className={cn("mt-1 block font-sans text-sm", styles.muted)}
              >
                {studio.address.walkFromMetro}
              </span>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className={cn("text-eyebrow uppercase", styles.label)}>
              {homeLocation.labels.phones}
            </dt>
            {studio.phones.map((phone) => (
              <dd key={phone.href} className="mt-3 font-display text-2xl">
                <a
                  href={phone.href}
                  className={cn("transition-colors", styles.phoneHover)}
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
