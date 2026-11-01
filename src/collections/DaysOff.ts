import type { CollectionConfig } from "payload";

export const DaysOff: CollectionConfig = {
  slug: "days-off",
  labels: { singular: "Выходной или перерыв", plural: "Выходные и перерывы" },
  defaultSort: "-startsAt",
  admin: {
    useAsTitle: "reason",
    defaultColumns: ["startsAt", "endsAt", "reason"],
    description: "В эти промежутки запись на сайте недоступна.",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "startsAt",
          label: "С",
          type: "date",
          required: true,
          timezone: { defaultTimezone: "Europe/Moscow" },
          admin: {
            date: {
              pickerAppearance: "dayAndTime",
              timeIntervals: 30,
              timeFormat: "HH:mm",
            },
          },
        },
        {
          name: "endsAt",
          label: "По",
          type: "date",
          required: true,
          timezone: { defaultTimezone: "Europe/Moscow" },
          admin: {
            date: {
              pickerAppearance: "dayAndTime",
              timeIntervals: 30,
              timeFormat: "HH:mm",
            },
          },
          validate: (
            value: Date | string | null | undefined,
            { siblingData }: { siblingData: { startsAt?: string } },
          ) =>
            !value ||
            !siblingData.startsAt ||
            new Date(value) > new Date(siblingData.startsAt) ||
            "Окончание должно быть позже начала",
        },
      ],
    },
    {
      name: "reason",
      label: "Причина",
      type: "text",
      required: true,
      defaultValue: "Выходной",
    },
  ],
};
