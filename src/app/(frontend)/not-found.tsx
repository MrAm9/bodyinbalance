import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";
import { WarmGlows } from "@/components/ui/WarmGlows";
import { notFoundPage } from "@/data/pages";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-svh items-center overflow-hidden bg-night text-cream">
      <WarmGlows />
      <div className="relative z-raised mx-auto max-w-3xl px-5 py-32 text-center">
        <p className="font-display text-hero text-gold-soft italic">404</p>
        <h1 className="mt-6 font-display text-section">{notFoundPage.title}</h1>
        <p className="mx-auto mt-6 max-w-md text-cream-muted">
          {notFoundPage.text}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className={buttonVariants({ size: "lg" })}>
            {notFoundPage.homeAction}
          </Link>
          <Link
            href="/massazh/"
            className={buttonVariants({ tone: "outline", size: "lg" })}
          >
            {notFoundPage.servicesAction}
          </Link>
        </div>
      </div>
    </main>
  );
}
