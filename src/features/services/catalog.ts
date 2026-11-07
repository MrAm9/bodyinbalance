import { type Service, services } from "@/data/services";

export function getServiceBySlug(slug: string): Service | null {
  return services.find((service) => service.slug === slug) ?? null;
}

export function otherServices(current: Service): Service[] {
  return services.filter((service) => service.slug !== current.slug);
}
