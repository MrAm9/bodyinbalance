import type { CollectionConfig, FieldHook } from "payload";

import { slugify, slugPattern } from "@/lib/slugify";
import type { Service } from "@/payload-types";

const fillSlugFromTitle: FieldHook<Service, string | null | undefined> = ({
  value,
  data,
}) => {
  if (value) return value;
  return data?.title ? slugify(data.title) : value;
};

export const audienceOptions = [
  { label: "Взрослые", value: "adults" },
  { label: "Дети", value: "children" },
  { label: "Беременные", value: "pregnant" },
  { label: "Спортсмены", value: "athletes" },
] as const;

export const Services: CollectionConfig = {
  slug: "services",
  labels: { singular: "Вид массажа", plural: "Виды массажа" },
  defaultSort: "order",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "isActive", "order"],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", label: "Название", type: "text", required: true },
    {
      name: "slug",
      label: "Адрес страницы",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
        description:
          "Латиницей через дефис. Если оставить пустым, заполнится из названия.",
      },
      hooks: {
        beforeValidate: [fillSlugFromTitle],
      },
      validate: (value: string | null | undefined) =>
        (typeof value === "string" && slugPattern.test(value)) ||
        "Только латинские буквы, цифры и дефисы, например detskij",
    },
    {
      name: "isActive",
      label: "Показывать на сайте",
      type: "checkbox",
      defaultValue: true,
      admin: { position: "sidebar" },
    },
    {
      name: "order",
      label: "Порядок в списке",
      type: "number",
      defaultValue: 100,
      admin: {
        position: "sidebar",
        description: "Меньше число — выше в списке.",
      },
    },
    {
      name: "summary",
      label: "Кратко",
      type: "textarea",
      required: true,
      admin: { description: "Одно-два предложения для карточки в списке." },
    },
    {
      name: "audience",
      label: "Для кого",
      type: "select",
      hasMany: true,
      options: [...audienceOptions],
    },
    {
      name: "options",
      label: "Длительность и цена",
      labels: { singular: "Вариант", plural: "Варианты" },
      type: "array",
      minRows: 1,
      required: true,
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "durationMinutes",
              label: "Минут",
              type: "number",
              required: true,
              min: 15,
              max: 180,
            },
            {
              name: "priceRub",
              label: "Цена, ₽",
              type: "number",
              required: true,
              min: 0,
            },
          ],
        },
      ],
    },
    { name: "description", label: "Подробное описание", type: "richText" },
    { name: "contraindications", label: "Противопоказания", type: "textarea" },
    {
      name: "faq",
      label: "Вопросы и ответы",
      labels: { singular: "Вопрос", plural: "Вопросы" },
      type: "array",
      fields: [
        { name: "question", label: "Вопрос", type: "text", required: true },
        { name: "answer", label: "Ответ", type: "textarea", required: true },
      ],
    },
    {
      name: "seo",
      label: "Для поисковиков",
      type: "group",
      fields: [
        {
          name: "title",
          label: "Заголовок вкладки (до 60 символов)",
          type: "text",
          maxLength: 60,
        },
        {
          name: "description",
          label: "Описание в поиске (до 155 символов)",
          type: "textarea",
          maxLength: 155,
        },
      ],
    },
  ],
};
