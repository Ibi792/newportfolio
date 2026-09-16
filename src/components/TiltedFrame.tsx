import type { ReactNode } from "react";

/**
 * Layered/rotated media frame — a colored backing panel offset behind a
 * slightly rotated foreground panel. This is the same visual language as
 * the Fourddo case study hero image, reused everywhere a screenshot or
 * photo appears so the site reads as one system rather than one nice
 * hero shot and plain rectangles everywhere else.
 */
export function TiltedFrame({
  children,
  rotate = -2,
  backdrop = "#00000022",
  className,
}: {
  children: ReactNode;
  rotate?: number;
  backdrop?: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl"
        style={{ backgroundColor: backdrop, transform: `rotate(${-rotate}deg) translate(6px, 6px)` }}
      />
      <div
        className="relative h-full overflow-hidden rounded-2xl shadow-lg"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        {children}
      </div>
    </div>
  );
}
