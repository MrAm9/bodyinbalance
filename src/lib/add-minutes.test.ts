import { describe, expect, it } from "vitest";

import { addMinutes } from "@/lib/add-minutes";

describe("addMinutes", () => {
  it("adds a session length to the start time", () => {
    expect(addMinutes("2026-11-02T07:00:00.000Z", 90)).toBe(
      "2026-11-02T08:30:00.000Z",
    );
  });

  it("crosses midnight in UTC", () => {
    expect(addMinutes("2026-11-02T23:30:00.000Z", 60)).toBe(
      "2026-11-03T00:30:00.000Z",
    );
  });
});
