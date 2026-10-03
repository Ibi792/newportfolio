import { AssetImage } from "@/components/AssetImage";
import { SparkleIcon } from "@/components/SparkleIcon";

/**
 * A grounded cluster of polaroid-style photos sitting on a tinted "board"
 * instead of floating loose on the page background. Each photo is fully
 * visible (nothing overlaps or hides behind another), just lightly tilted
 * for a candid feel. Rows wrap via flexbox and are each centered, so an
 * uneven last row (5 photos = 3 + 2) sits centered under the row above.
 */
const ROTATIONS = [-6, 5, -3, 6, -5, 4] as const;

const SPARKLES = [
  { top: "-6%", left: "4%", size: 18, delay: 0 },
  { top: "-6%", left: "87%", size: 16, delay: 1.2 },
  { top: "95%", left: "2%", size: 16, delay: 2.1 },
  { top: "95%", left: "89%", size: 18, delay: 0.6 },
] as const;

export function CardStack({
  photos,
  accent,
}: {
  photos: { src: string; alt: string; label?: string }[];
  accent: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {SPARKLES.map((s, i) => (
        <div key={i} className="absolute z-10" style={{ top: s.top, left: s.left }} aria-hidden>
          <SparkleIcon color="#F7DFA0" size={s.size} delay={s.delay} />
        </div>
      ))}

      <div
        className="rounded-[2rem] border-2 p-5 shadow-inner sm:p-7"
        style={{ backgroundColor: `${accent}29`, borderColor: `${accent}66` }}
      >
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className="w-[31%] min-w-[108px] aspect-[4/5] overflow-hidden rounded-xl border-[4px] border-white shadow-lg transition-transform duration-300 hover:z-20 hover:scale-105"
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
    </div>
  );
}
