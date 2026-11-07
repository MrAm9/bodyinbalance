import { describe, expect, it } from "vitest";

import { typograph } from "@/lib/typograph";

const NBSP = " ";

describe("typograph", () => {
  it("binds a preposition to the next word", () => {
    expect(typograph("Массаж в Южном Бутово")).toBe(
      `Массаж в${NBSP}Южном Бутово`,
    );
  });

  it("handles a short word at the start and adjacent short words", () => {
    expect(typograph("С ребёнком и в выходные")).toBe(
      `С${NBSP}ребёнком и${NBSP}в${NBSP}выходные`,
    );
  });

  it("works after an opening quote", () => {
    expect(typograph("«В балансе»")).toBe(`«В${NBSP}балансе»`);
  });

  it("does not touch longer words that start with a short one", () => {
    expect(typograph("Вход со двора")).toBe(`Вход со${NBSP}двора`);
    expect(typograph("Внутри тепло")).toBe("Внутри тепло");
  });

  it("glues a dash to the word before it", () => {
    expect(typograph("позвоните — Олег подскажет")).toBe(
      `позвоните${NBSP}— Олег подскажет`,
    );
  });
});
