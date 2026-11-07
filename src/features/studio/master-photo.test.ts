import { describe, expect, it } from "vitest";

import {
  masterDocumentsOf,
  masterPhotoOf,
  paragraphsOf,
} from "@/features/studio/master-photo";

const media = {
  id: 1,
  alt: "",
  url: "/api/media/file/oleg.jpg",
  width: 1200,
  height: 1600,
  updatedAt: "",
  createdAt: "",
};

describe("masterPhotoOf", () => {
  it("returns null while no photo is uploaded", () => {
    expect(masterPhotoOf({ masterPhoto: null }, "Олег")).toBeNull();
  });

  it("returns null for an unpopulated relation id", () => {
    expect(masterPhotoOf({ masterPhoto: 1 }, "Олег")).toBeNull();
  });

  it("falls back to the given alt text when the upload has none", () => {
    expect(masterPhotoOf({ masterPhoto: media }, "Олег")?.alt).toBe("Олег");
  });
});

describe("paragraphsOf", () => {
  it("splits on blank lines and drops empty ones", () => {
    expect(paragraphsOf("Первый абзац.\n\n  \nВторой абзац.\n")).toEqual([
      "Первый абзац.",
      "Второй абзац.",
    ]);
  });

  it("returns nothing for an empty field", () => {
    expect(paragraphsOf(null)).toEqual([]);
  });
});

describe("masterDocumentsOf", () => {
  it("returns nothing when no documents are uploaded", () => {
    expect(masterDocumentsOf({ masterDocuments: null })).toEqual([]);
  });

  it("keeps populated scans and skips bare ids", () => {
    const documents = masterDocumentsOf({
      masterDocuments: [
        { id: "a", title: "Диплом", scan: media },
        { id: "b", title: "Сертификат", scan: 7 },
      ],
    });
    expect(documents.map((document) => document.title)).toEqual(["Диплом"]);
  });
});
