import { z } from "zod";

const envSchema = z.object({
  SITE_URL: z.url({
    error: "SITE_URL должен быть полным адресом сайта, начиная с https://",
  }),
});

export const env = envSchema.parse(process.env);
