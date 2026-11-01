import config from "@payload-config";
import { getPayload } from "payload";

import { servicesDraft } from "@/data/services-draft";

// Run with `npm run seed`. Matches services by slug, so it updates instead of duplicating
const payload = await getPayload({ config });

for (const service of servicesDraft) {
  const existing = await payload.find({
    collection: "services",
    where: { slug: { equals: service.slug } },
    limit: 1,
  });
  const current = existing.docs.at(0);

  if (current) {
    await payload.update({
      collection: "services",
      id: current.id,
      data: service,
    });
    payload.logger.info(`Обновлён: ${service.title}`);
  } else {
    await payload.create({ collection: "services", data: service });
    payload.logger.info(`Создан: ${service.title}`);
  }
}

process.exit(0);
