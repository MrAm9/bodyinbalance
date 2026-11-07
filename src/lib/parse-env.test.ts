import { describe, expect, it } from "vitest";

import { parseEnv } from "@/lib/parse-env";

describe("parseEnv", () => {
  it("prefers SITE_URL for the own domain", () => {
    expect(
      parseEnv({
        SITE_URL: "https://telo.test",
        VERCEL_PROJECT_PRODUCTION_URL: "telo.vercel.app",
      }).SITE_URL,
    ).toBe("https://telo.test");
  });

  it("uses the production domain Vercel provides", () => {
    expect(
      parseEnv({ VERCEL_PROJECT_PRODUCTION_URL: "telo.vercel.app" }).SITE_URL,
    ).toBe("https://telo.vercel.app");
  });

  it("stops the build when no address is known", () => {
    expect(() => parseEnv({})).toThrow(/Не задан адрес сайта/);
  });
});
