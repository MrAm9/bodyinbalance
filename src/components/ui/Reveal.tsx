"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(useGSAP, SplitText);

const START_DELAY = 0.2;
const STEP = 0.14;

interface RevealProps {
  children: ReactNode;
  className?: string;
}

// Animates [data-reveal] descendants in document order: "lines" splits text into masked lines, any other value fades up
export function Reveal({ children, className }: RevealProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(targets, { visibility: "visible" });

      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        targets.forEach((target, order) => {
          const delay = START_DELAY + order * STEP;

          if (target.dataset.reveal === "lines") {
            let linesTween: gsap.core.Tween | undefined;
            SplitText.create(target, {
              type: "lines",
              mask: "lines",
              autoSplit: true,
              // autoSplit re-splits on resize; the new lines must not replay an intro that already finished
              onSplit: (split) => {
                const finished = linesTween?.progress() === 1;
                linesTween?.kill();
                linesTween = gsap.from(split.lines, {
                  yPercent: 110,
                  duration: 1.2,
                  stagger: 0.12,
                  ease: "power4.out",
                  delay,
                });
                if (finished) linesTween.progress(1);
              },
            });
            return;
          }

          gsap.from(target, {
            y: 28,
            autoAlpha: 0,
            duration: 1.1,
            ease: "power3.out",
            delay,
          });
        });
      });
    },
    { scope },
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
