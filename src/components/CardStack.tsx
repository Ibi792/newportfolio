import type { CSSProperties } from "react";
import { AssetImage } from "@/components/AssetImage";

/**
 * A fanned hand-of-cards photo stack. Positions are derived from index so
 * any number of photos fans out symmetrically with the middle one on top
 * — no per-photo tuning needed when photos are added or removed.
 */
export function CardStack({
  photos,
  accent,
}: {
  photos: { src: string; alt: string; label?: string }[];
  accent: string;
}) {
  const center = (photos.length - 1) / 2;

  return (
    <div className="relative mx-auto h-[380px] w-[280px] sm:h-[420px] sm:w-[320px]">
      {photos.map((photo, i) => {
        const offset = i - center;
        return (
          <div
            key={photo.src}
            className="fan-card absolute inset-0 hover:z-50"
            style={
              {
                "--fan-transform": `translateX(${offset * 34}px) rotate(${offset * 6}deg)`,
                zIndex: Math.round(photos.length - Math.abs(offset)),
              } as CSSProperties
            }
          >
            <div className="h-full w-full overflow-hidden rounded-2xl shadow-2xl" style={{ border: `4px solid ${accent}` }}>
              <AssetImage
                src={photo.src}
                alt={photo.alt}
                color={accent}
                className="h-full w-full object-cover"
                label={photo.label}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
