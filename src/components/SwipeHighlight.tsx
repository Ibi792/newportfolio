"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { paper, paperInk } from "@/lib/content";

// WCAG relative luminance, used to decide whether the swept-in block needs
// light or dark text on top of it — accents range from About's pale gold
// to case studies' dark inks, so a fixed text color would fail contrast
// on one end or the other.
function relativeLuminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const [lr, lg, lb] = [r, g, b].map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;
}

/**
 * Inline highlight chip for {{double brace}} copy: starts as plain
 * inherited text, then on scroll-into-view a solid accent block sweeps
 * in behind it and the text flips to whichever of paper/paperInk contrasts
 * with that accent. box-decoration-break lets the sweep/chip render
 * correctly per line if the phrase wraps.
 */
export function SwipeHighlight({ children, accent }: { children: string; accent: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [revealed, setRevealed] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  const isRevealed = revealed || shouldReduceMotion === true;
  const revealedTextColor = relativeLuminance(accent) > 0.4 ? paperInk : paper;

  return (
    <span
      ref={ref}
      className="-mx-1 rounded-[3px] px-1"
      style={
        {
          backgroundImage: `linear-gradient(${accent}, ${accent})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: isRevealed ? "100% 100%" : "0% 100%",
          color: isRevealed ? revealedTextColor : "inherit",
          transition: "background-size 0.5s ease-out, color 0.4s ease-out 0.1s",
          boxDecorationBreak: "clone",
          WebkitBoxDecorationBreak: "clone",
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
}
