import type { Service } from "@/payload-types";

type ServiceDraft = Pick<
  Service,
  | "title"
  | "slug"
  | "summary"
  | "audience"
  | "options"
  | "contraindications"
  | "order"
>;

const commonContraindications =
  "Острые воспаления и повышенная температура, кожные заболевания в зоне массажа, тромбоз, онкологические заболевания. При хронических болезнях сначала посоветуйтесь с врачом.";

// TODO(content): prices are Moscow market minimums from Profi.ru (2026), the owner has to confirm them
// TODO(content): summaries and contraindications are drafts for Oleg to review
// TODO(content): "Массаж спины и шеи" is named so until the medical licence question is settled (otherwise «Лечебный массаж»)
export const servicesDraft: ServiceDraft[] = [
  {
    title: "Миофасциальный массаж",
    slug: "miofascialnyj",
    summary:
      "Медленная глубокая работа с фасциями и мышцами. Снимает зажимы в шее, спине и плечах, которые остаются после долгого сидения.",
    audience: ["adults", "athletes"],
    options: [
      { durationMinutes: 60, priceRub: 3000 },
      { durationMinutes: 90, priceRub: 4300 },
    ],
    contraindications: commonContraindications,
    order: 10,
  },
  {
    title: "Антицеллюлитный массаж",
    slug: "anticellyulitnyj",
    summary:
      "Интенсивный моделирующий массаж бёдер, ягодиц и живота. Разгоняет лимфу и уменьшает отёки, лучше всего работает курсом из 10 сеансов.",
    audience: ["adults"],
    options: [
      { durationMinutes: 60, priceRub: 3000 },
      { durationMinutes: 90, priceRub: 4300 },
    ],
    contraindications: `${commonContraindications} Варикоз в зоне массажа.`,
    order: 20,
  },
  {
    title: "Массаж спины и шеи",
    slug: "lechebnyj",
    summary:
      "Проработка шейно-воротниковой зоны и всей спины при скованности, тяжести в плечах и головной боли от напряжения.",
    audience: ["adults"],
    options: [
      { durationMinutes: 30, priceRub: 1800 },
      { durationMinutes: 60, priceRub: 2800 },
    ],
    contraindications: commonContraindications,
    order: 30,
  },
  {
    title: "Восстановительный массаж",
    slug: "vosstanovitelnyj",
    summary:
      "Общий массаж всего тела в спокойном темпе. Подходит после болезни, недосыпа и тяжёлой недели.",
    audience: ["adults"],
    options: [
      { durationMinutes: 60, priceRub: 2800 },
      { durationMinutes: 90, priceRub: 4000 },
    ],
    contraindications: commonContraindications,
    order: 40,
  },
  {
    title: "Спортивный массаж",
    slug: "sportivnyj",
    summary:
      "Подготовка мышц перед стартом или восстановление после нагрузки. Мастер работает с теми группами мышц, которые нагружает ваш вид спорта.",
    audience: ["adults", "athletes"],
    options: [
      { durationMinutes: 60, priceRub: 3000 },
      { durationMinutes: 90, priceRub: 4300 },
    ],
    contraindications: `${commonContraindications} Свежие травмы и растяжения.`,
    order: 50,
  },
  {
    title: "Детский массаж",
    slug: "detskij",
    summary:
      "Мягкий массаж для детей: общий, при нарушениях осанки, для укрепления мышц. Родитель может присутствовать на сеансе.",
    audience: ["children"],
    options: [
      { durationMinutes: 30, priceRub: 1700 },
      { durationMinutes: 45, priceRub: 2200 },
    ],
    contraindications: commonContraindications,
    order: 60,
  },
  {
    title: "Массаж лица",
    slug: "lica",
    summary:
      "Расслабляет жевательные мышцы и лоб, уменьшает утреннюю отёчность. Делается без косметических процедур.",
    audience: ["adults"],
    options: [
      { durationMinutes: 30, priceRub: 1800 },
      { durationMinutes: 45, priceRub: 2400 },
    ],
    contraindications: `${commonContraindications} Воспаления и высыпания на лице.`,
    order: 70,
  },
  {
    title: "Массаж для беременных",
    slug: "dlya-beremennyh",
    summary:
      "Бережный массаж в удобном положении лёжа на боку. Снимает нагрузку с поясницы и ног.",
    audience: ["pregnant"],
    options: [{ durationMinutes: 60, priceRub: 3000 }],
    contraindications: `${commonContraindications} Угроза прерывания беременности, токсикоз, высокое давление. Нужно разрешение врача, ведущего беременность.`,
    order: 80,
  },
  {
    title: "Массаж с элементами мануальных техник",
    slug: "s-elementami-manualnyh-tehnik",
    summary:
      "Массаж с мягкими мобилизациями суставов и вытяжением позвоночника. Помогает, когда после обычного массажа скованность быстро возвращается.",
    audience: ["adults", "athletes"],
    options: [{ durationMinutes: 60, priceRub: 3500 }],
    contraindications: `${commonContraindications} Грыжи и протрузии в острой стадии, остеопороз.`,
    order: 90,
  },
];
