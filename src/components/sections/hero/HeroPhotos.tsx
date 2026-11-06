import type { ReactNode } from "react";

interface HeroPhotosProps {
  photo: ReactNode;
  detail: ReactNode;
}

export function HeroPhotos({ photo, detail }: HeroPhotosProps) {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden
        className="absolute -inset-12 rounded-full bg-radial from-glow/35 via-glow/10 to-transparent blur-3xl motion-safe:animate-flicker-slow"
      />

      <div className="relative aspect-4/5 overflow-hidden rounded-md">
        {photo}
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-night/60 via-transparent to-glow/10"
        />
      </div>

      <div className="absolute -bottom-10 -left-5 aspect-4/5 w-2/5 overflow-hidden rounded-md shadow-2xl shadow-black/60 sm:-left-12">
        {detail}
      </div>
    </div>
  );
}
