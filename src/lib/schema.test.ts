import { describe, expect, it } from "vitest";

import { absoluteUrl, breadcrumbSchema, faqSchema } from "@/lib/schema";

const siteUrl = "https://example.test";

describe("absoluteUrl", () => {
  it("joins the site and a path without doubling slashes", () => {
    expect(absoluteUrl(`${siteUrl}/`, "/massazh/")).toBe(
      "https://example.test/massazh/",
    );
  });
});

describe("breadcrumbSchema", () => {
  it("numbers crumbs from one and makes their URLs absolute", () => {
    const schema = breadcrumbSchema(siteUrl, [
      { name: "Главная", path: "/" },
      { name: "Виды массажа", path: "/massazh/" },
    ]);
    expect(
      schema.itemListElement.map((crumb) => [crumb.position, crumb.item]),
    ).toEqual([
      [1, "https://example.test/"],
      [2, "https://example.test/massazh/"],
    ]);
  });
});

describe("faqSchema", () => {
  it("maps questions and answers", () => {
    const schema = faqSchema([
      { question: "Сколько длится сеанс?", answer: "60 минут." },
    ]);
    expect(schema.mainEntity[0]?.acceptedAnswer.text).toBe("60 минут.");
  });
});
