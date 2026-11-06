import "server-only";

import config from "@payload-config";
import { getPayload } from "payload";

import type { Service } from "@/payload-types";

export async function getActiveServices(): Promise<Service[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "services",
    where: { isActive: { equals: true } },
    sort: "order",
    limit: 50,
    depth: 0,
  });
  return docs;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "services",
    where: { slug: { equals: slug }, isActive: { equals: true } },
    limit: 1,
    depth: 0,
  });
  return docs.at(0) ?? null;
}
