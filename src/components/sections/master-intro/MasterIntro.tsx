import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { master } from "@/data/master";
import { typograph } from "@/lib/typograph";

export function MasterIntro() {
  return (
    <section aria-labelledby="master-title" className="bg-paper py-24 sm:py-32">
      <Reveal
        trigger="scroll"
        className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-12 lg:px-10"
      >
        {/* TODO(content): replace the emblem with Oleg's portrait once it arrives */}
        <div data-reveal className="md:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full bg-night ring-1 ring-gold/40">
            <div
              aria-hidden
              className="absolute inset-0 bg-radial from-glow/30 to-transparent motion-safe:animate-flicker-slow"
            />
            <Image
              src="/images/logo-emblem.png"
              alt=""
              width={780}
              height={720}
              sizes="20rem"
              className="relative size-full object-contain p-12"
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <SectionHeading
            id="master-title"
            eyebrow={master.eyebrow}
            title={master.name}
            tone="light"
          />
          <p
            data-reveal
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink"
          >
            {typograph(master.lead)}
          </p>
          <p
            data-reveal
            className="mt-4 max-w-xl leading-relaxed text-ink-muted"
          >
            {typograph(master.audience)}
          </p>

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
        </div>
      </Reveal>
    </section>
  );
}
