import { describe, expect, it } from "vitest";

import { cn } from "@/lib/utils";

describe("cn", () => {
  it("keeps a custom font size next to a text color", () => {
    expect(cn("text-eyebrow uppercase", "text-gold-deep")).toBe(
      "text-eyebrow uppercase text-gold-deep",
    );
  });

  it("still lets a later font size win", () => {
    expect(cn("text-section", "text-hero")).toBe("text-hero");
  });
});
