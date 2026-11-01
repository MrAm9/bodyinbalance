import type { GlobalConfig } from "payload";

const timePattern = /^([01]\d|2[0-3]):[0-5]\d$/;

const validateTime = (value: string | null | undefined) =>
  (typeof value === "string" && timePattern.test(value)) ||
  "Время в формате ЧЧ:ММ, например 10:00";

export const weekdayOptions = [
  { label: "Понедельник", value: "1" },
  { label: "Вторник", value: "2" },
  { label: "Среда", value: "3" },
  { label: "Четверг", value: "4" },
  { label: "Пятница", value: "5" },
  { label: "Суббота", value: "6" },
  { label: "Воскресенье", value: "0" },
] as const;

export const Schedule: GlobalConfig = {
  slug: "schedule",
  label: "Расписание и правила записи",
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "opensAt",
          label: "Начало приёма",
          type: "text",
          required: true,
          defaultValue: "10:00",
          validate: validateTime,
        },
        {
          name: "closesAt",
          label: "Последний сеанс заканчивается в",
          type: "text",
          required: true,
          defaultValue: "22:00",
          validate: validateTime,
        },
      ],
    },
    {
      name: "workingWeekdays",
      label: "Рабочие дни",
      type: "select",
      hasMany: true,
      required: true,
      defaultValue: weekdayOptions.map((weekday) => weekday.value),
      options: [...weekdayOptions],
    },
    {
      type: "row",
      fields: [
        {
          name: "bufferMinutes",
          label: "Перерыв между сеансами, мин",
          type: "number",
          required: true,
          defaultValue: 15,
          min: 0,
        },
        {
          name: "slotStepMinutes",
          label: "Шаг времени записи, мин",
          type: "number",
          required: true,
          defaultValue: 30,
          min: 15,
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "minLeadMinutes",
          label: "Запись не позже чем за, мин",
          type: "number",
          required: true,
          defaultValue: 30,
          min: 0,
        },
        {
          name: "horizonDays",
          label: "Запись вперёд не дальше чем на, дней",
          type: "number",
          required: true,
          defaultValue: 30,
          min: 1,
        },
      ],
    },
    {
      name: "cancellationRule",
      label: "Правило отмены (показывается клиенту)",
      type: "textarea",
      required: true,
      defaultValue:
        "Отменить или перенести запись можно не позже чем за 3 часа по телефону.",
    },
  ],
};
