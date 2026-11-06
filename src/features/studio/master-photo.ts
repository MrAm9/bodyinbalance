import type { StudioInfo } from "@/payload-types";

// The upload relation is a bare id when the global is read with depth 0, so only a populated media doc counts
export function masterPhotoOf(
  info: Pick<StudioInfo, "masterPhoto">,
  fallbackAlt: string,
) {
  const photo = info.masterPhoto;
  if (typeof photo !== "object" || photo === null) return null;
  if (!photo.url || !photo.width || !photo.height) return null;

  return {
    url: photo.url,
    alt: photo.alt || fallbackAlt,
    width: photo.width,
    height: photo.height,
  };
}

export function paragraphsOf(text: string | null | undefined): string[] {
  return (text ?? "")
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph !== "");
}
