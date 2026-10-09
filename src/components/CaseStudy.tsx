import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { AssetImage } from "@/components/AssetImage";
import { TiltedFrame } from "@/components/TiltedFrame";
import { ProcessPill } from "@/components/ProcessPill";
import { Lightbox } from "@/components/Lightbox";
import { PhoneFilmstrip } from "@/components/PhoneFilmstrip";
import {
  footerText,
  paper,
  paperInk,
  projects,
  themes,
  type CaseStudyData,
  type CaseStudyImage,
  type CaseStudySection,
  type InterleavedItem,
} from "@/lib/content";
import { handDrawnFont } from "@/lib/fonts";
import { renderHighlighted } from "@/lib/highlight";

// Swatch colors for the "Palette Pulled From the Art" demo row, named
// straight from that card's own copy (Lofistory's Design Decisions).
const LOFISTORY_PALETTE_DEMO = ["#F0664F", "#7B93D1", "#9CAF88", "#F7DFA0", "#4B2142"];

// Turns a section heading into the #anchor a Process pill links to.
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function CaseStudy({ data, slug }: { data: CaseStudyData; slug: string }) {
  const { heroBg, heroText, accent, footer } = data;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = currentIndex === -1 ? undefined : projects[(currentIndex + 1) % projects.length];

  return (
    <div id="top" style={{ backgroundColor: paper, color: paperInk }} className="min-h-screen">
      <Nav bg={heroBg} ink={heroText} />

      <section style={{ backgroundColor: heroBg, color: heroText }} className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-wide opacity-80">{data.eyebrow}</p>
            <h1 className="mt-3 font-display text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
              {data.title}
            </h1>

            <div className="mt-8 flex flex-wrap gap-8 font-mono text-sm">
              {data.meta.map((m) => (
                <div key={m.label} className="min-w-[120px]">
                  <p className="opacity-70">{m.label.toUpperCase()}</p>
                  <p className="font-semibold">{m.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <TiltedFrame rotate={-2} backdrop={`${heroText}33`} className="mt-10">
              <AssetImage
                src={data.heroImage}
                alt={data.title}
                color={heroText}
                className="h-80 w-full object-cover sm:h-[420px]"
                style={{ objectPosition: data.heroImagePosition ?? "center" }}
                label="Add hero image"
              />
            </TiltedFrame>
          </Reveal>

          {data.shippedProductUrl && (
            <Reveal delay={0.15}>
              <a
                href={data.shippedProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 flex items-center justify-between gap-4 rounded-lg px-8 py-6 font-mono text-sm font-semibold shadow-md transition hover:scale-[1.01] hover:brightness-95"
                style={{ backgroundColor: paper, color: accent }}
              >
                {data.shippedProductLabel ?? "View Project"}
                <span aria-hidden>↗</span>
              </a>
            </Reveal>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
        {data.sections.map((section, i) => {
          const heading = "heading" in section ? section.heading : undefined;
          return (
            <Reveal
              key={i}
              id={heading ? slugify(heading) : undefined}
              className={`scroll-mt-28${i === 0 ? "" : " mt-24"}`}
            >
              <SectionBlock section={section} accent={accent} />
            </Reveal>
          );
        })}

        {nextProject && (
          <Reveal className="mt-24 text-center">
            <Link href={`/projects/${nextProject.slug}`} className="group inline-flex items-center gap-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wide opacity-50">
                Next Case Study
              </span>
              <span className="underline-hover font-display font-bold" style={{ color: accent }}>
                {nextProject.title}
              </span>
              <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1" style={{ color: accent }}>
                →
              </span>
            </Link>
          </Reveal>
        )}

        <p className="mt-16 text-center">
          <Link href="#top" className="underline-hover font-display font-bold" style={{ color: accent }}>
            Back to top :D
          </Link>
        </p>
      </div>

      <Footer bg={footer} text={footerText} tagline={data.tagline ?? themes.caseStudy.tagline} />
    </div>
  );
}

// A paragraph list where a plain string is prose and `{ image }` drops a
// full-width image inline at that point, instead of every image for a
// section being dumped together after all the text. The first item sits
// mt-8 below the heading like every other section; later items get more
// room (mt-10) so the prose/image transition reads as a clear beat.
function InterleavedCopy({ items, accent }: { items: InterleavedItem[]; accent: string }) {
  return (
    <>
      {items.map((item, i) => {
        const spacing = i === 0 ? "mt-8" : "mt-10";
        if (typeof item === "string") {
          return (
            <p key={i} className={`${spacing} font-mono text-base leading-relaxed sm:text-lg`}>
              {renderHighlighted(item, accent)}
            </p>
          );
        }
        if ("row" in item) {
          return (
            <div key={i} className={`${spacing} flex flex-wrap gap-4`}>
              {item.row.map((img) => (
                <div
                  key={img.src}
                  className="min-w-[220px] max-w-[280px] flex-1 rounded-2xl border bg-white p-3"
                  style={{ borderColor: `${accent}33` }}
                >
                  <Lightbox src={img.src} alt={img.label}>
                    <AssetImage
                      src={img.src}
                      alt={img.label}
                      color={accent}
                      className="h-auto w-full object-contain"
                      label={img.label}
                    />
                  </Lightbox>
                </div>
              ))}
            </div>
          );
        }
        return (
          <div key={i} className={`${spacing} rounded-2xl border bg-white p-3`} style={{ borderColor: `${accent}33` }}>
            <Lightbox src={item.image.src} alt={item.image.label}>
              <AssetImage
                src={item.image.src}
                alt={item.image.label}
                color={accent}
                className="h-auto max-h-[90vh] w-full object-contain"
                label={item.image.label}
              />
            </Lightbox>
          </div>
        );
      })}
    </>
  );
}

function SectionHeading({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <h2 className="font-display text-2xl font-black uppercase tracking-tight sm:text-3xl" style={{ color: accent }}>
      {children}
    </h2>
  );
}

function ImageGrid({
  images,
  accent,
}: {
  images: CaseStudyImage[];
  accent: string;
}) {
  const hasCroppedImages = images.some((img) => !img.fit);

  // Consecutive `fit: "row"` images are grouped into one flex row (e.g. a
  // few smaller desktop screenshots sitting side by side under one big
  // feature shot) rather than each claiming a full grid row on its own.
  const elements: React.ReactNode[] = [];
  let rowBuffer: typeof images = [];
  const flushRow = () => {
    if (rowBuffer.length === 0) return;
    elements.push(
      <div key={`row-${rowBuffer[0].src}`} className="sm:col-span-2 flex flex-wrap items-start gap-4">
        {rowBuffer.map((img) =>
          img.bare ? (
            <div key={img.src} className="w-full max-w-[180px]">
              <Lightbox src={img.src} alt={img.label}>
                <AssetImage
                  src={img.src}
                  alt={img.label}
                  color={accent}
                  className="h-auto w-full object-contain"
                  label={img.label}
                />
              </Lightbox>
            </div>
          ) : (
            <div
              key={img.src}
              className="min-w-[220px] flex-1 rounded-2xl border bg-white p-3"
              style={{ borderColor: `${accent}33` }}
            >
              <Lightbox src={img.src} alt={img.label}>
                <AssetImage
                  src={img.src}
                  alt={img.label}
                  color={accent}
                  className="h-auto w-full object-contain"
                  label={img.label}
                />
              </Lightbox>
            </div>
          )
        )}
      </div>
    );
    rowBuffer = [];
  };

  images.forEach((img) => {
    if (img.fit === "row") {
      rowBuffer.push(img);
      return;
    }
    flushRow();

    if (img.fit === "feature") {
      elements.push(
        <div key={img.src} className="sm:col-span-2 my-2">
          <TiltedFrame rotate={-1.5} backdrop={`${accent}22`}>
            <AssetImage
              src={img.src}
              alt={img.label}
              color={accent}
              className="h-auto max-h-[85vh] w-full object-contain"
              label={img.label}
            />
          </TiltedFrame>
        </div>
      );
      return;
    }

    if (img.fit === "contain") {
      elements.push(
        <div
          key={img.src}
          className="sm:col-span-2 rounded-2xl border bg-white p-3"
          style={{ borderColor: `${accent}33` }}
        >
          <Lightbox src={img.src} alt={img.label}>
            <AssetImage
              src={img.src}
              alt={img.label}
              color={accent}
              className="h-auto max-h-[70vh] w-full object-contain"
              label={img.label}
            />
          </Lightbox>
        </div>
      );
      return;
    }

    elements.push(
      <TiltedFrame key={img.src} rotate={-2} backdrop={`${accent}22`}>
        <AssetImage
          src={img.src}
          alt={img.label}
          color={accent}
          className="h-64 w-full object-cover sm:h-72"
          label={img.label}
        />
      </TiltedFrame>
    );
  });
  flushRow();

  return <div className={`mt-6 grid gap-6 ${hasCroppedImages && images.length > 1 ? "sm:grid-cols-2" : ""}`}>{elements}</div>;
}

// A row of mobile screenshots in a plain rounded device frame, each sized
// to its own true aspect ratio (no cropping, no shared box) so several can
// sit side by side rather than one cropped/stretched image per row.
function PhoneRow({ images, accent }: { images: { src: string; label: string }[]; accent: string }) {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-6">
      {images.map((img) => (
        <div key={img.src} className="w-full max-w-[220px] sm:w-[220px]">
          <div
            className="overflow-hidden rounded-[1.75rem] border-[6px] shadow-md"
            style={{ borderColor: "#1C1C1E" }}
          >
            <AssetImage src={img.src} alt={img.label} color={accent} className="block h-auto w-full" label={img.label} />
          </div>
          <p className="mt-2 text-center font-mono text-xs font-semibold uppercase tracking-wide opacity-70">
            {img.label}
          </p>
        </div>
      ))}
    </div>
  );
}

// One small line-icon per process stage, in the same hand-drawn stroke
// style as the site's other inline icons. `color` is left pluggable so
// a clickable pill can pass "currentColor" and let the hover-sweep's
// CSS color transition drive the icon along with the text.
const PROCESS_ICONS: Record<string, (props: { color: string }) => React.ReactNode> = {
  Research: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="10" cy="10" r="6" />
      <path d="M15 15l5 5" />
    </svg>
  ),
  Define: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M9 11h6M9 15h6" />
    </svg>
  ),
  Ideate: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
      <path d="M10 18.5h4M10.5 21h3" />
    </svg>
  ),
  Prototype: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l8 4.5-8 4.5-8-4.5z" />
      <path d="M4 12l8 4.5 8-4.5" />
      <path d="M4 16.5l8 4.5 8-4.5" />
    </svg>
  ),
  Test: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 3h6" />
      <path d="M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" />
    </svg>
  ),
  Implement: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2c2.5 2 4 5.5 4 9 0 1.8-.5 3.4-1.3 4.6L12 20l-2.7-4.4C8.5 14.4 8 12.8 8 11c0-3.5 1.5-7 4-9z" />
      <circle cx="12" cy="10" r="1.2" />
      <path d="M9 16l-2 4M15 16l2 4" />
    </svg>
  ),
};

// A general-purpose icon library for insightCards/goalChips titles —
// content opts in per-item via an `icon` key into this map, since
// those titles are free-form (unlike the fixed Process-stage vocabulary
// PROCESS_ICONS covers above).
const CASE_STUDY_ICONS: Record<string, (props: { color: string }) => React.ReactNode> = {
  compass: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 6-6 2 2-6z" />
    </svg>
  ),
  calendar: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  ),
  list: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="5" cy="6" r="1" fill={color} stroke="none" />
      <circle cx="5" cy="12" r="1" fill={color} stroke="none" />
      <circle cx="5" cy="18" r="1" fill={color} stroke="none" />
      <path d="M9 6h12M9 12h12M9 18h12" />
    </svg>
  ),
  lock: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  ),
  palette: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-.9 2-2 0-.6-.3-1-.6-1.4-.3-.4-.4-.6-.4-1 0-.8.7-1.6 1.6-1.6H17a4 4 0 0 0 4-4c0-5-4-8-9-8z" />
      <circle cx="7.5" cy="12" r="1" fill={color} stroke="none" />
      <circle cx="9.5" cy="8" r="1" fill={color} stroke="none" />
      <circle cx="14.5" cy="8" r="1" fill={color} stroke="none" />
    </svg>
  ),
  house: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 11l8-7 8 7" />
      <path d="M6 9.5V20h12V9.5" />
    </svg>
  ),
  film: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 8l2-4h4l-2 4z" />
      <path d="M9 8l2-4h4l-2 4z" />
      <path d="M15 8l2-4h3l-2 4z" />
      <rect x="3" y="8" width="18" height="12" rx="1" />
    </svg>
  ),
  eyeOff: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
      <path d="M6.7 6.7C3.9 8.6 2.5 12 2.5 12s3.5 7 9.5 7c1.3 0 2.5-.3 3.6-.8M10.6 5.1A10.4 10.4 0 0 1 12 5c6 0 9.5 7 9.5 7a16.6 16.6 0 0 1-2.9 3.8" />
      <path d="M3 3l18 18" />
    </svg>
  ),
  shield: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  grid: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  scale: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v18M4 7h16" />
      <path d="M7 7l-3 6a3 3 0 0 0 6 0z" />
      <path d="M17 7l-3 6a3 3 0 0 0 6 0z" />
    </svg>
  ),
  tag: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 11l8-8h7v7l-8 8a2 2 0 0 1-3 0l-4-4a2 2 0 0 1 0-3z" />
      <circle cx="15" cy="7" r="1" fill={color} stroke="none" />
    </svg>
  ),
  user: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
    </svg>
  ),
  cup: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 8h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
      <path d="M16 9h2a2 2 0 0 1 0 4h-2" />
      <path d="M8 3c-1 1-1 2 0 3M12 3c-1 1-1 2 0 3" />
    </svg>
  ),
  music: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 18V5l10-2v13" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="16.5" cy="16" r="2.5" />
    </svg>
  ),
  clock: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  layers: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l8 4.5-8 4.5-8-4.5z" />
      <path d="M4 12l8 4.5 8-4.5" />
      <path d="M4 16.5l8 4.5 8-4.5" />
    </svg>
  ),
  image: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" fill={color} stroke="none" />
      <path d="M21 16l-5-5-4 4-3-3-6 6" />
    </svg>
  ),
  cards: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="6" y="4" width="14" height="10" rx="2" />
      <path d="M4 8v10a2 2 0 0 0 2 2h10" />
    </svg>
  ),
  pen: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 20l1-4L16 5l3 3L8 19l-4 1z" />
      <path d="M14 7l3 3" />
    </svg>
  ),
  fork: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21V12" />
      <path d="M6 5l6 7 6-7" />
    </svg>
  ),
  skip: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 5v14l10-7z" />
      <path d="M17 5v14" />
    </svg>
  ),
  target: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" fill={color} stroke="none" />
    </svg>
  ),
  trophy: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 4h10v3a5 5 0 0 1-10 0z" />
      <path d="M7 5H4a3 3 0 0 0 3 4" />
      <path d="M17 5h3a3 3 0 0 1-3 4" />
      <path d="M12 12v4" />
      <path d="M9 20h6" />
    </svg>
  ),
  heart: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 20s-7-4.6-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 5c-2.5 4.4-9.5 9-9.5 9z" />
    </svg>
  ),
  puzzle: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4h6a2 2 0 1 1 4 0h6v6a2 2 0 1 1 0 4v6h-6a2 2 0 1 1-4 0H4v-6a2 2 0 1 0 0-4z" />
    </svg>
  ),
  code: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 8l-4 4 4 4" />
      <path d="M16 8l4 4-4 4" />
    </svg>
  ),
};

function SectionBlock({ section, accent }: { section: CaseStudySection; accent: string }) {
  switch (section.type) {
    case "intro":
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          <div className="mt-8 space-y-4 font-mono text-base leading-relaxed sm:text-lg">
            {section.paragraphs.map((p, i) => (
              <p key={i}>{renderHighlighted(p, accent)}</p>
            ))}
          </div>
        </>
      );

    case "overview":
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          <div className="mt-10">
            {section.rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid gap-2 sm:grid-cols-[160px_1fr] ${i === 0 ? "" : "mt-8 border-t pt-8"}`}
                style={i === 0 ? undefined : { borderColor: `${accent}2A` }}
              >
                <p className="font-display text-sm font-bold" style={{ color: accent }}>
                  {row.label}
                </p>
                <p className="font-mono text-base leading-relaxed sm:text-lg">
                  {renderHighlighted(row.value, accent)}
                </p>
              </div>
            ))}
          </div>
        </>
      );

    case "pills": {
      const hasLinks = section.items.some((item) => item.target);
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          {hasLinks && (
            <p className="mt-2 font-mono text-xs italic opacity-60">
              Click a stage to jump to that part of the case study.
            </p>
          )}
          <RevealGroup className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3" stagger={0.06}>
            {section.items.map((item) => {
              const Icon = PROCESS_ICONS[item.label];

              if (!item.target) {
                return (
                  <RevealItem key={item.label}>
                    <div
                      className="flex items-center justify-center gap-2 rounded-full border px-4 py-3 text-center font-display text-sm font-semibold italic"
                      style={{ borderColor: `${accent}55`, color: accent }}
                    >
                      {Icon && <Icon color={accent} />}
                      {item.label}
                    </div>
                  </RevealItem>
                );
              }

              return (
                <RevealItem key={item.label}>
                  <ProcessPill target={slugify(item.target)} accent={accent}>
                    {Icon && <Icon color="currentColor" />}
                    {item.label}
                    <span
                      aria-hidden
                      className="inline-block max-w-0 -translate-x-1 overflow-hidden opacity-0 transition-all duration-300 group-hover:ml-1 group-hover:max-w-[1em] group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      →
                    </span>
                  </ProcessPill>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </>
      );
    }

    case "insightCards":
      if (section.layout === "tracklist") {
        return (
          <>
            <SectionHeading accent={accent}>{section.heading}</SectionHeading>
            {section.intro.map((p, i) => (
              <p key={i} className="mt-8 font-mono text-base leading-relaxed sm:text-lg">
                {renderHighlighted(p, accent)}
              </p>
            ))}
            <RevealGroup className="mt-8 divide-y rounded-2xl bg-white/60" stagger={0.06}>
              {section.cards.map((card, i) => {
                const Icon = card.icon ? CASE_STUDY_ICONS[card.icon] : undefined;
                return (
                  <RevealItem key={card.title}>
                    <div className="flex items-start gap-5 p-5 sm:p-6">
                      <p
                        className="shrink-0 font-mono text-2xl font-bold leading-none sm:text-3xl"
                        style={{ color: `${accent}55` }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <div className="min-w-0 flex-1">
                        <p className="inline-flex items-center gap-2 font-display text-sm font-bold" style={{ color: accent }}>
                          {Icon && <Icon color={accent} />}
                          {card.title}
                        </p>
                        {card.demo === "font" ? (
                          <p className={`${handDrawnFont.className} mt-1 text-4xl leading-none`} style={{ color: paperInk }}>
                            Lofistory
                          </p>
                        ) : null}
                        <p className="mt-3 font-mono text-sm leading-relaxed">
                          {renderHighlighted(card.detail, accent)}
                        </p>
                        {card.demo === "palette" && (
                          <div className="mt-3 flex gap-3">
                            {LOFISTORY_PALETTE_DEMO.map((hex) => (
                              <div key={hex} className="group relative">
                                <span
                                  className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 font-mono text-[10px] font-semibold opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100"
                                  style={{ backgroundColor: paperInk, color: paper }}
                                >
                                  {hex}
                                </span>
                                <div
                                  className="h-8 w-8 rounded-full border transition-transform duration-200 ease-out group-hover:scale-125"
                                  style={{ backgroundColor: hex, borderColor: `${paperInk}22` }}
                                  aria-hidden
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
            {section.images && <ImageGrid images={section.images} accent={accent} />}
          </>
        );
      }
      {
        const introParagraph = (p: string, key: number) => (
          <p key={key} className="mt-8 font-mono text-base leading-relaxed sm:text-lg">
            {renderHighlighted(p, accent)}
          </p>
        );
        const cardsIntroBlock = section.cardsIntro && introParagraph(section.cardsIntro, -1);
        const cardsBlock = (
          <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.08}>
            {section.cards.map((card) => {
              const Icon = card.icon ? CASE_STUDY_ICONS[card.icon] : undefined;
              return (
                <RevealItem key={card.title}>
                  <div className="rounded-xl bg-white/60 p-5">
                    <p
                      className="inline-flex items-center gap-2 rounded-md px-3 py-1 font-display text-sm font-bold"
                      style={{ backgroundColor: `${accent}33`, color: accent }}
                    >
                      {Icon && <Icon color={accent} />}
                      {card.title}
                    </p>
                    <p className="mt-3 font-mono text-sm leading-relaxed">
                      {renderHighlighted(card.detail, accent)}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        );
        const surveyBlock = section.survey && (
          <div className="mt-8 rounded-2xl bg-white/60 p-6">
            <p className="font-display text-sm font-bold uppercase tracking-wide" style={{ color: accent }}>
              The Survey
            </p>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2">
              {section.survey.questions
                .map((item, i) => ({ ...item, number: i + 1 }))
                .filter((item) => item.flagged)
                .map((item) => (
                  <li
                    key={item.number}
                    className="rounded-lg p-3"
                    style={{ backgroundColor: `${accent}14`, boxShadow: `inset 0 0 0 1px ${accent}55` }}
                  >
                    <p className="font-mono text-sm font-semibold leading-snug">
                      {item.number}. {item.q}
                    </p>
                    <p className="mt-1 font-mono text-xs opacity-60">{item.type}</p>
                  </li>
                ))}
            </ol>
            {section.survey.otherTopics && (
              <p className="mt-4 font-mono text-xs opacity-60">
                Plus {section.survey.questions.filter((item) => !item.flagged).length} more questions on{" "}
                {section.survey.otherTopics}.
              </p>
            )}
          </div>
        );
        const statsBlock = section.stats && (
          <div className="mt-8">
            <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
              {section.stats.tiles.map((tile) => (
                <RevealItem key={tile.label}>
                  <div className="rounded-xl bg-white/60 p-5 text-center">
                    <p className="font-display text-4xl font-bold leading-none" style={{ color: accent }}>
                      {tile.value}
                    </p>
                    <p className="mt-3 font-mono text-xs leading-relaxed opacity-80">{tile.label}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
            {section.stats.drilldown && (
              <div className="mt-6 rounded-xl p-5" style={{ backgroundColor: `${accent}0D` }}>
                <p className="font-mono text-sm leading-relaxed">{section.stats.drilldown.intro}</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {section.stats.drilldown.tiles.map((tile) => (
                    <div key={tile.label} className="rounded-xl bg-white/60 p-5 text-center">
                      <p className="font-display text-3xl font-bold leading-none" style={{ color: accent }}>
                        {tile.value}
                      </p>
                      <p className="mt-3 font-mono text-xs leading-relaxed opacity-80">{tile.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
        const imagesBlock = section.images && <ImageGrid images={section.images} accent={accent} />;

        // Sections carrying real survey/stats data read better with the
        // evidence (survey instrument, then results) placed right after
        // the paragraph that describes the survey, and the synthesized
        // insight cards saved for last. Sections without that data keep
        // the original intro → cards → images order other case studies
        // (e.g. PrizeKicks' Research, which relies on images trailing
        // its cards) already depend on.
        const hasSurveyData = Boolean(section.survey || section.stats);

        return (
          <>
            <SectionHeading accent={accent}>{section.heading}</SectionHeading>
            {hasSurveyData ? (
              <>
                {section.intro[0] && introParagraph(section.intro[0], 0)}
                {surveyBlock}
                {statsBlock}
                {section.intro.slice(1).map((p, i) => introParagraph(p, i + 1))}
                {imagesBlock}
                {cardsIntroBlock}
                {cardsBlock}
              </>
            ) : (
              <>
                {section.intro.map((p, i) => introParagraph(p, i))}
                {cardsIntroBlock}
                {cardsBlock}
                {surveyBlock}
                {imagesBlock}
              </>
            )}
          </>
        );
      }

    case "quote":
      return (
        <>
          <p className="font-display text-sm font-bold" style={{ color: accent }}>
            {section.label}
          </p>
          <blockquote
            className="mt-2 rounded-xl px-6 py-6 font-display text-lg italic"
            style={{ backgroundColor: accent, color: "#EEF0FB" }}
          >
            &ldquo;{section.text}&rdquo;
            <footer className="mt-3 font-mono text-xs font-semibold not-italic opacity-70">
              -{section.attribution}
            </footer>
          </blockquote>
        </>
      );

    case "colorCards":
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          {section.intro.map((p, i) => (
            <p key={i} className="mt-8 font-mono text-base leading-relaxed sm:text-lg">
              {renderHighlighted(p, accent)}
            </p>
          ))}
          <RevealGroup className="mt-8 flex flex-col gap-4" stagger={0.08}>
            {section.cards.map((card) => (
              <RevealItem key={card.name}>
                {card.separateAbove && (
                  <div className="mb-4 h-px w-full" style={{ backgroundColor: `${accent}40` }} aria-hidden />
                )}
                <div className="rounded-xl p-6" style={{ backgroundColor: card.color, color: "#F4F2FA" }}>
                  <div className="flex items-center gap-3">
                    {card.logo && (
                      <div
                        className={
                          card.bareLogo
                            ? "flex h-12 w-12 shrink-0 items-center justify-center"
                            : "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5"
                        }
                      >
                        <AssetImage
                          src={card.logo}
                          alt={`${card.name} logo`}
                          color={card.color}
                          className="h-full w-full object-contain"
                          label={`${card.name} logo`}
                        />
                      </div>
                    )}
                    <p className="font-display text-xl font-bold">{card.name}</p>
                  </div>
                  <p className="mt-2 font-mono text-sm leading-relaxed opacity-90">{card.detail}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          {section.images && <ImageGrid images={section.images} accent={accent} />}
        </>
      );

    case "goalChips":
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          <InterleavedCopy items={section.intro} accent={accent} />
          <RevealGroup className="mt-8 flex flex-wrap justify-center gap-4" stagger={0.06}>
            {section.goals.map((goal) => {
              const Icon = goal.icon ? CASE_STUDY_ICONS[goal.icon] : undefined;
              return (
                <RevealItem
                  key={goal.title}
                  className={
                    section.wideCards
                      ? "min-w-[260px] max-w-[320px] flex-1 basis-[260px]"
                      : "min-w-[200px] max-w-[260px] flex-1 basis-[200px]"
                  }
                >
                  <div className="flex h-full flex-col items-center rounded-xl bg-white/60 px-5 py-4 text-center">
                    {Icon && (
                      <div
                        className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `${accent}26` }}
                      >
                        <Icon color={accent} />
                      </div>
                    )}
                    <p className="font-display text-sm font-bold" style={{ color: accent }}>
                      {goal.title}
                    </p>
                    <p className="mt-1 font-mono text-xs opacity-80">{renderHighlighted(goal.detail, accent)}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
          {section.outro?.map((p, i) => (
            <p key={i} className="mt-8 font-mono text-base leading-relaxed sm:text-lg">
              {renderHighlighted(p, accent)}
            </p>
          ))}
          {section.images && <ImageGrid images={section.images} accent={accent} />}
        </>
      );

    case "useCases":
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          {section.intro?.map((p, i) => (
            <p key={i} className="mt-8 font-mono text-base leading-relaxed sm:text-lg">
              {renderHighlighted(p, accent)}
            </p>
          ))}
          <RevealGroup className="mt-8 flex flex-col gap-4" stagger={0.08}>
            {section.cases.map((uc, i) => (
              <RevealItem key={uc.task}>
                <div className="rounded-xl bg-white/60 p-5 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="inline-flex items-center gap-2 font-display text-base font-bold" style={{ color: accent }}>
                      <span className="font-mono text-sm font-bold" style={{ color: `${accent}55` }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {uc.task}
                    </p>
                    <p className="font-mono text-xs font-semibold uppercase tracking-wide opacity-60">{uc.user}</p>
                  </div>
                  <p className="mt-2 font-mono text-sm leading-relaxed">{uc.goal}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2">
                    {uc.flow.map((step, j) => (
                      <span key={j} className="inline-flex items-center gap-1.5">
                        <span
                          className="rounded-full px-3 py-1.5 font-mono text-xs font-medium"
                          style={{ backgroundColor: `${accent}1A`, color: paperInk }}
                        >
                          {step}
                        </span>
                        {j < uc.flow.length - 1 && (
                          <span className="font-mono text-xs" style={{ color: `${accent}80` }} aria-hidden>
                            &rarr;
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                  {uc.alternative && (
                    <div className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-2">
                      <span className="mr-1 font-mono text-[11px] font-bold uppercase tracking-wide opacity-50">Alt</span>
                      {uc.alternative.map((step, j) => (
                        <span key={j} className="inline-flex items-center gap-1.5">
                          <span className="rounded-full bg-black/5 px-3 py-1.5 font-mono text-xs">{step}</span>
                          {j < uc.alternative!.length - 1 && (
                            <span className="font-mono text-xs opacity-40" aria-hidden>
                              &rarr;
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </>
      );

    case "media":
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          <InterleavedCopy items={section.paragraphs} accent={accent} />
          {section.video && (
            <div className="mt-6">
              <TiltedFrame rotate={-1.5} backdrop={`${accent}22`}>
                <video
                  src={section.video.src}
                  aria-label={section.video.label}
                  className="h-auto max-h-[85vh] w-full"
                  controls
                  playsInline
                />
              </TiltedFrame>
            </div>
          )}
          {section.images && <ImageGrid images={section.images} accent={accent} />}
          {section.phoneRow &&
            (section.phoneRowFilmstrip ? (
              <PhoneFilmstrip images={section.phoneRow} accent={accent} />
            ) : (
              <PhoneRow images={section.phoneRow} accent={accent} />
            ))}
          {section.link && (
            <a
              href={section.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm font-bold text-white"
              style={{ backgroundColor: accent }}
            >
              {section.link.label} ↗
            </a>
          )}
        </>
      );

    case "results":
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          {section.intro.map((p, i) => (
            <p key={i} className="mt-8 font-mono text-base leading-relaxed sm:text-lg">
              {renderHighlighted(p, accent)}
            </p>
          ))}
          <div className="mt-6 space-y-6">
            {section.items.map((item) => {
              const Icon = item.icon ? CASE_STUDY_ICONS[item.icon] : undefined;
              return (
                <div key={item.label} className="grid gap-2 sm:grid-cols-[200px_1fr]">
                  <p className="flex items-center gap-2 font-display text-sm font-bold" style={{ color: accent }}>
                    {Icon && <Icon color={accent} />}
                    {item.label}
                  </p>
                  <p className="font-mono text-sm leading-relaxed">{renderHighlighted(item.detail, accent)}</p>
                </div>
              );
            })}
          </div>
          {section.outro?.map((p, i) => (
            <p key={i} className="mt-8 font-mono text-base leading-relaxed sm:text-lg">
              {renderHighlighted(p, accent)}
            </p>
          ))}
          {section.images && <ImageGrid images={section.images} accent={accent} />}
        </>
      );

    case "reflection":
      if (section.layout === "tracklist") {
        return (
          <>
            <SectionHeading accent={accent}>{section.heading}</SectionHeading>
            {section.intro.map((p, i) => (
              <p key={i} className="mt-8 font-mono text-base leading-relaxed sm:text-lg">
                {renderHighlighted(p, accent)}
              </p>
            ))}
            <RevealGroup className="mt-8 divide-y rounded-2xl bg-white/60" stagger={0.06}>
              {section.lessons.map((lesson, i) => {
                const Icon = lesson.icon ? CASE_STUDY_ICONS[lesson.icon] : undefined;
                return (
                  <RevealItem key={lesson.title}>
                    <div className="flex items-start gap-5 p-5 sm:p-6">
                      <p
                        className="shrink-0 font-mono text-2xl font-bold leading-none sm:text-3xl"
                        style={{ color: `${accent}55` }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <div className="min-w-0 flex-1">
                        <p className="inline-flex items-center gap-2 font-display text-sm font-bold" style={{ color: accent }}>
                          {Icon && <Icon color={accent} />}
                          {lesson.title.replace(/:$/, "")}
                        </p>
                        <p className="mt-3 font-mono text-base leading-relaxed sm:text-lg">
                          {renderHighlighted(lesson.detail, accent)}
                        </p>
                      </div>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
            {section.thanks && (
              <p className="mt-12 text-center font-display text-xl font-bold" style={{ color: accent }}>
                {section.thanks}
              </p>
            )}
          </>
        );
      }
      if (section.layout === "timeline") {
        const ClockIcon = CASE_STUDY_ICONS.clock;
        return (
          <>
            <SectionHeading accent={accent}>{section.heading}</SectionHeading>
            {section.intro.map((p, i) => (
              <p key={i} className="mt-8 font-mono text-base leading-relaxed sm:text-lg">
                {renderHighlighted(p, accent)}
              </p>
            ))}
            <RevealGroup className="relative mt-10 space-y-10" stagger={0.08}>
              <div className="absolute left-6 top-6 bottom-6 w-px" style={{ backgroundColor: `${accent}33` }} aria-hidden />
              {section.lessons.map((lesson) => {
                const Icon = lesson.icon ? CASE_STUDY_ICONS[lesson.icon] : undefined;
                return (
                  <RevealItem key={lesson.title}>
                    <div className="relative flex items-start gap-5">
                      <div
                        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 bg-white"
                        style={{ borderColor: accent }}
                      >
                        <ClockIcon color={accent} />
                      </div>
                      <div className="min-w-0 flex-1 pt-2">
                        <p className="inline-flex items-center gap-2 font-display text-sm font-bold" style={{ color: accent }}>
                          {Icon && <Icon color={accent} />}
                          {lesson.title.replace(/:$/, "")}
                        </p>
                        <p className="mt-3 font-mono text-base leading-relaxed sm:text-lg">
                          {renderHighlighted(lesson.detail, accent)}
                        </p>
                      </div>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
            {section.thanks && (
              <p className="mt-12 text-center font-display text-xl font-bold" style={{ color: accent }}>
                {section.thanks}
              </p>
            )}
          </>
        );
      }
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          {section.intro.map((p, i) => (
            <p key={i} className="mt-8 font-mono text-base leading-relaxed sm:text-lg">
              {renderHighlighted(p, accent)}
            </p>
          ))}
          <div className="mt-6 space-y-6">
            {section.lessons.map((lesson) => {
              const Icon = lesson.icon ? CASE_STUDY_ICONS[lesson.icon] : undefined;
              return (
                <div key={lesson.title}>
                  <p className="inline-flex items-center gap-2 font-display text-sm font-bold" style={{ color: accent }}>
                    {Icon && <Icon color={accent} />}
                    {lesson.title.replace(/:$/, "")}
                  </p>
                  <p className="mt-2 font-mono text-base leading-relaxed sm:text-lg">
                    {renderHighlighted(lesson.detail, accent)}
                  </p>
                </div>
              );
            })}
          </div>
          {section.thanks && (
            <p className="mt-12 text-center font-display text-xl font-bold" style={{ color: accent }}>
              {section.thanks}
            </p>
          )}
        </>
      );

    default:
      return null;
  }
}
