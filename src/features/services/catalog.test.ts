import { describe, expect, it } from "vitest";

import { services } from "@/data/services";
import { getServiceBySlug, otherServices } from "@/features/services/catalog";

describe("getServiceBySlug", () => {
  it("finds a massage by its URL part", () => {
    expect(getServiceBySlug("detskij")?.title).toBe("Детский массаж");
  });

  it("returns null for an unknown slug", () => {
    expect(getServiceBySlug("net-takogo")).toBeNull();
  });
});

describe("services data", () => {
  it("has unique slugs, so every massage gets its own page", () => {
    const slugs = services.map((service) => service.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("lists durations in ascending order with positive prices", () => {
    for (const service of services) {
      const durations = service.options.map((option) => option.durationMinutes);
      expect(durations).toEqual([...durations].sort((a, b) => a - b));
      expect(service.options.every((option) => option.priceRub > 0)).toBe(true);
    }
  });
});

describe("otherServices", () => {
  it("leaves out the current massage", () => {
    const [first] = services;
    expect(
      otherServices(first).some((service) => service.slug === first.slug),
    ).toBe(false);
  });
});
