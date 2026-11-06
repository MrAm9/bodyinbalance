import "server-only";

import config from "@payload-config";
import { getPayload } from "payload";

import type { StudioInfo } from "@/payload-types";

export async function getStudioInfo(): Promise<StudioInfo> {
  const payload = await getPayload({ config });
  return payload.findGlobal({ slug: "studio-info", depth: 1 });
}
