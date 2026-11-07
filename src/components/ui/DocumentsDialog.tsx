"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { buttonVariants } from "@/components/ui/button-variants";

interface DialogDocument {
  id: string;
  title: string;
  image: { src: string; width: number; height: number } | null;
}

interface DocumentsDialogProps {
  documents: readonly DialogDocument[];
  labels: {
    open: string;
    title: string;
    close: string;
    back: string;
    enlarge: string;
    placeholder: string;
  };
}

interface DocumentFaceProps {
  document: DialogDocument;
  placeholder: string;
  // The grid shows only the emblem; the title is printed under the card
  compact?: boolean;
}

function DocumentFace({
  document,
  placeholder,
  compact = false,
}: DocumentFaceProps) {
  if (document.image) {
    return (
      <Image
        src={document.image.src}
        alt={document.title}
        width={document.image.width}
        height={document.image.height}
        sizes="(min-width: 640px) 18rem, 80vw"
        className="size-full object-contain"
      />
    );
  }
  return (
    <span className="flex size-full flex-col items-center justify-center gap-3 border border-gold-deep/30 p-3 text-center sm:p-6">
      <Image
        src="/images/logo-emblem.png"
        alt=""
        width={52}
        height={48}
        className="size-12 opacity-80"
      />
      {!compact && (
        <span className="font-display text-xl text-ink">{document.title}</span>
      )}
      <span className="text-xs text-ink-muted">{placeholder}</span>
    </span>
  );
}

// One native <dialog>: the grid of documents, and a full-screen view of the chosen one on top of it
export function DocumentsDialog({ documents, labels }: DocumentsDialogProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);
  const opened = openedIndex === null ? undefined : documents.at(openedIndex);

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className={buttonVariants({ tone: "outlineInk", className: "mt-8" })}
      >
        {labels.open}
      </button>

      <dialog
        ref={dialog}
        aria-label={labels.title}
        onClose={() => {
          setOpenedIndex(null);
        }}
        className="m-auto w-full max-w-4xl rounded-lg bg-paper p-0 backdrop:bg-night/80"
      >
        <div className="flex items-center justify-between gap-4 border-b border-ink/10 px-6 py-4">
          <h2 className="font-display text-xl text-ink sm:text-2xl">
            {labels.title}
          </h2>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="text-sm text-ink-muted underline underline-offset-4 transition-colors hover:text-ink"
          >
            {labels.close}
          </button>
        </div>

        <ul className="grid grid-cols-3 gap-3 p-4 sm:gap-4 sm:p-6">
          {documents.map((document, index) => (
            <li key={document.id}>
              <button
                type="button"
                onClick={() => {
                  setOpenedIndex(index);
                }}
                aria-label={`${labels.enlarge}: ${document.title}`}
                className="group flex w-full flex-col gap-2 text-left sm:gap-3"
              >
                <span className="block aspect-3/4 w-full overflow-hidden rounded-md bg-marble transition-transform duration-300 group-hover:-translate-y-1">
                  <DocumentFace
                    document={document}
                    placeholder={labels.placeholder}
                    compact
                  />
                </span>
                <span className="text-xs text-ink sm:text-sm">
                  {document.title}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {opened && (
          <div className="fixed inset-0 z-overlay flex flex-col bg-night">
            <div className="flex items-center justify-between gap-4 px-5 py-4 text-cream">
              <p className="font-display text-xl">{opened.title}</p>
              <button
                type="button"
                onClick={() => {
                  setOpenedIndex(null);
                }}
                className="rounded-full border border-gold/50 px-5 py-2 text-sm transition-colors hover:bg-gold/10"
              >
                {labels.back}
              </button>
            </div>
            <div className="flex min-h-0 flex-1 items-center justify-center p-4">
              <div className="aspect-3/4 h-full max-w-full overflow-hidden rounded-md bg-paper">
                <DocumentFace
                  document={opened}
                  placeholder={labels.placeholder}
                />
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
