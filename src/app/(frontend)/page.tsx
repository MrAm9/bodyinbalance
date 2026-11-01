import { Hero } from "@/components/sections/hero/Hero";
import { pageSeo } from "@/data/seo";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.home);

export default function HomePage() {
  return (
    <main>
      <Hero />
    </main>
  );
}
