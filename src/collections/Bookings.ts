import type { CollectionConfig } from "payload";

import { addMinutes } from "@/lib/add-minutes";
import type { Booking } from "@/payload-types";

const studioTimezone = "Europe/Moscow";

export const Bookings: CollectionConfig = {
  slug: "bookings",
  labels: { singular: "Запись", plural: "Записи" },
  defaultSort: "-startsAt",
  admin: {
    useAsTitle: "clientName",
    defaultColumns: ["startsAt", "clientName", "phone", "service", "status"],
  },
  hooks: {
    beforeChange: [
      // A partial update (e.g. only the status) does not resend start and duration
      ({
        data,
        originalDoc,
      }: {
        data: Partial<Booking>;
        originalDoc?: Booking;
      }) => {
        const startsAt = data.startsAt ?? originalDoc?.startsAt;
        const durationMinutes =
          data.durationMinutes ?? originalDoc?.durationMinutes;
        if (startsAt !== undefined && durationMinutes !== undefined) {
          data.endsAt = addMinutes(startsAt, durationMinutes);
        }
        return data;
      },
    ],
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "startsAt",
          label: "Начало",
          type: "date",
          required: true,
          index: true,
          timezone: { defaultTimezone: studioTimezone },
          admin: {
            date: {
              pickerAppearance: "dayAndTime",
              timeIntervals: 30,
              timeFormat: "HH:mm",
            },
          },
        },
        {
          name: "durationMinutes",
          label: "Длительность, мин",
          type: "number",
          required: true,
          min: 15,
          max: 180,
          defaultValue: 60,
        },
      ],
    },
    {
      name: "endsAt",
      label: "Окончание",
      type: "date",
      index: true,
      admin: {
        readOnly: true,
        description: "Считается автоматически: начало плюс длительность.",
        date: { pickerAppearance: "dayAndTime", timeFormat: "HH:mm" },
      },
    },
    {
      name: "service",
      label: "Вид массажа",
      type: "relationship",
      relationTo: "services",
      required: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "clientName",
          label: "Имя клиента",
          type: "text",
          required: true,
        },
        { name: "phone", label: "Телефон", type: "text", required: true },
      ],
    },
    { name: "comment", label: "Комментарий клиента", type: "textarea" },
    {
      name: "status",
      label: "Статус",
      type: "select",
      required: true,
      defaultValue: "new",
      index: true,
      options: [
        { label: "Новая", value: "new" },
        { label: "Подтверждена", value: "confirmed" },
        { label: "Отменена", value: "cancelled" },
        { label: "Завершена", value: "done" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "source",
      label: "Откуда",
      type: "select",
      required: true,
      defaultValue: "admin",
      options: [
        { label: "С сайта", value: "site" },
        { label: "Добавлена вручную", value: "admin" },
      ],
      admin: { position: "sidebar", readOnly: true },
    },
    {
      name: "consentAt",
      label: "Согласие на обработку ПД",
      type: "date",
      admin: {
        position: "sidebar",
        readOnly: true,
        date: {
          pickerAppearance: "dayAndTime",
          timeFormat: "dd.MM.yyyy HH:mm",
        },
      },
    },
  ],
};
