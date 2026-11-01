import type { ReactNode } from "react";

interface HeroArchProps {
  photo: ReactNode;
  detail: ReactNode;
}

// The arch and the three dots repeat the circle with dots from the logo
export function HeroArch({ photo, detail }: HeroArchProps) {
  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
      <div
        aria-hidden
        className="absolute -inset-12 rounded-full bg-radial from-glow/35 via-glow/10 to-transparent blur-3xl motion-safe:animate-flicker-slow"
      />

      <div
        aria-hidden
        className="absolute -inset-4 rounded-t-full border border-b-0 border-gold/60 motion-safe:animate-arch-in"
      />
      <svg
        aria-hidden
        viewBox="0 0 16 56"
        className="absolute top-6 -right-9 w-4 text-gold motion-safe:animate-arch-in"
      >
        <circle cx="4" cy="4" r="3.5" fill="currentColor" />
        <circle cx="10" cy="26" r="2.5" fill="currentColor" />
        <circle cx="13" cy="46" r="1.75" fill="currentColor" />
      </svg>

      <div className="relative aspect-3/4 overflow-hidden rounded-t-full ring-1 ring-gold/30">
        {photo}
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-night/70 via-transparent to-glow/10"
        />
      </div>

      <div className="absolute -bottom-8 -left-4 size-28 overflow-hidden rounded-full border border-gold/60 ring-8 ring-night sm:-left-10 sm:size-40">
        {detail}
      </div>
    </div>
  );
}
