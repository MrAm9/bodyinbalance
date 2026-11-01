import path from "node:path";
import { fileURLToPath } from "node:url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { ru } from "@payloadcms/translations/languages/ru";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Bookings } from "./collections/Bookings";
import { DaysOff } from "./collections/DaysOff";
import { Media } from "./collections/Media";
import { Services } from "./collections/Services";
import { Users } from "./collections/Users";
import { Schedule } from "./globals/Schedule";
import { env } from "./lib/env";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: { titleSuffix: " · Тело в балансе" },
  },
  i18n: {
    supportedLanguages: { ru },
    fallbackLanguage: "ru",
  },
  collections: [Bookings, Services, DaysOff, Media, Users],
  globals: [Schedule],
  editor: lexicalEditor(),
  secret: env.PAYLOAD_SECRET,
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
  db: postgresAdapter({
    pool: { connectionString: env.DATABASE_URL },
  }),
  sharp,
});
