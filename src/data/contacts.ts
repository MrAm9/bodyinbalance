export const studio = {
  name: "Тело в балансе",
  kind: "Массажная студия",
  slogan: "здоровье ручной работы",
  address: {
    city: "Москва",
    postalCode: "117041",
    street: "ул. Ахмата Кадырова, д. 8, корп. 1",
    district: "Южное Бутово",
    metro: "Бунинская аллея",
    walkFromMetro: "5–10 минут пешком",
  },
  hours: {
    days: "Ежедневно",
    opens: "10:00",
    closes: "22:00",
  },
  yandexMapsUrl: "https://yandex.ru/maps/org/telo_v_balanse/70866995496/",
  phones: [
    { display: "8 (938) 555-55-45", href: "tel:+79385555545" },
    { display: "8 (985) 304-54-11", href: "tel:+79853045411" },
  ],
} as const;
