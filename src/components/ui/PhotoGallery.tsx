"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface GalleryPhoto {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface PhotoGalleryProps {
  photos: readonly GalleryPhoto[];
  labels: { open: string; close: string; previous: string; next: string };
}

// Native <dialog> traps focus and closes on Esc; only the current index lives in state
export function PhotoGallery({ photos, labels }: PhotoGalleryProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState(0);
  const photo = photos.at(current);

  function openPhoto(index: number) {
    setCurrent(index);
    dialog.current?.showModal();
  }

  function step(offset: number) {
    setCurrent((index) => (index + offset + photos.length) % photos.length);
  }

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {photos.map((item, index) => (
          <li key={item.id} data-reveal="photo">
            <button
              type="button"
              onClick={() => {
                openPhoto(index);
              }}
              aria-label={`${labels.open}: ${item.alt}`}
              className="group block aspect-4/5 w-full overflow-hidden rounded-md"
            >
              <Image
                src={item.src}
                alt=""
                width={item.width}
                height={item.height}
                sizes="(min-width: 768px) 30vw, 50vw"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        aria-label={photo?.alt}
        className="m-auto max-h-svh max-w-svw bg-transparent p-4 backdrop:bg-night/90"
      >
        {photo && (
          <figure className="flex flex-col items-center gap-4">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="90vw"
              className="max-h-lightbox w-auto rounded-md object-contain"
            />
            <figcaption className="max-w-xl text-center text-sm text-cream-muted">
              {photo.alt}
            </figcaption>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  step(-1);
                }}
                className="rounded-full border border-gold/50 px-5 py-2 text-sm text-cream transition-colors hover:bg-gold/10"
              >
                {labels.previous}
              </button>
              <button
                type="button"
                onClick={() => dialog.current?.close()}
                className="rounded-full bg-gold px-5 py-2 text-sm text-night transition-colors hover:bg-gold-soft"
              >
                {labels.close}
              </button>
              <button
                type="button"
                onClick={() => {
                  step(1);
                }}
                className="rounded-full border border-gold/50 px-5 py-2 text-sm text-cream transition-colors hover:bg-gold/10"
              >
                {labels.next}
              </button>
            </div>
          </figure>
        )}
      </dialog>
    </>
  );
}
