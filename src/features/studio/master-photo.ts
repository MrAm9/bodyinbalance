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

export interface MasterDocument {
  id: string;
  title: string;
  image: { url: string; width: number; height: number } | null;
}

// Rows whose scan is not populated (depth 0) or lacks dimensions are skipped rather than shown broken
export function masterDocumentsOf(
  info: Pick<StudioInfo, "masterDocuments">,
): MasterDocument[] {
  return (info.masterDocuments ?? []).flatMap((row) => {
    const scan = row.scan;
    if (typeof scan !== "object" || !scan.url || !scan.width || !scan.height)
      return [];
    return [
      {
        id: row.id ?? scan.url,
        title: row.title,
        image: { url: scan.url, width: scan.width, height: scan.height },
      },
    ];
  });
}
