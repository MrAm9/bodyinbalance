import Link from "next/link";
import type { ReactNode } from "react";

import { JsonLd } from "@/components/ui/JsonLd";
import { NoBreakWords } from "@/components/ui/NoBreakWords";
import { Reveal } from "@/components/ui/Reveal";
import { WarmGlows } from "@/components/ui/WarmGlows";
import { ru } from "@/i18n/ru";
import { breadcrumbSchema } from "@/lib/schema";
import { typograph } from "@/lib/typograph";

interface Crumb {
  name: string;
  path: string;
}

interface PageHeaderProps {
  siteUrl: string;
  // The current page is the last crumb; the home crumb is added here
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}

export function PageHeader({
  siteUrl,
  crumbs,
  eyebrow,
  title,
  lead,
  children,
}: PageHeaderProps) {
  const trail = [{ name: ru.breadcrumbs.home, path: "/" }, ...crumbs];

  return (
    <header className="relative isolate overflow-hidden bg-night text-cream">
      <JsonLd schema={breadcrumbSchema(siteUrl, trail)} />
      <WarmGlows />
      <Reveal className="relative z-raised mx-auto max-w-6xl px-5 pt-32 pb-16 sm:pt-40 sm:pb-20 lg:px-10">
        <nav aria-label={ru.breadcrumbs.label} data-reveal>
          <ol className="flex flex-wrap gap-x-2 text-xs text-cream-muted">
            {trail.map((crumb, position) => (
              <li key={crumb.path} className="flex gap-2">
                {position < trail.length - 1 ? (
                  <>
                    <Link
                      href={crumb.path}
                      className="transition-colors hover:text-gold-soft"
                    >
                      {crumb.name}
                    </Link>
                    <span aria-hidden>/</span>
                  </>
                ) : (
                  <span aria-current="page">{crumb.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <p
          data-reveal
          className="mt-10 flex items-center gap-3 text-eyebrow text-gold uppercase"
        >
          <span aria-hidden className="h-px w-8 bg-gold" />
          {eyebrow}
        </p>
        <h1
          data-reveal="lines"
          className="mt-5 max-w-4xl font-display text-section font-medium text-balance"
        >
          <NoBreakWords text={title} />
        </h1>
        {lead && (
          <p
            data-reveal
            className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-muted"
          >
            {typograph(lead)}
          </p>
        )}
        {children}
      </Reveal>
    </header>
  );
}
