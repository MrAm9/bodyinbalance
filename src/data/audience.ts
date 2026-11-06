import type { Service } from "@/payload-types";

type Audience = NonNullable<Service["audience"]>[number];

export const audienceLabels = {
  adults: "Взрослые",
  children: "Дети",
  pregnant: "Беременные",
  athletes: "Спортсмены",
} as const satisfies Record<Audience, string>;
