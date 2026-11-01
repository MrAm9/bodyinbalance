import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { studio } from "@/data/contacts";
import { homeBooking } from "@/data/home";
import { bookingHref } from "@/data/navigation";
import { typograph } from "@/lib/typograph";

export function BookingSteps() {
  const [mainPhone] = studio.phones;

  return (
    <section
      aria-labelledby="booking-title"
      className="bg-marble py-24 sm:py-32"
    >
      <Reveal trigger="scroll" className="mx-auto max-w-6xl px-5 lg:px-10">
        <SectionHeading
          id="booking-title"
          eyebrow={homeBooking.eyebrow}
          title={homeBooking.title}
          tone="light"
          className="max-w-xl"
        />

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {homeBooking.steps.map((step, position) => (
            <li
              key={step.id}
              data-reveal
              className="relative border-t border-gold-deep/40 pt-6"
            >
              <span
                aria-hidden
                className="font-display text-5xl leading-none text-gold-deep/60 italic"
              >
                {position + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl text-ink">
                {typograph(step.title)}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-muted">
                {typograph(step.text)}
              </p>
            </li>
          ))}
        </ol>

        <div
          data-reveal
          className="mt-16 flex flex-col gap-6 border-t border-ink/15 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-ink-muted">
            {typograph(homeBooking.cancellation)}{" "}
            <a
              href={mainPhone.href}
              className="whitespace-nowrap text-ink underline underline-offset-4"
            >
              {mainPhone.display}
            </a>
          </p>
          <Link href={bookingHref} className={buttonVariants({ size: "lg" })}>
            {homeBooking.action}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
