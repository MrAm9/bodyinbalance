import Image from "next/image";

import { cn } from "@/lib/utils";

interface PortraitPhoto {
  url: string;
  alt: string;
  width: number;
  height: number;
}

interface PortraitProps {
  photo: PortraitPhoto | null;
  className?: string;
}

// Arch-shaped portrait; until a real photo is uploaded the studio emblem stands in
export function Portrait({ photo, className }: PortraitProps) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-3/4 w-full max-w-sm overflow-hidden rounded-t-full bg-night ring-1 ring-gold/40",
        className,
      )}
    >
      {photo ? (
        <Image
          src={photo.url}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(min-width: 768px) 24rem, 90vw"
          className="size-full object-cover"
        />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
