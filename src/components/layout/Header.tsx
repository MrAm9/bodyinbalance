import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";
import { studio } from "@/data/contacts";
import { bookingHref, mainNavigation } from "@/data/navigation";
import { ru } from "@/i18n/ru";

export function Header() {
  const [mainPhone] = studio.phones;

  return (
    <header className="absolute inset-x-0 top-0 z-header text-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 lg:px-10">
        <Link
          href="/"
          aria-label={ru.header.homeLink}
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo-emblem.png"
            alt=""
            width={52}
            height={48}
            className="size-10 sm:size-12"
          />
          <span className="flex flex-col leading-none whitespace-nowrap">
            <span className="font-display text-lg tracking-wider text-gold-soft uppercase sm:text-xl sm:tracking-widest">
              {studio.name}
            </span>
            <span className="mt-1 text-eyebrow text-cream-muted uppercase">
              {studio.kind}
            </span>
          </span>
        </Link>

        <nav
          aria-label={ru.header.mainNavigation}
          className="hidden items-center gap-8 lg:flex"
        >
          {mainNavigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-cream-muted transition-colors hover:text-gold-soft"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={mainPhone.href}
            className="text-sm text-cream transition-colors hover:text-gold-soft"
          >
            {mainPhone.display}
          </a>
          <Link href={bookingHref} className={buttonVariants()}>
            {ru.header.book}
          </Link>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-sm [&::-webkit-details-marker]:hidden">
            {ru.header.openMenu}
            <span aria-hidden className="flex w-4 flex-col gap-1">
              <span className="h-px bg-current transition-transform group-open:translate-y-1 group-open:rotate-45" />
              <span className="h-px bg-current transition-transform group-open:-translate-y-0.5 group-open:-rotate-45" />
            </span>
          </summary>
          <nav
            aria-label={ru.header.mainNavigation}
            className="absolute right-0 mt-3 flex w-64 flex-col gap-1 rounded-2xl border border-gold/20 bg-night-soft p-3 shadow-2xl shadow-black/40"
          >
            {mainNavigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-cream transition-colors hover:bg-gold/10"
              >
                {link.label}
              </Link>
            ))}
            <a href={mainPhone.href} className="px-4 py-3 text-cream-muted">
              {mainPhone.display}
            </a>
            <Link
              href={bookingHref}
              className={buttonVariants({ className: "mt-1" })}
            >
              {ru.header.book}
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
