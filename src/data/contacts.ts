export const studio = {
  name: "Тело в балансе",
  kind: "Массажная студия",
  slogan: "здоровье ручной работы",
  address: {
    city: "Москва",
    postalCode: "117041",
    street: "ул.\u00a0Ахмата Кадырова, д.\u00a08, корп.\u00a01",
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
  // Opens the YCLIENTS-powered booking widget on the Yandex Maps card
  yandexBookingUrl:
    "https://yandex.ru/maps/org/telo_v_balanse/70866995496/?booking%5Bpage%5D=services&booking%5Bpermalink%5D=70866995496",
  // Taken from the Yandex Maps card link; the route ends at the building, not the entrance
  coordinates: { latitude: 55.538799, longitude: 37.511445 },
  phones: [
    { display: "+7 (938) 553-55-45", href: "tel:+79385535545" },
    { display: "+7 (985) 304-54-11", href: "tel:+79853045411" },
  ],
} as const;
