"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

interface MobileMenuProps {
  children: ReactNode;
}

// Client-side navigation keeps the page mounted, so the open <details> has to be closed when the route changes
export function MobileMenu({ children }: MobileMenuProps) {
  const menu = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    menu.current?.removeAttribute("open");
  }, [pathname]);

  return (
    <details ref={menu} className="group relative lg:hidden">
      {children}
    </details>
  );
}
