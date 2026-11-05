import type { Metadata } from "next";
import { about, hero, site, projects } from "@/lib/content";

export const metadata: Metadata = { title: "Portfolio PDF · Isaac Isaac" };

// Curated for a printed leave-behind, not pulled 1:1 from the live case
// studies — a resume-style PDF needs three tight bullets and a role line,
// not the full narrative. image/imagePosition/color are read straight off
// the real `projects` array below so a thumbnail crop never drifts out of
// sync with the live site's own tuning. Facts are sourced from each case
// study's own meta/results/reflection sections, so nothing here is invented.
const PROJECT_NOTES: Record<string, { role: string; highlights: string[] }> = {
  fourddo: {
    role: "Lead Product Design Intern · Internship, 2026",
    highlights: [
      "Centralized access to curriculum and program comms",
      "A structured week-by-week view of the program",
      "A scalable foundation the fellowship can build on",
    ],
  },
  knourish: {
    role: "Solo UX/UI Designer · Google UX Design Certificate",
    highlights: [
      "A three-tier Low Wait / Busy / Packed status system",
      "A Leave By prompt that turns a wait time into a decision",
      "Translated into a working React prototype for real testing",
    ],
  },
  "goblin-gizmos": {
    role: "Design, UI, and Branding Lead · Team of 5, Capstone",
    highlights: [
      "Real accounts, uploads, and a database, not just a prototype",
      "Built across two semesters with a five-person team",
      "W3C-validated markup, accessible from design into code",
    ],
  },
  prizekicks: {
    role: "Lead UI/UX Designer · Team of 3, Group Project",
    highlights: [
      "Price context that let buyers actually compare listings",
      "Navigation testers moved through without stalling",
      "Scoped to the features that proved the product's value",
    ],
  },
  lofistory: {
    role: "Designer and Developer · Solo Project, 2025",
    highlights: [
      "Solo-designed and built end to end in React",
      "Live Spotify Web API integration, not static data",
      "The smallest project in the portfolio, and the one I come back to most",
    ],
  },
};

// The PDF's thumbnail box (2.4in x 1.6in, 1.5:1) is narrower than these two
// images' native 16:9, so a center crop — fine on the live site's own wider
// card shapes — clips the wordmark off the left edge here. Left-anchoring
// only where that actually happens, rather than overriding every project.
const PDF_IMAGE_POSITION: Record<string, string> = {
  fourddo: "left",
  knourish: "left",
};

const PDF_PROJECTS = projects.map((p) => ({
  ...p,
  ...PROJECT_NOTES[p.slug],
  href: `/projects/${p.slug}`,
  imagePosition: PDF_IMAGE_POSITION[p.slug] ?? p.imagePosition,
}));

// Sought isn't one of the five full case studies (36-hour hackathon build,
// lives in the Smaller Projects section), but it has enough real content —
// hardware, an accessibility audit, a demo — to earn a full card here
// rather than just a thumbnail in the gallery below. Links to its anchor
// on /projects rather than a dedicated route, since that's where it lives.
const SOUGHT_PROJECT = {
  slug: "sought",
  title: "Sought",
  role: "UI/UX Designer · Team of 2, SwampHacks XII",
  blurb: "Designing the accessible half of a rover that finds what low vision or memory loss make hard to find.",
  color: "#101F25",
  image: "/images/projects/sought-cover.webp",
  imagePosition: "center",
  href: "/projects#sought",
  highlights: [
    "VoiceOver, haptics, and an Apple accessibility audit across all 15 screens",
    "An ESP32-driven rover with a hardware safety watchdog",
    "Built in 36 hours at SwampHacks XII",
  ],
};

const ALL_PDF_PROJECTS = [...PDF_PROJECTS, SOUGHT_PROJECT];

const siteUrl = "https://friendscallmeibi.com";

// A small closer for the leftover space after the projects — motion design
// stills so the PDF doesn't end on an empty page. Frames pulled from the
// real "Things in Motion" clips on the Extras page, not separate images.
const GALLERY_ITEMS = [
  { src: "/images/motion/still-birbworm2.jpg", caption: "Bird-Worm Mentality Theorem, motion design" },
  { src: "/images/motion/still-kuroskai1.jpg", caption: "Me vs Me, lyric video edit" },
  { src: "/images/motion/still-ramen.jpg", caption: "When U Commodify Violence, motion design" },
  { src: "/images/motion/still-ppp.jpg", caption: "Persona/Power, motion design" },
];

export default function PortfolioPdfPage() {
  return (
    // Spacing here is deliberately minimal — real page margins (top/bottom/
    // left/right) are applied by the PDF generator itself, so every physical
    // page gets a consistent margin automatically, including pages that
    // start mid-flow through the projects list below.
    <div className="font-sans" style={{ color: "#241F1A" }}>
      {/* PAGE 1 */}
      <section className="flex flex-col" style={{ breakAfter: "page" }}>
        <div className="flex items-start justify-between gap-6 border-b-2 pb-5" style={{ borderColor: "#24231A22" }}>
          <div className="flex items-start gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/portrait.jpg"
              alt={site.name}
              className="h-[1in] w-[1in] shrink-0 rounded-full object-cover shadow-sm"
            />
            <div>
              <h1 className="font-display text-5xl font-black uppercase tracking-tight">{site.name}</h1>
              <p className="mt-1 font-mono text-base font-semibold" style={{ color: "#D6486B" }}>
                {site.role}
              </p>
              <p className="mt-2 max-w-md font-mono text-sm leading-relaxed opacity-80">{hero.tagline}</p>
            </div>
          </div>
          <div className="shrink-0 text-right font-mono text-xs leading-relaxed opacity-80">
            <p>{site.email}</p>
            <p>{site.linkedin.replace("https://www.", "")}</p>
            <p>{siteUrl.replace("https://", "")}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-[1.3fr_1fr] gap-10">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-wide" style={{ color: "#D6486B" }}>
              About
            </p>
            <p className="mt-2 font-mono text-sm leading-relaxed">{about.bio[0]}</p>
            <p className="mt-3 font-mono text-sm leading-relaxed">
              I think of designs as digital ecosystems, little living alcoves of widgets and data whose systems rely
              on each other to function properly. As a designer I seek to promote their beauty without sacrificing
              their structural health.
            </p>

            <p className="mt-6 font-display text-xs font-bold uppercase tracking-wide" style={{ color: "#D6486B" }}>
              Certifications
            </p>
            <ul className="mt-2 space-y-1 font-mono text-xs leading-relaxed">
              {about.certifications.map((cert) => (
                <li key={cert.name}>
                  {cert.name} <span className="opacity-60">({cert.source})</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-wide" style={{ color: "#D6486B" }}>
              Tools
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {about.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold"
                  style={{ backgroundColor: "#D6486B1A", color: "#241F1A" }}
                >
                  {tool}
                </span>
              ))}
            </div>

            <p className="mt-5 font-display text-xs font-bold uppercase tracking-wide" style={{ color: "#D6486B" }}>
              Skills
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {about.coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold text-white"
                  style={{ backgroundColor: "#D6486B" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 font-display text-xs font-bold uppercase tracking-wide" style={{ color: "#D6486B" }}>
          Selected Work
        </p>
        <p className="mt-1 font-mono text-xs opacity-60">Five case studies and a hackathon build follow. Full write-ups at {siteUrl.replace("https://", "")}</p>
      </section>

      {/* PAGE 2+: projects flow naturally across however many pages they
          need — break-inside: avoid keeps a single card from splitting
          across a page boundary, rather than forcing an exact per-page
          count that drifts out of sync with real content height. */}
      <section className="flex flex-col gap-8">
        {ALL_PDF_PROJECTS.map((project) => (
          <article
            key={project.slug}
            className="flex gap-6 border-l-4 pl-6"
            style={{ borderColor: project.color, breakInside: "avoid" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              style={{ objectPosition: project.imagePosition ?? "center" }}
              className="h-[1.6in] w-[2.4in] shrink-0 rounded-lg object-cover shadow-sm"
            />
            <div className="flex-1">
              <h2 className="font-display text-2xl font-black uppercase tracking-tight">{project.title}</h2>
              <p className="font-mono text-xs font-semibold opacity-60">{project.role}</p>
              <p className="mt-2 font-mono text-sm leading-relaxed">{project.blurb}</p>
              <ul className="mt-3 space-y-1 font-mono text-xs leading-relaxed">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span style={{ color: project.color }}>•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 font-mono text-xs font-semibold" style={{ color: project.color }}>
                Full case study: {siteUrl.replace("https://", "")}{project.href}
              </p>
            </div>
          </article>
        ))}

        {/* A few motion pieces, filling the leftover space after the
            projects rather than leaving it blank. */}
        <div style={{ breakInside: "avoid" }}>
          <p className="font-display text-xs font-bold uppercase tracking-wide" style={{ color: "#D6486B" }}>
            Also: Motion Design
          </p>
          <div className="mt-3 flex gap-4">
            {GALLERY_ITEMS.map((item) => (
              <div key={item.src} className="flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.caption} className="h-[0.95in] w-full rounded-lg object-cover shadow-sm" />
                <p className="mt-1 font-mono text-[10px] leading-snug opacity-70">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
