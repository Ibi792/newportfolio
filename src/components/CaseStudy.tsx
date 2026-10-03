import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { AssetImage } from "@/components/AssetImage";
import { TiltedFrame } from "@/components/TiltedFrame";
import { ProcessPill } from "@/components/ProcessPill";
import { footerText, paper, paperInk, themes, type CaseStudyData, type CaseStudySection } from "@/lib/content";

// Turns a section heading into the #anchor a Process pill links to.
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function CaseStudy({ data }: { data: CaseStudyData }) {
  const { heroBg, heroText, accent, footer } = data;

  return (
    <div style={{ backgroundColor: paper, color: paperInk }} className="min-h-screen">
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
                label="Add hero image"
              />
            </TiltedFrame>
          </Reveal>

          {data.shippedProductUrl && (
            <Reveal delay={0.15}>
              <a
                href={data.shippedProductUrl}
                className="mt-6 flex items-center justify-between rounded-lg bg-white/10 px-6 py-4 font-mono text-sm font-semibold transition hover:bg-white/20"
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
              className={`scroll-mt-28${i === 0 ? "" : " mt-14"}`}
            >
              <SectionBlock section={section} accent={accent} />
            </Reveal>
          );
        })}

        <p className="mt-16 text-center">
          <Link href="#top" className="underline-hover font-display font-bold" style={{ color: accent }}>
            Back to top :D
          </Link>
        </p>
      </div>

      <Footer bg={footer} text={footerText} tagline={themes.caseStudy.tagline} />
    </div>
  );
}

// Content marks a key phrase by wrapping it in {{double braces}}; this
// splits on that delimiter and colors the odd-indexed (matched) groups
// with the case study's accent, so a handful of phrases per paragraph
// can pop for scanning without changing weight or font.
function renderHighlighted(text: string, accent: string) {
  return text.split(/\{\{(.+?)\}\}/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} style={{ color: accent }}>
        {part}
      </span>
    ) : (
      part
    )
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
  images: { src: string; label: string; fit?: "contain" | "feature" }[];
  accent: string;
}) {
  const hasCroppedImages = images.some((img) => !img.fit);
  return (
    <div className={`mt-6 grid gap-6 ${hasCroppedImages && images.length > 1 ? "sm:grid-cols-2" : ""}`}>
      {images.map((img) => {
        if (img.fit === "feature") {
          return (
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
        }
        if (img.fit === "contain") {
          return (
            <div
              key={img.src}
              className="sm:col-span-2 rounded-2xl border bg-white p-3"
              style={{ borderColor: `${accent}33` }}
            >
              <AssetImage
                src={img.src}
                alt={img.label}
                color={accent}
                className="h-auto max-h-[70vh] w-full object-contain"
                label={img.label}
              />
            </div>
          );
        }
        return (
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
      })}
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
};

function SectionBlock({ section, accent }: { section: CaseStudySection; accent: string }) {
  switch (section.type) {
    case "intro":
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          <div className="mt-5 space-y-4 font-mono text-base leading-relaxed sm:text-lg">
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
          <div className="mt-6 space-y-6">
            {section.rows.map((row) => (
              <div key={row.label} className="grid gap-2 sm:grid-cols-[160px_1fr]">
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
          <RevealGroup className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3" stagger={0.06}>
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
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          {section.intro.map((p, i) => (
            <p key={i} className="mt-5 font-mono text-base leading-relaxed sm:text-lg">
              {renderHighlighted(p, accent)}
            </p>
          ))}
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
          {section.images && <ImageGrid images={section.images} accent={accent} />}
        </>
      );

    case "quote":
      return (
        <>
          <p className="font-display text-sm font-bold" style={{ color: accent }}>
            {section.label}
          </p>
          <blockquote
            className="mt-2 rounded-xl px-6 py-6 font-display text-lg italic"
            style={{ backgroundColor: "#1B1830", color: "#EEF0FB" }}
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
            <p key={i} className="mt-5 font-mono text-base leading-relaxed sm:text-lg">
              {renderHighlighted(p, accent)}
            </p>
          ))}
          <RevealGroup className="mt-8 flex flex-col gap-4" stagger={0.08}>
            {section.cards.map((card) => (
              <RevealItem key={card.name}>
                <div className="rounded-xl p-6" style={{ backgroundColor: card.color, color: "#F4F2FA" }}>
                  <p className="font-display text-xl font-bold">{card.name}</p>
                  <p className="mt-2 font-mono text-sm leading-relaxed opacity-90">{card.detail}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </>
      );

    case "goalChips":
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          {section.intro.map((p, i) => (
            <p key={i} className="mt-5 font-mono text-base leading-relaxed sm:text-lg">
              {renderHighlighted(p, accent)}
            </p>
          ))}
          <RevealGroup className="mt-8 flex flex-wrap gap-4" stagger={0.06}>
            {section.goals.map((goal) => {
              const Icon = goal.icon ? CASE_STUDY_ICONS[goal.icon] : undefined;
              return (
                <RevealItem key={goal.title}>
                  <div className="rounded-xl bg-white/60 px-5 py-4">
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

    case "media":
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          {section.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 font-mono text-base leading-relaxed sm:text-lg">
              {renderHighlighted(p, accent)}
            </p>
          ))}
          {section.images && <ImageGrid images={section.images} accent={accent} />}
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
            <p key={i} className="mt-5 font-mono text-base leading-relaxed sm:text-lg">
              {renderHighlighted(p, accent)}
            </p>
          ))}
          <div className="mt-6 space-y-6">
            {section.items.map((item) => (
              <div key={item.label} className="grid gap-2 sm:grid-cols-[200px_1fr]">
                <p className="font-display text-sm font-bold" style={{ color: accent }}>
                  {item.label}
                </p>
                <p className="font-mono text-sm leading-relaxed">{renderHighlighted(item.detail, accent)}</p>
              </div>
            ))}
          </div>
          {section.outro?.map((p, i) => (
            <p key={i} className="mt-8 font-mono text-base leading-relaxed sm:text-lg">
              {renderHighlighted(p, accent)}
            </p>
          ))}
        </>
      );

    case "reflection":
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          {section.intro.map((p, i) => (
            <p key={i} className="mt-5 font-mono text-base leading-relaxed sm:text-lg">
              {renderHighlighted(p, accent)}
            </p>
          ))}
          <div className="mt-6 space-y-4">
            {section.lessons.map((lesson) => (
              <p key={lesson.title} className="font-mono text-base leading-relaxed sm:text-lg">
                <span className="font-display font-bold" style={{ color: accent }}>
                  {lesson.title}
                </span>{" "}
                {renderHighlighted(lesson.detail, accent)}
              </p>
            ))}
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
