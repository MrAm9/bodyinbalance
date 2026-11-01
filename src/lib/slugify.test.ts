import { describe, expect, it } from "vitest";

import { slugify, slugPattern } from "@/lib/slugify";

describe("slugify", () => {
  it.each([
    ["Миофасциальный", "miofascialnyj"],
    ["Антицеллюлитный", "anticellyulitnyj"],
    ["Массаж для беременных", "massazh-dlya-beremennyh"],
    ["С элементами мануальных техник", "s-elementami-manualnyh-tehnik"],
    ["Массаж лица", "massazh-lica"],
    ["Щадящий подъём", "shchadyashchij-podem"],
  ])("transliterates %s", (title, slug) => {
    expect(slugify(title)).toBe(slug);
  });

  it("collapses punctuation and trims dashes", () => {
    expect(slugify("  Массаж (моделирующий), 60 мин!  ")).toBe(
      "massazh-modeliruyushchij-60-min",
    );
  });

  it("always produces a value accepted by slugPattern", () => {
    expect(slugPattern.test(slugify("Детский — массаж"))).toBe(true);
  });
});
