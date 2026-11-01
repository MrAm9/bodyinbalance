import Image from "next/image";
import Link from "next/link";

import { studio } from "@/data/contacts";
import {
  bookingHref,
  legalNavigation,
  mainNavigation,
} from "@/data/navigation";
import { ru } from "@/i18n/ru";

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-night-soft text-cream-muted">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-5">
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
              className="size-12"
            />
            <span className="font-display text-xl tracking-widest text-gold-soft uppercase">
              {studio.name}
            </span>
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            {studio.kind}. {studio.address.city}, {studio.address.street}, м.{" "}
            {studio.address.metro}.
          </p>
        </div>

        <nav aria-label={ru.footer.navigation} className="md:col-span-3">
          <ul className="flex flex-col gap-3 text-sm">
            {mainNavigation.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-gold-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={bookingHref}
                className="text-gold-soft transition-colors hover:text-cream"
              >
                {ru.header.book}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-3 text-sm md:col-span-4">
          <p>
            {studio.hours.days}, {studio.hours.opens}–{studio.hours.closes}
          </p>
          {studio.phones.map((phone) => (
            <a
              key={phone.href}
              href={phone.href}
              className="font-display text-xl text-cream transition-colors hover:text-gold-soft"
            >
              {phone.display}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>{ru.footer.warning}</p>
          {/* TODO(content): legal entity name, INN and OGRN once the owner sends them */}
          <p className="flex flex-wrap gap-x-4">
            <span>
              © {new Date().getFullYear()} {studio.name}
            </span>
            {legalNavigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
