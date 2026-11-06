export const homeHero = {
  eyebrow: "Южное Бутово · м. Бунинская аллея",
  title: "Массаж в Южном Бутово",
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

export const homeConcerns = {
  eyebrow: "С чем приходят",
  title: "Когда тело просит внимания",
  lead: "Большинство гостей приходит с понятной задачей. Найдите свою — рядом указано, какой массаж с ней работает.",
  items: [
    {
      id: "neck",
      concern: "Затекают шея и плечи после дня за компьютером",
      serviceSlugs: ["lechebnyj", "miofascialnyj"],
    },
    {
      id: "back",
      concern: "К вечеру тянет поясницу и устаёт спина",
      serviceSlugs: ["lechebnyj", "s-elementami-manualnyh-tehnik"],
    },
    {
      id: "legs",
      concern: "Отекают ноги, хочется вернуть тонус коже",
      serviceSlugs: ["anticellyulitnyj"],
    },
    {
      id: "sport",
      concern: "Тренируетесь и долго восстанавливаетесь",
      serviceSlugs: ["sportivnyj", "vosstanovitelnyj"],
    },
    {
      id: "child",
      concern: "Ребёнку назначили массаж",
      serviceSlugs: ["detskij"],
    },
    {
      id: "pregnancy",
      concern: "Беременность, тяжесть в спине и ногах",
      serviceSlugs: ["dlya-beremennyh"],
    },
  ],
} as const;

export const homeServicesMenu = {
  eyebrow: "Виды массажа и цены",
  title: "Десять видов массажа",
  sharedPriceNote: "Цена зависит только от длительности сеанса",
  action: "Выбрать время",
} as const;

export const homeStudio = {
  eyebrow: "Кабинет",
  title: "Тёплый свет, тишина и ничего лишнего",
  lead: "Один кабинет и один мастер: в коридоре никого не ждёте, на сеансе только вы и Олег. Свежие полотенца и масло — к каждому сеансу.",
  photos: [
    {
      id: "towels",
      src: "/images/towels-candle.jpg",
      width: 2000,
      height: 1871,
      alt: "Сложенные полотенца со свечой на массажном столе",
    },
    {
      id: "sofa",
      src: "/images/sofa-lamp.jpg",
      width: 2000,
      height: 1630,
      alt: "Диван и торшер в кабинете, на столике свечи и растение",
    },
    {
      id: "oil",
      src: "/images/oil-flowers.jpg",
      width: 2000,
      height: 1555,
      alt: "Флакон с массажным маслом, цветы и аромадиффузор на подносе",
    },
    {
      id: "room",
      src: "/images/room-real.jpg",
      width: 1920,
      height: 2560,
      alt: "Кабинет целиком: массажный стол, растение у окна, диван и торшер",
    },
  ],
} as const;

export const homeBooking = {
  eyebrow: "Как записаться",
  title: "Три шага до сеанса",
  steps: [
    {
      id: "choose",
      title: "Выберите массаж и время",
      text: "Свободные окна видны в онлайн-записи. Если сомневаетесь, какой массаж нужен, позвоните — Олег подскажет.",
    },
    {
      id: "contacts",
      title: "Оставьте имя и телефон",
      text: "Больше ничего не нужно. Если что-то изменится, вам перезвонят.",
    },
    {
      id: "visit",
      title: "Приходите",
      text: "Кабинет в 5–10 минутах пешком от метро «Бунинская аллея». Приходите за 5 минут до начала.",
    },
  ],
  cancellation: "Перенести или отменить запись можно по телефону.",
  action: "Выбрать время",
} as const;

export const homeLocation = {
  eyebrow: "Как добраться",
  title: "У метро «Бунинская аллея»",
  directions: "От метро 5–10 минут пешком.",
  labels: { hours: "Режим работы", metro: "Метро", phones: "Телефоны" },
  routeAction: "Построить маршрут",
  mapAction: "Открыть на Яндекс Картах",
} as const;
