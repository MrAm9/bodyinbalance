import { cva } from "class-variance-authority";

import { NoBreakWords } from "@/components/ui/NoBreakWords";

const eyebrowVariants = cva("flex items-center gap-3 text-eyebrow uppercase", {
  variants: {
    tone: { light: "text-gold-deep", dark: "text-gold" },
  },
});

const titleVariants = cva(
  "mt-5 font-display text-section font-medium text-balance",
  {
    variants: {
      tone: { light: "text-ink", dark: "text-cream" },
    },
  },
);

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  tone: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  tone,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p data-reveal className={eyebrowVariants({ tone })}>
        <span aria-hidden className="h-px w-8 bg-current" />
        {eyebrow}
      </p>
      <h2 id={id} data-reveal="lines" className={titleVariants({ tone })}>
        <NoBreakWords text={title} />
      </h2>
    </div>
  );
}
