import type { Service } from "@/payload-types";

type ServiceOption = Service["options"][number];

export function lowestPrice(service: Pick<Service, "options">): number {
  return Math.min(...service.options.map((option) => option.priceRub));
}

// When every service has the same durations and prices, the menu shows one shared price band
export function sharedPriceList(
  services: Pick<Service, "options">[],
): ServiceOption[] | null {
  const first = services.at(0);
  if (!first) return null;

  const signature = (options: ServiceOption[]) =>
    options
      .map(
        (option) =>
          `${String(option.durationMinutes)}:${String(option.priceRub)}`,
      )
      .join("|");
  const firstSignature = signature(first.options);

  return services.every(
    (service) => signature(service.options) === firstSignature,
  )
    ? first.options
    : null;
}

export function formatRub(amount: number): string {
  return `${new Intl.NumberFormat("ru-RU").format(amount)} ₽`;
}
