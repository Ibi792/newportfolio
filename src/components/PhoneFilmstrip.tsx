"use client";

import { useEffect, useRef, useState } from "react";
import { AssetImage } from "@/components/AssetImage";
import { Lightbox } from "@/components/Lightbox";

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * A horizontally scrolling row of phone screenshots with big, always-visible
 * left/right arrow buttons flanking the strip (rather than floating over
 * the images, where they were easy to miss). Arrows dim and stop responding
 * at each end instead of disappearing, so the strip never shifts layout.
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

  const arrowClass =
    "flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-lg transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:scale-100";

  return (
    <div className="mt-6 flex items-center gap-3">
      <button
        type="button"
        onClick={() => scrollByTile(-1)}
        disabled={atStart}
        aria-label="Scroll left"
        className={arrowClass}
        style={{ backgroundColor: accent, color: "#FFFFFF" }}
      >
        <ChevronIcon direction="left" />
      </button>

      <div
        ref={trackRef}
        className="flex flex-1 gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x proximity" }}
      >
        {images.map((img) => (
          <div key={img.src} data-tile className="w-[220px] shrink-0" style={{ scrollSnapAlign: "start" }}>
            <Lightbox src={img.src} alt={img.label}>
              <div
                className="overflow-hidden rounded-[1.75rem] border-[6px] shadow-md"
                style={{ borderColor: "#1C1C1E" }}
              >
                <AssetImage src={img.src} alt={img.label} color={accent} className="block h-auto w-full" label={img.label} />
              </div>
            </Lightbox>
            <p className="mt-2 text-center font-mono text-xs font-semibold uppercase tracking-wide opacity-70">
              {img.label}
            </p>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByTile(1)}
        disabled={atEnd}
        aria-label="Scroll right"
        className={arrowClass}
        style={{ backgroundColor: accent, color: "#FFFFFF" }}
      >
        <ChevronIcon direction="right" />
      </button>
    </div>
  );
}
