"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";

/**
 * A clickable Process pill that smooth-scrolls to another section's id.
 * Plain CSS smooth-scroll (an <a href="#id">) computes its scroll
 * distance once at the start — if a lazy-loaded image further down the
 * page finishes loading mid-scroll and shifts the layout, it can land
 * short of the real target. A quick corrective re-scroll after the
 * first one settles fixes that without giving up lazy-loading.
 */
export function ProcessPill({
  target,
  accent,
  children,
}: {
  target: string;
  accent: string;
  children: ReactNode;
}) {
  function handleClick(e: MouseEvent) {
    e.preventDefault();
    const el = document.getElementById(target);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 700);
  }

  return (
    <a
      href={`#${target}`}
      onClick={handleClick}
      className="group relative flex items-center justify-center overflow-hidden rounded-full border px-4 py-3 text-center font-display text-sm font-semibold italic"
      style={{ borderColor: `${accent}55`, color: accent }}
    >
      <span
        className="absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
        style={{ backgroundColor: accent }}
        aria-hidden
      />
      <span
        className="relative z-10 inline-flex items-center gap-2 transition-colors duration-300 group-hover:[color:var(--pill-hover-ink)]"
        style={{ "--pill-hover-ink": "#FFFFFF" } as CSSProperties}
      >
        {children}
      </span>
    </a>
  );
}
