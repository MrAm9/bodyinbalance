"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const LOAD_START_DELAY = 0.2;
const LOAD_STEP = 0.14;

interface RevealProps {
  children: ReactNode;
  className?: string;
  // "load" plays once in document order, "scroll" plays each element when it enters the viewport
  trigger?: "load" | "scroll";
}

function scrollTriggerFor(target: HTMLElement): ScrollTrigger.Vars {
  return { trigger: target, start: "top 88%", once: true };
}

// [data-reveal="lines"] splits text into masked lines, "photo" settles a picture into place, any other value fades up
export function Reveal({ children, className, trigger = "load" }: RevealProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(targets, { visibility: "visible" });

      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        targets.forEach((target, order) => {
          const timing =
            trigger === "load"
              ? { delay: LOAD_START_DELAY + order * LOAD_STEP }
              : { scrollTrigger: scrollTriggerFor(target) };

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
                  ...timing,
                });
                if (finished) linesTween.progress(1);
              },
            });
            return;
          }

          if (target.dataset.reveal === "photo") {
            gsap.from(target, {
              scale: 1.06,
              autoAlpha: 0,
              duration: 1.6,
              ease: "power2.out",
              ...timing,
            });
            return;
          }

          gsap.from(target, {
            y: 28,
            autoAlpha: 0,
            duration: 1.1,
            ease: "power3.out",
            ...timing,
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
