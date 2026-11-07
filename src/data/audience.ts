import type { Audience } from "@/data/services";

export const audienceLabels = {
  adults: "Взрослые",
  children: "Дети",
  pregnant: "Беременные",
  athletes: "Спортсмены",
} as const satisfies Record<Audience, string>;
