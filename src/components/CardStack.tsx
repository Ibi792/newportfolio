import { AssetImage } from "@/components/AssetImage";
import { SparkleIcon } from "@/components/SparkleIcon";

/**
 * A clean, evenly-sized photo grid — no background panel, no per-photo
 * tilt. Rows wrap via flexbox and are each centered, so an uneven last
 * row (5 photos = 3 + 2) sits centered under the row above instead of
 * trailing off to one side or leaving an empty grid cell.
 */
const SPARKLES = [
  { top: "-8%", left: "4%", size: 16, delay: 0 },
  { top: "-8%", left: "88%", size: 14, delay: 1.2 },
  { top: "102%", left: "46%", size: 16, delay: 2.1 },
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

      <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="w-[30%] min-w-[110px] aspect-[4/5] overflow-hidden rounded-xl border-4 border-white shadow-md transition-transform duration-300 hover:scale-105"
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
