import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeFaq } from "@/data/faq";
import { typograph } from "@/lib/typograph";

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="bg-paper py-24 sm:py-32">
      <Reveal
        trigger="scroll"
        className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-12 lg:px-10"
      >
        <SectionHeading
          id="faq-title"
          eyebrow={homeFaq.eyebrow}
          title={homeFaq.title}
          tone="light"
          className="lg:col-span-4"
        />

        <div className="lg:col-span-8">
          {homeFaq.items.map((item) => (
            <details
              key={item.id}
              data-reveal
              className="group border-t border-ink/15 last:border-b"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-2xl text-ink [&::-webkit-details-marker]:hidden">
                {typograph(item.question)}
                <span
                  aria-hidden
                  className="relative size-4 shrink-0 text-gold-deep before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-current after:absolute after:inset-y-0 after:left-1/2 after:w-px after:bg-current after:transition-transform group-open:after:rotate-90"
                />
              </summary>
              <p className="max-w-2xl pb-7 leading-relaxed text-ink-muted">
                {typograph(item.answer)}
              </p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
