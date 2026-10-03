import { AssetImage } from "@/components/AssetImage";
import { SparkleIcon } from "@/components/SparkleIcon";

/**
 * A loose scattered grid of polaroid-style photos — each one fully visible
 * (nothing overlaps or hides behind another), just lightly tilted at
 * different angles for a candid "tossed on the table" feel. Rows wrap via
 * flexbox and are each centered, so an uneven last row (5 photos = 3 + 2)
 * sits centered under the row above instead of trailing off to one side.
 */
const ROTATIONS = [-6, 5, -3, 6, -5, 4] as const;

const SPARKLES = [
  { top: "-7%", left: "2%", size: 16, delay: 0 },
  { top: "-7%", left: "90%", size: 14, delay: 1.2 },
  { top: "66%", left: "0%", size: 18, delay: 2.1 },
  { top: "66%", left: "88%", size: 16, delay: 0.6 },
] as const;

export function CardStack({
  photos,
  accent,
}: {
  photos: { src: string; alt: string; label?: string }[];
  accent: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-lg px-3 py-3">
      {SPARKLES.map((s, i) => (
        <div key={i} className="absolute z-10" style={{ top: s.top, left: s.left }} aria-hidden>
          <SparkleIcon color="#F7DFA0" size={s.size} delay={s.delay} />
        </div>
      ))}

      <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className="w-[28%] min-w-[96px] aspect-[4/5] overflow-hidden rounded-xl border-[4px] border-white shadow-lg transition-transform duration-300 hover:z-20 hover:scale-105"
            style={{ transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)` }}
          >
            <AssetImage
              src={photo.src}
              alt={photo.alt}
              color={accent}
              className="h-full w-full object-cover"
              label={photo.label}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
