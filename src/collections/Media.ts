import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Фото", plural: "Фото" },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      label: "Описание для незрячих и поисковиков",
      type: "text",
      required: true,
    },
  ],
  upload: {
    // Local disk only until Yandex Object Storage is connected at deploy
    staticDir: "media",
    mimeTypes: ["image/*"],
  },
};
