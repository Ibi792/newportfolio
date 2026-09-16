"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Renders an image from /public if it exists; otherwise falls back to a
 * labeled placeholder block in the given color. This lets the whole site
 * work today with zero real assets, and start rendering real screenshots
 * the moment a file is dropped into the matching /public path — no code
 * changes needed.
 *
 * The mount-time `complete`/`naturalWidth` check exists because a 404 on a
 * fast connection can fire the native `error` event before React finishes
 * hydrating and attaches its listener — that event doesn't bubble, so it
 * would otherwise be missed and the broken image would just sit there.
 */
export function AssetImage({
  src,
  alt,
  color = "#1E2A3A",
  className,
  label,
}: {
  src: string;
  alt: string;
  color?: string;
  className?: string;
  label?: string;
}) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, [src]);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center text-center font-mono text-xs ${className ?? ""}`}
        style={{ backgroundColor: `${color}22`, border: `1px dashed ${color}66`, color }}
      >
        {label ?? "Add image at"} <br />
        {src}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
