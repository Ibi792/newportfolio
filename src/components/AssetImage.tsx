"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { getImageProps } from "next/image";

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
 *
 * `src`/`srcSet` come from Next's image optimizer (Netlify's image CDN in
 * production), so browsers get a resized WebP/AVIF instead of the raw PNG.
 * Pass `sizes` when the image renders narrower than the content column.
 */
export function AssetImage({
  src,
  alt,
  color = "#1E2A3A",
  className,
  style,
  label,
  sizes = "(min-width: 1280px) 1200px, 100vw",
}: {
  src: string;
  alt: string;
  color?: string;
  className?: string;
  style?: CSSProperties;
  label?: string;
  sizes?: string;
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
        className={`flex items-center justify-center overflow-hidden text-center font-mono text-xs leading-tight ${className ?? ""}`}
        style={{ backgroundColor: `${color}22`, border: `1px dashed ${color}66`, color }}
      >
        <span className="break-words">
          {label ?? "Add image at"} <br />
          <span className="break-all opacity-70">{src}</span>
        </span>
      </div>
    );
  }

  const { props: optimized } = getImageProps({ src, alt, fill: true, sizes });

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={optimized.src}
      srcSet={optimized.srcSet}
      sizes={optimized.sizes}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
