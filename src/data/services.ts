export type Audience = "adults" | "children" | "pregnant" | "athletes";

export interface ServiceOption {
  durationMinutes: number;
  priceRub: number;
}

export interface Service {
  title: string;
  // Part of the page URL: /massazh/<slug>/
  slug: string;
  summary: string;
  audience: Audience[];
  // Durations in ascending order; the cheapest one is shown as "от" in lists
  options: ServiceOption[];
  contraindications: string;
  // Paragraphs of "Как проходит сеанс"; a shared text is shown while it is empty
  description?: string[];
  faq?: { question: string; answer: string }[];
  seo?: { title?: string; description?: string };
}

const commonContraindications =
  "Острые воспаления и повышенная температура, кожные заболевания в зоне массажа, тромбоз, онкологические заболевания. При хронических болезнях сначала посоветуйтесь с врачом.";

// Names match the studio's Yandex Maps card; prices come from its "Цены" news post (2026-10-22)
// TODO(content): summaries and contraindications are drafts for Oleg to review; add `description` and `faq` per massage when he writes them
export const services: Service[] = [
  {
    title: "Миофасциальный массаж",
    slug: "miofascialnyj",
    summary:
      "Медленная глубокая работа с фасциями и мышцами. Снимает зажимы в шее, спине и плечах, которые остаются после долгого сидения.",
    audience: ["adults", "athletes"],
    options: [
      { durationMinutes: 30, priceRub: 3300 },
      { durationMinutes: 60, priceRub: 4200 },
      { durationMinutes: 90, priceRub: 5100 },
    ],
    contraindications: commonContraindications,
  },
  {
    title: "Антицеллюлитный массаж",
    slug: "anticellyulitnyj",
    summary:
      "Интенсивный моделирующий массаж бёдер, ягодиц и живота. Разгоняет лимфу и уменьшает отёки, лучше всего работает курсом из 10 сеансов.",
    audience: ["adults"],
    options: [
      { durationMinutes: 30, priceRub: 3300 },
      { durationMinutes: 60, priceRub: 4200 },
      { durationMinutes: 90, priceRub: 5100 },
    ],
    contraindications: `${commonContraindications} Варикоз в зоне массажа.`,
  },
  {
    title: "Лечебный массаж",
    slug: "lechebnyj",
    summary:
      "Проработка шейно-воротниковой зоны и всей спины при скованности, тяжести в плечах и головной боли от напряжения.",
    audience: ["adults"],
    options: [
      { durationMinutes: 30, priceRub: 3300 },
      { durationMinutes: 60, priceRub: 4200 },
      { durationMinutes: 90, priceRub: 5100 },
    ],
    contraindications: commonContraindications,
  },
  {
    title: "Восстановительный массаж",
    slug: "vosstanovitelnyj",
    summary:
      "Общий массаж всего тела в спокойном темпе. Подходит после болезни, недосыпа и тяжёлой недели.",
    audience: ["adults"],
    options: [
      { durationMinutes: 30, priceRub: 3300 },
      { durationMinutes: 60, priceRub: 4200 },
      { durationMinutes: 90, priceRub: 5100 },
    ],
    contraindications: commonContraindications,
  },
  {
    title: "Спортивный массаж",
    slug: "sportivnyj",
    summary:
      "Подготовка мышц перед стартом или восстановление после нагрузки. Мастер работает с теми группами мышц, которые нагружает ваш вид спорта.",
    audience: ["adults", "athletes"],
    options: [
      { durationMinutes: 30, priceRub: 3300 },
      { durationMinutes: 60, priceRub: 4200 },
      { durationMinutes: 90, priceRub: 5100 },
    ],
    contraindications: `${commonContraindications} Свежие травмы и растяжения.`,
  },
  {
    title: "Детский массаж",
    slug: "detskij",
    summary:
      "Мягкий массаж для детей: общий, при нарушениях осанки, для укрепления мышц. Родитель может присутствовать на сеансе.",
    audience: ["children"],
    options: [
      { durationMinutes: 30, priceRub: 3300 },
      { durationMinutes: 60, priceRub: 4200 },
      { durationMinutes: 90, priceRub: 5100 },
    ],
    contraindications: commonContraindications,
  },
  {
    title: "Массаж лица",
    slug: "lica",
    summary:
      "Расслабляет жевательные мышцы и лоб, уменьшает утреннюю отёчность. Делается без косметических процедур.",
    audience: ["adults"],
    options: [
      { durationMinutes: 30, priceRub: 3300 },
      { durationMinutes: 60, priceRub: 4200 },
      { durationMinutes: 90, priceRub: 5100 },
    ],
    contraindications: `${commonContraindications} Воспаления и высыпания на лице.`,
  },
  {
    title: "Массаж для беременных",
    slug: "dlya-beremennyh",
    summary:
      "Бережный массаж в удобном положении лёжа на боку. Снимает нагрузку с поясницы и ног.",
    audience: ["pregnant"],
    options: [
      { durationMinutes: 30, priceRub: 3300 },
      { durationMinutes: 60, priceRub: 4200 },
      { durationMinutes: 90, priceRub: 5100 },
    ],
    contraindications: `${commonContraindications} Угроза прерывания беременности, токсикоз, высокое давление. Нужно разрешение врача, ведущего беременность.`,
  },
  {
    title: "Массаж с элементами мануальных техник",
    slug: "s-elementami-manualnyh-tehnik",
    summary:
      "Массаж с мягкими мобилизациями суставов и вытяжением позвоночника. Помогает, когда после обычного массажа скованность быстро возвращается.",
    audience: ["adults", "athletes"],
    options: [
      { durationMinutes: 30, priceRub: 3300 },
      { durationMinutes: 60, priceRub: 4200 },
      { durationMinutes: 90, priceRub: 5100 },
    ],
    contraindications: `${commonContraindications} Грыжи и протрузии в острой стадии, остеопороз.`,
  },
  {
    title: "Оздоровительный массаж",
    slug: "ozdorovitelnyj",
    summary:
      "Классический массаж всего тела для общего тонуса. Разогревает мышцы, улучшает кровообращение и снимает накопленную усталость.",
    audience: ["adults"],
    options: [
      { durationMinutes: 30, priceRub: 3300 },
      { durationMinutes: 60, priceRub: 4200 },
      { durationMinutes: 90, priceRub: 5100 },
    ],
    contraindications: commonContraindications,
  },
];
