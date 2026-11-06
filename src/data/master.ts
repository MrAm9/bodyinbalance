import { studio } from "@/data/contacts";

// TODO(content): experience, specialty from the diploma and massage courses; portrait and bio go into the admin
export const master = {
  eyebrow: "Мастер",
  name: "Олег Андреев",
  lead: "Олег принимает сам, без ассистентов и подмен: вы каждый раз приходите к одному специалисту, который помнит, с чем вы были в прошлый раз.",
  audience: "Работает со взрослыми, детьми и беременными.",
  moreLink: "Подробнее о мастере",
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
