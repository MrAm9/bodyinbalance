export const homeHero = {
  eyebrow: "Южное Бутово · м. Бунинская аллея",
  title: "Массаж в\u00a0Южном Бутово",
  lead: "«Тело в балансе» — кабинет массажа в 5–10 минутах от метро «Бунинская аллея». Один мастер, десять видов массажа для взрослых, детей и беременных. Принимаем каждый день с 10:00 до 22:00.",
  primaryAction: "Выбрать время",
  facts: [
    { id: "hours", label: "Ежедневно", value: "10:00–22:00" },
    { id: "types", label: "Видов массажа", value: "10" },
    { id: "metro", label: "От метро", value: "5–10 мин" },
  ],
  photo: {
    src: "/images/room-evening.jpg",
    width: 2000,
    height: 1386,
    alt: "Кабинет студии вечером: массажный стол с полотенцами и свечой, зелёные шторы, торшер",
  },
  detailPhoto: {
    src: "/images/candle-lantern.jpg",
    width: 2000,
    height: 1640,
    alt: "",
  },
} as const;
