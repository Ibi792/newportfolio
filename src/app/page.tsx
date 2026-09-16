import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { FlipCard } from "@/components/FlipCard";
import { TradingCard } from "@/components/TradingCard";
import { FeaturedProjectCard } from "@/components/FeaturedProjectCard";
import { CompactProjectCard } from "@/components/CompactProjectCard";
import { AssetImage } from "@/components/AssetImage";
import { TiltedFrame } from "@/components/TiltedFrame";
import { hero, projects, site, themes } from "@/lib/content";

export default function Home() {
  const theme = themes.home;

  return (
    <div className="min-h-screen">
      <Nav bg={theme.nav} ink={theme.navInk} />

      <section style={{ backgroundColor: theme.heroBg, color: theme.heroText }}>
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-16 sm:px-10 md:grid-cols-2 md:items-center md:py-20">
          <Reveal>
            <span
              className="inline-block -rotate-2 rounded-md px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wide shadow-sm"
              style={{ backgroundColor: theme.heroAccent, color: theme.heroBg }}
            >
              {hero.badge}
            </span>

            <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
              {hero.headline.map((line, i) => (
                <span
                  key={i}
                  className="block"
                  style={{ color: line.tone === "accent" ? theme.heroAccent : theme.heroText }}
                >
                  {line.text}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-md font-mono text-base">{hero.tagline}</p>
            <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-wide opacity-70">
              {hero.metaTag}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={hero.primaryCta.href} variant="filled" bg={theme.heroText} ink={theme.heroBg}>
                {hero.primaryCta.label} ↓
              </Button>
              <Button href={hero.secondaryCta.href} variant="outline" bg={theme.heroText} ink={theme.heroBg}>
                {hero.secondaryCta.label}
              </Button>
            </div>

            <div
              className="mt-6 flex max-w-md items-start gap-3 rounded-lg border-2 border-dashed px-4 py-3"
              style={{ borderColor: `${theme.heroText}55` }}
            >
              <span
                className="flex-shrink-0 rounded px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-wide"
                style={{ backgroundColor: theme.heroAccent, color: theme.heroBg }}
              >
                Tip
              </span>
              <p className="font-mono text-xs leading-relaxed opacity-80">{hero.tip}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-sm">
              <FlipCard
                ariaLabel="Flip to see a trading-card style CV summary"
                className="h-[655px] w-full sm:h-[680px]"
                front={
                  <TiltedFrame rotate={-3} backdrop={`${theme.heroAccent}44`} className="h-full w-full">
                    <AssetImage
                      src="/images/portrait.jpg"
                      alt={site.name}
                      color={theme.heroAccent}
                      className="h-full w-full object-cover"
                      label="Add /public/images/portrait.jpg — click flips to CV card"
                    />
                  </TiltedFrame>
                }
                back={<TradingCard />}
              />

              <div
                className="absolute -left-6 top-10 z-10 flex h-16 w-16 -rotate-6 items-center justify-center rounded-full border-2 border-black/10 bg-[#F7DFA0] text-center font-mono text-[10px] font-black uppercase leading-tight text-[#1E2A3A] shadow-md"
                aria-hidden
              >
                {hero.card.portraitBadge}
              </div>
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

          <Reveal delay={0.05}>
            <FeaturedProjectCard project={projects[0]} />
          </Reveal>

          <RevealGroup className="mt-8 grid gap-8 sm:grid-cols-2" stagger={0.1}>
            {projects.slice(1, 3).map((project, i) => (
              <RevealItem key={project.slug}>
                <CompactProjectCard project={project} rotate={i % 2 === 0 ? -2 : 2} />
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-10 text-center">
            <Link
              href="/projects"
              className="underline-hover font-display text-lg font-bold"
              style={{ color: theme.bodyAccent }}
            >
              View All Projects →
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer bg={theme.footer} text={theme.footerText} tagline={theme.tagline} />
    </div>
  );
}
