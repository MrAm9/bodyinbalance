import { Cormorant, Manrope } from "next/font/google";

import { Header } from "@/components/layout/Header";
import { cn } from "@/lib/utils";

import "@/styles/global.css";

const cormorant = Cormorant({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

// Marks that JS runs, so [data-reveal] elements can wait hidden for GSAP instead of flashing
const markJs = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={cn(cormorant.variable, manrope.variable)}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: markJs }} />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
