import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { CirclePill } from "@/components/Pill";
import { ProjectCard } from "@/components/ProjectCard";
import { AssetImage } from "@/components/AssetImage";
import { TiltedFrame } from "@/components/TiltedFrame";
import { hero, projects, site, themes } from "@/lib/content";

export default function Home() {
  const theme = themes.home;

  return (
    <div className="min-h-screen">
      <Nav bg={theme.nav} ink={theme.navInk} />

      <section style={{ backgroundColor: theme.heroBg, color: theme.heroText }}>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-10 md:grid-cols-2 md:items-center md:py-20">
          <Reveal>
            <TiltedFrame rotate={-3} backdrop={`${theme.heroAccent}44`} className="mx-auto w-full max-w-md">
              <AssetImage
                src="/images/portrait.jpg"
                alt={site.name}
                color={theme.heroAccent}
                className="aspect-square w-full object-cover"
                label="Add /public/images/portrait.jpg"
              />
            </TiltedFrame>
            <p
              className="mx-auto mt-4 w-fit rounded-full px-4 py-1.5 font-mono text-xs font-semibold"
              style={{ backgroundColor: theme.heroText, color: theme.heroBg }}
            >
              {hero.portraitBadge}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-display text-lg font-bold uppercase tracking-wide" style={{ color: theme.heroAccent }}>
              {site.role}
            </p>
            <p className="mt-3 font-mono text-base" style={{ color: theme.heroAccent }}>
              {hero.eyebrow}
            </p>
            <h1 className="mt-1 font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
              {hero.lines.map((line, i) => (
                <span key={i} className="block">
                  {line.map((word, j) => (
                    <span
                      key={j}
                      className="mr-3 inline-block"
                      style={
                        word.variant === "outline"
                          ? {
                              WebkitTextStroke: `2px ${word.color}`,
                              color: "transparent",
                            }
                          : { color: word.color }
                      }
                    >
                      {word.text}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-md font-mono text-base">{hero.tagline}</p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <CirclePill href={hero.primaryCta.href} color={theme.heroAccent} size="lg">
                {hero.primaryCta.label}
              </CirclePill>
              <ul className="flex flex-col gap-2 font-mono text-sm font-semibold">
                {hero.secondaryCta.map((cta) => (
                  <li key={cta.href}>
                    <a href={cta.href} className="underline-hover">
                      {cta.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="flex justify-center pb-4">
          <a href="#work" aria-label="Scroll to selected work" className="animate-bounce text-2xl" style={{ color: theme.heroAccent }}>
            ↓
          </a>
        </div>
      </section>

      <section
        id="work"
        style={{ backgroundColor: theme.bodyBg, color: theme.bodyInk }}
        className="px-6 py-20 sm:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2
              className="mb-10 text-center font-display text-4xl font-black uppercase tracking-tight sm:text-5xl"
              style={{ color: theme.bodyAccent }}
            >
              Selected Work
            </h2>
          </Reveal>

          <RevealGroup className="flex flex-col gap-8" stagger={0.12}>
            {projects.slice(0, 3).map((project, i) => (
              <RevealItem key={project.slug}>
                <ProjectCard project={project} rotate={i % 2 === 0 ? -2 : 2} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Footer bg={theme.footer} text={theme.footerText} tagline={theme.tagline} />
    </div>
  );
}
