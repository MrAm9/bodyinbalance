import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors duration-300",
  {
    variants: {
      tone: {
        gold: "bg-gold text-night hover:bg-gold-soft",
        outline:
          "border border-gold/50 text-cream hover:border-gold hover:bg-gold/10",
      },
      size: {
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: { tone: "gold", size: "md" },
  },
);
