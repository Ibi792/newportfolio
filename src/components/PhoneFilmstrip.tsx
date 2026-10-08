"use client";

import { useEffect, useRef, useState } from "react";
import { AssetImage } from "@/components/AssetImage";
import { paper } from "@/lib/content";

/**
 * A horizontally scrolling row of phone screenshots with subtle left/right
 * arrows, used where a flow has too many screens to read comfortably as a
 * static grid. Arrows scroll by one tile and disable themselves at each
 * end so the strip never implies more content than it has.
 */
export function PhoneFilmstrip({ images, accent }: { images: { src: string; label: string }[]; accent: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function updateEdges() {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  }

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  function scrollByTile(direction: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const tile = el.querySelector<HTMLElement>("[data-tile]");
    const step = (tile?.offsetWidth ?? 220) + 24;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <div className="relative mt-6">
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x proximity" }}
      >
        {images.map((img) => (
          <div
            key={img.src}
            data-tile
            className="w-[220px] shrink-0"
            style={{ scrollSnapAlign: "start" }}
          >
            <div
              className="overflow-hidden rounded-[1.75rem] border-[6px] shadow-md"
              style={{ borderColor: "#1C1C1E" }}
            >
              <AssetImage src={img.src} alt={img.label} color={accent} className="block h-auto w-full" label={img.label} />
            </div>
            <p className="mt-2 text-center font-mono text-xs font-semibold uppercase tracking-wide opacity-70">
              {img.label}
            </p>
          </div>
        ))}
      </div>

      {!atStart && (
        <button
          type="button"
          onClick={() => scrollByTile(-1)}
          aria-label="Scroll left"
          className="absolute left-0 top-[88px] -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border shadow-md transition-opacity hover:opacity-100"
          style={{ backgroundColor: paper, borderColor: `${accent}33`, color: accent, opacity: 0.85 }}
        >
          ‹
        </button>
      )}
      {!atEnd && (
        <button
          type="button"
          onClick={() => scrollByTile(1)}
          aria-label="Scroll right"
          className="absolute right-0 top-[88px] translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border shadow-md transition-opacity hover:opacity-100"
          style={{ backgroundColor: paper, borderColor: `${accent}33`, color: accent, opacity: 0.85 }}
        >
          ›
        </button>
      )}
    </div>
  );
}
