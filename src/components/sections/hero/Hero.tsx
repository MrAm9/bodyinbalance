import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { buttonVariants } from "@/components/ui/button-variants";
import { Reveal } from "@/components/ui/Reveal";
import { studio } from "@/data/contacts";
import { homeHero } from "@/data/home";
import { bookingHref } from "@/data/navigation";
import { ru } from "@/i18n/ru";

import { HeroArch } from "./HeroArch";
import { WarmGlows } from "./WarmGlows";

export function Hero() {
  const [mainPhone] = studio.phones;

  return (
    <section className="relative isolate overflow-hidden bg-night text-cream">
      <WarmGlows />

      <Reveal className="relative z-raised mx-auto grid max-w-7xl items-center gap-16 px-5 pt-32 pb-20 lg:min-h-svh lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pt-36">
        <div className="lg:col-span-7">
          <p
            data-reveal
            className="flex items-center gap-3 text-eyebrow text-gold uppercase"
          >
            <span aria-hidden className="hidden h-px w-10 bg-gold sm:block" />
            {homeHero.eyebrow}
          </p>

          <h1
            data-reveal="lines"
            className="mt-8 max-w-3xl font-display text-hero font-medium text-balance text-cream"
          >
            {/* SplitText turns non-breaking spaces into wrap points, so words joined by them are held together explicitly */}
            {homeHero.title.split(" ").map((word) => (
              <Fragment key={word}>
                <span className="whitespace-nowrap">{word}</span>{" "}
              </Fragment>
            ))}
          </h1>

          <p
            data-reveal
            className="mt-6 font-display text-2xl text-gold-soft italic sm:text-3xl"
          >
            {studio.slogan}
          </p>

          <p
            data-reveal
            className="mt-8 max-w-xl text-base leading-relaxed text-cream-muted sm:text-lg"
          >
            {homeHero.lead}
          </p>

          <div data-reveal className="mt-10 flex flex-wrap gap-4">
            <Link href={bookingHref} className={buttonVariants({ size: "lg" })}>
              {homeHero.primaryAction}
            </Link>
            <a
              href={mainPhone.href}
              className={buttonVariants({ tone: "outline", size: "lg" })}
            >
              {ru.hero.call}
            </a>
          </div>

          <dl
            data-reveal
            className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-gold/25 pt-6"
          >
            {homeHero.facts.map((fact) => (
              <div key={fact.id} className="flex flex-col-reverse gap-1">
                <dt className="text-xs text-cream-muted">{fact.label}</dt>
                <dd className="font-display text-xl whitespace-nowrap text-gold-soft sm:text-3xl">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div data-reveal className="lg:col-span-5">
          <HeroArch
            photo={
              <Image
                src={homeHero.photo.src}
                alt={homeHero.photo.alt}
                width={homeHero.photo.width}
                height={homeHero.photo.height}
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 34vw, (min-width: 640px) 28rem, 90vw"
                className="size-full object-cover motion-safe:animate-ken-burns"
              />
            }
            detail={
              <Image
                src={homeHero.detailPhoto.src}
                alt={homeHero.detailPhoto.alt}
                width={homeHero.detailPhoto.width}
                height={homeHero.detailPhoto.height}
                sizes="10rem"
                className="size-full object-cover"
              />
            }
          />
        </div>
      </Reveal>
    </section>
  );
}
