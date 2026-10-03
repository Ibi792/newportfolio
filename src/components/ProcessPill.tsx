"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";

/**
 * A clickable Process pill that smooth-scrolls to another section's id.
 * Plain CSS smooth-scroll (an <a href="#id">) computes its scroll
 * distance once at the start — if a lazy-loaded image further down the
 * page finishes loading mid-scroll and shifts the layout, it lands
 * short of the real target. On a long case study the scroll can pass
 * several such images in sequence, so one fixed-delay correction isn't
 * always enough — instead this re-corrects as each still-loading image
 * on the page actually resolves (bounded by a safety timeout), without
 * giving up lazy-loading.
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

    const scroll = () => el.scrollIntoView({ behavior: "smooth", block: "start" });
    scroll();

    const pending = Array.from(document.images).filter((img) => !img.complete);
    if (pending.length === 0) return;

    let remaining = pending.length;
    const onSettle = () => {
      remaining -= 1;
      scroll();
      if (remaining <= 0) cleanup();
    };
    const cleanup = () => {
      pending.forEach((img) => {
        img.removeEventListener("load", onSettle);
        img.removeEventListener("error", onSettle);
      });
      scroll();
    };
    pending.forEach((img) => {
      img.addEventListener("load", onSettle, { once: true });
      img.addEventListener("error", onSettle, { once: true });
    });
    window.setTimeout(cleanup, 4000);
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
