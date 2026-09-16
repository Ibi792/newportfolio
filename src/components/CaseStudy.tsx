import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { AssetImage } from "@/components/AssetImage";
import { TiltedFrame } from "@/components/TiltedFrame";
import { footerText, paper, paperInk, themes, type CaseStudyData, type CaseStudySection } from "@/lib/content";

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
        {data.sections.map((section, i) => (
          <Reveal key={i} className={i === 0 ? undefined : "mt-16"}>
            <SectionBlock section={section} accent={accent} />
          </Reveal>
        ))}

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

function SectionHeading({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <h2 className="font-display text-2xl font-black uppercase tracking-tight sm:text-3xl" style={{ color: accent }}>
      {children}
    </h2>
  );
}

function ImageGrid({ images, accent }: { images: { src: string; label: string }[]; accent: string }) {
  return (
    <div className={`mt-6 grid gap-6 ${images.length > 1 ? "sm:grid-cols-2" : ""}`}>
      {images.map((img) => (
        <TiltedFrame key={img.src} rotate={-2} backdrop={`${accent}22`}>
          <AssetImage
            src={img.src}
            alt={img.label}
            color={accent}
            className="h-64 w-full object-cover sm:h-72"
            label={img.label}
          />
        </TiltedFrame>
      ))}
    </div>
  );
}

function SectionBlock({ section, accent }: { section: CaseStudySection; accent: string }) {
  switch (section.type) {
    case "intro":
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          <div className="mt-4 space-y-4 text-sm leading-relaxed sm:text-base">
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
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
                <p className="text-sm leading-relaxed sm:text-base">{row.value}</p>
              </div>
            ))}
          </div>
        </>
      );

    case "pills":
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          <RevealGroup className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3" stagger={0.06}>
            {section.items.map((item) => (
              <RevealItem key={item}>
                <div
                  className="rounded-full border px-4 py-3 text-center font-display text-sm font-semibold italic"
                  style={{ borderColor: `${accent}55`, color: accent }}
                >
                  {item}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </>
      );

    case "insightCards":
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          {section.intro.map((p, i) => (
            <p key={i} className="mt-4 text-sm leading-relaxed sm:text-base">
              {p}
            </p>
          ))}
          <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.08}>
            {section.cards.map((card) => (
              <RevealItem key={card.title}>
                <div className="rounded-xl bg-white/60 p-5">
                  <p
                    className="inline-block rounded-md px-3 py-1 font-display text-sm font-bold"
                    style={{ backgroundColor: `${accent}33`, color: accent }}
                  >
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed">{card.detail}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
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
            <p key={i} className="mt-4 text-sm leading-relaxed sm:text-base">
              {p}
            </p>
          ))}
          <RevealGroup className="mt-8 flex flex-col gap-4" stagger={0.08}>
            {section.cards.map((card) => (
              <RevealItem key={card.name}>
                <div className="rounded-xl p-6" style={{ backgroundColor: card.color, color: "#F4F2FA" }}>
                  <p className="font-display text-xl font-bold">{card.name}</p>
                  <p className="mt-2 text-sm leading-relaxed opacity-90">{card.detail}</p>
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
            <p key={i} className="mt-4 text-sm leading-relaxed sm:text-base">
              {p}
            </p>
          ))}
          <RevealGroup className="mt-8 flex flex-wrap gap-4" stagger={0.06}>
            {section.goals.map((goal) => (
              <RevealItem key={goal.title}>
                <div className="rounded-xl bg-white/60 px-5 py-4">
                  <p className="font-display text-sm font-bold" style={{ color: accent }}>
                    {goal.title}
                  </p>
                  <p className="mt-1 text-xs opacity-80">{goal.detail}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          {section.outro?.map((p, i) => (
            <p key={i} className="mt-8 text-sm leading-relaxed sm:text-base">
              {p}
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
            <p key={i} className="mt-4 text-sm leading-relaxed sm:text-base">
              {p}
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
            <p key={i} className="mt-4 text-sm leading-relaxed sm:text-base">
              {p}
            </p>
          ))}
          <div className="mt-6 space-y-6">
            {section.items.map((item) => (
              <div key={item.label} className="grid gap-2 sm:grid-cols-[200px_1fr]">
                <p className="font-display text-sm font-bold" style={{ color: accent }}>
                  {item.label}
                </p>
                <p className="text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          {section.outro?.map((p, i) => (
            <p key={i} className="mt-8 text-sm leading-relaxed sm:text-base">
              {p}
            </p>
          ))}
        </>
      );

    case "reflection":
      return (
        <>
          <SectionHeading accent={accent}>{section.heading}</SectionHeading>
          {section.intro.map((p, i) => (
            <p key={i} className="mt-4 text-sm leading-relaxed sm:text-base">
              {p}
            </p>
          ))}
          <div className="mt-6 space-y-4">
            {section.lessons.map((lesson) => (
              <p key={lesson.title} className="text-sm leading-relaxed sm:text-base">
                <span className="font-display font-bold" style={{ color: accent }}>
                  {lesson.title}
                </span>{" "}
                {lesson.detail}
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
