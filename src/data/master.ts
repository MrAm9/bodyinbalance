import { studio } from "@/data/contacts";

// TODO(content): portrait, experience, specialty from the diploma, massage courses and a few words from Oleg
export const master = {
  eyebrow: "Мастер",
  name: "Олег Андреев",
  lead: "Олег принимает сам, без ассистентов и подмен: вы каждый раз приходите к одному специалисту, который помнит, с чем вы были в прошлый раз.",
  audience: "Работает со взрослыми, детьми и беременными.",
  facts: [
    {
      id: "education",
      label: "Образование",
      value: "ПГУ им. Т. Г. Шевченко, 2020. Диплом признан в России",
    },
    {
      id: "reviews",
      label: "Отзывы",
      value: "На Яндекс Картах",
      href: `${studio.yandexMapsUrl}reviews/`,
    },
  ],
} as const;
