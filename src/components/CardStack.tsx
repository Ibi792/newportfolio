import type { CSSProperties } from "react";
import { AssetImage } from "@/components/AssetImage";
import { SparkleIcon } from "@/components/SparkleIcon";

/**
 * A scattered cluster of polaroid-style photos with twinkling sparkles
 * tucked in the gaps. Every position is a percentage of the container's
 * own size, so unlike a fixed-pixel fan, it never needs more room than
 * the column it's given — it just reflows at any width, including the
 * squeeze of a two-column grid.
 */
const LAYOUT = [
  { top: "2%", left: "4%", width: "54%", rotate: -6, z: 10 },
  { top: "0%", right: "0%", width: "46%", rotate: 7, z: 20 },
  { bottom: "2%", left: "0%", width: "48%", rotate: 8, z: 20 },
  { bottom: "0%", right: "6%", width: "44%", rotate: -8, z: 10 },
  { top: "32%", left: "28%", width: "46%", rotate: 3, z: 30 },
] as const;

const SPARKLES = [
  { top: "4%", left: "62%", size: 20, delay: 0 },
  { top: "44%", left: "2%", size: 16, delay: 0.9 },
  { bottom: "10%", left: "44%", size: 22, delay: 1.8 },
  { top: "18%", right: "2%", size: 14, delay: 2.6 },
] as const;

type Edges = { top?: string; left?: string; right?: string; bottom?: string };

function edgeStyle(pos: Edges): CSSProperties {
  return { top: pos.top, left: pos.left, right: pos.right, bottom: pos.bottom };
}

export function CardStack({
  photos,
  accent,
}: {
  photos: { src: string; alt: string; label?: string }[];
  accent: string;
}) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {SPARKLES.map((s, i) => (
        <div key={i} className="absolute z-50" style={edgeStyle(s)} aria-hidden>
          <SparkleIcon color="#F7DFA0" size={s.size} delay={s.delay} />
        </div>
      ))}

      {photos.slice(0, LAYOUT.length).map((photo, i) => {
        const pos = LAYOUT[i];
        return (
          <div
            key={photo.src}
            className="absolute aspect-[4/5] overflow-hidden rounded-xl border-[5px] border-white shadow-xl transition-transform duration-300 hover:z-40 hover:scale-110"
            style={{
              ...edgeStyle(pos),
              width: pos.width,
              transform: `rotate(${pos.rotate}deg)`,
              zIndex: pos.z,
            }}
          >
            <AssetImage
              src={photo.src}
              alt={photo.alt}
              color={accent}
              className="h-full w-full object-cover"
              label={photo.label}
            />
          </div>
        );
      })}
    </div>
  );
}
