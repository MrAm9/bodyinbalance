import type { GlobalConfig } from "payload";

export const StudioInfo: GlobalConfig = {
  slug: "studio-info",
  label: "Информация о студии",
  admin: {
    description:
      "Необязательные поля. Пока поле пустое, на сайте его блок не показывается или стоит заглушка.",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Как добраться",
          fields: [
            {
              name: "entrance",
              label: "Как найти вход",
              type: "textarea",
              admin: {
                description:
                  "Подъезд, этаж, домофон, ориентиры. Показывается на странице «Контакты» и на главной.",
              },
            },
            { name: "parking", label: "Парковка", type: "text" },
          ],
        },
        {
          label: "Мастер",
          fields: [
            {
              name: "masterPhoto",
              label: "Фото мастера",
              type: "upload",
              relationTo: "media",
              admin: {
                description:
                  "Лучше вертикальное фото в кабинете. Пока фото нет, показывается эмблема студии.",
              },
            },
            {
              name: "masterAbout",
              label: "О мастере",
              type: "textarea",
              admin: {
                description:
                  "Стаж, образование, курсы, с чем чаще приходят. Абзацы разделяйте пустой строкой.",
              },
            },
          ],
        },
        {
          label: "Реквизиты",
          fields: [
            {
              name: "legalName",
              label: "ИП или организация",
              type: "text",
              admin: { description: "Например: ИП Андреев Олег Владимирович" },
            },
            {
              type: "row",
              fields: [
                { name: "inn", label: "ИНН", type: "text" },
                { name: "ogrn", label: "ОГРН или ОГРНИП", type: "text" },
              ],
            },
            {
              name: "email",
              label: "Почта для обращений по персональным данным",
              type: "email",
            },
          ],
        },
      ],
    },
  ],
};
