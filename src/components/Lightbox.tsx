"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

/**
 * Wraps a detail-bearing image (diagrams, screenshots, data dictionaries)
 * so clicking it opens a full-screen view of the source image. Scoped to
 * images where recruiters might actually want to read fine detail, not
 * every image on the page.
 *
 * Renders the overlay through a portal to document.body — a plain fixed
 * div nested inside this tree would otherwise get trapped by the first
 * transformed ancestor (Framer Motion's Reveal wrapper sets an inline
 * `transform`, which creates a new containing block for `position: fixed`
 * descendants), so without the portal the "full screen" view ends up
 * sized to its own content instead of the viewport.
 */
export function Lightbox({ src, alt, children }: { src: string; alt: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full cursor-zoom-in text-left"
        aria-label={`View larger: ${alt}`}
      >
        {children}
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 font-mono text-[11px] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Click to enlarge
        </span>
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 text-3xl font-bold leading-none text-white/80 transition-colors hover:text-white"
              aria-label="Close"
            >
              ×
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </>
  );
}
