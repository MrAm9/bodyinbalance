import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.url({
    error: "DATABASE_URL должен быть строкой подключения к PostgreSQL",
  }),
  PAYLOAD_SECRET: z
    .string()
    .min(32, { error: "PAYLOAD_SECRET должен быть не короче 32 символов" }),
});

export const env = envSchema.parse(process.env);
