import { AssetImage } from "@/components/AssetImage";
import { SparkleIcon } from "@/components/SparkleIcon";

/**
 * A clean, evenly-sized photo grid — no background panel, no per-photo
 * tilt. Two columns, with rows computed from the photo count (a plain
 * 2x2 for four photos). On mobile each tile keeps a fixed 4:5 aspect
 * ratio; from md up, the grid instead stretches to fill whatever height
 * its parent grid cell is given — matching the text column beside it —
 * with each row sharing that height equally.
 */
const SPARKLES = [
  { top: "-8%", left: "4%", size: 16, delay: 0 },
  { top: "-8%", left: "88%", size: 14, delay: 1.2 },
  { top: "102%", left: "46%", size: 16, delay: 2.1 },
] as const;

const COLUMNS = 2;

export function CardStack({
  photos,
  accent,
}: {
  photos: { src: string; alt: string; label?: string }[];
  accent: string;
}) {
  const rows = Math.ceil(photos.length / COLUMNS);

  return (
    <div className="relative mx-auto w-full max-w-xl md:h-full">
      {SPARKLES.map((s, i) => (
        <div key={i} className="absolute z-10" style={{ top: s.top, left: s.left }} aria-hidden>
          <SparkleIcon color="#F7DFA0" size={s.size} delay={s.delay} />
        </div>
      ))}

      <div
        className="grid gap-4 sm:gap-5 md:h-full"
        style={{
          gridTemplateColumns: `repeat(${COLUMNS}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="aspect-[4/5] overflow-hidden rounded-xl border-4 border-white shadow-md transition-transform duration-300 hover:scale-105 md:aspect-auto"
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
