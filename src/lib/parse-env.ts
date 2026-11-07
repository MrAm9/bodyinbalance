import { z } from "zod";

// SITE_URL wins (own domain); on Vercel the production domain it sets itself is used, so a demo deploy needs no setup
const envSchema = z
  .object({
    SITE_URL: z
      .url({
        error: "SITE_URL должен быть полным адресом сайта, начиная с https://",
      })
      .optional(),
    VERCEL_PROJECT_PRODUCTION_URL: z.string().min(1).optional(),
  })
  .transform((vars, context) => {
    if (vars.SITE_URL) return { SITE_URL: vars.SITE_URL };
    if (vars.VERCEL_PROJECT_PRODUCTION_URL) {
      return { SITE_URL: `https://${vars.VERCEL_PROJECT_PRODUCTION_URL}` };
    }
    context.addIssue({
      code: "custom",
      message:
        "Не задан адрес сайта: укажите SITE_URL (например https://мой-домен.ru) или собирайте на Vercel",
    });
    return z.NEVER;
  });

export function parseEnv(source: Record<string, string | undefined>) {
  return envSchema.parse(source);
}
