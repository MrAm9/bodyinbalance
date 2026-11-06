import type { ReactNode } from "react";

interface HeroPhotosProps {
  photo: ReactNode;
}

export function HeroPhotos({ photo }: HeroPhotosProps) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-12 rounded-full bg-radial from-glow/35 via-glow/10 to-transparent blur-3xl motion-safe:animate-flicker-slow"
      />
      <div className="relative aspect-3/2 overflow-hidden rounded-md lg:aspect-4/5">
        {photo}
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-night/60 via-transparent to-glow/10"
        />
      </div>
    </div>
  );
}
