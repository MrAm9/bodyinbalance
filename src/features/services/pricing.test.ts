import { describe, expect, it } from "vitest";

import {
  formatRub,
  lowestPrice,
  sharedPriceList,
} from "@/features/services/pricing";

const standard = [
  { durationMinutes: 30, priceRub: 3300 },
  { durationMinutes: 60, priceRub: 4200 },
];

describe("lowestPrice", () => {
  it("picks the cheapest option", () => {
    expect(lowestPrice({ options: [...standard].reverse() })).toBe(3300);
  });
});

describe("sharedPriceList", () => {
  it("returns the common options when all services match", () => {
    expect(
      sharedPriceList([{ options: standard }, { options: [...standard] }]),
    ).toEqual(standard);
  });

  it("returns null when any service differs", () => {
    expect(
      sharedPriceList([
        { options: standard },
        { options: [{ durationMinutes: 60, priceRub: 5000 }] },
      ]),
    ).toBeNull();
  });

  it("returns null for an empty list", () => {
    expect(sharedPriceList([])).toBeNull();
  });
});

describe("formatRub", () => {
  it("groups thousands the Russian way", () => {
    expect(formatRub(4200).replace(/\s/g, " ")).toBe("4 200 ₽");
  });
});
