import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { CirclePill } from "@/components/Pill";
import { ProjectCard } from "@/components/ProjectCard";
import { AssetImage } from "@/components/AssetImage";
import { hero, projects, themes } from "@/lib/content";

export default function Home() {
  const theme = themes.home;

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.ink }} className="min-h-screen">
      <Nav bg={theme.nav} ink={theme.ink} />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-10 md:grid-cols-2 md:items-center md:py-24">
        <Reveal>
          <div className="mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border-4 border-white/40 shadow-lg">
            <AssetImage
              src="/images/portrait.jpg"
              alt="Isaac Isaac"
              color={theme.accent}
              className="h-full w-full object-cover"
              label="Add /public/images/portrait.jpg"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-mono text-lg" style={{ color: theme.accent }}>
            {hero.eyebrow}
          </p>
          <h1 className="mt-2 font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
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

          <RevealGroup className="mt-8 flex flex-wrap gap-6" stagger={0.1}>
            {hero.cta.map((cta) => (
              <RevealItem key={cta.href}>
                <CirclePill href={cta.href} color={cta.color}>
                  {cta.label}
                </CirclePill>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
        <Reveal>
          <h2
            className="mb-10 text-center font-display text-4xl font-black uppercase tracking-tight sm:text-5xl"
            style={{ color: theme.accent }}
          >
            Selected Work
          </h2>
        </Reveal>

        <RevealGroup className="flex flex-col gap-8" stagger={0.12}>
          {projects.slice(0, 3).map((project) => (
            <RevealItem key={project.slug}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <Footer bg={theme.footer} text={theme.footerText} tagline={theme.tagline} />
    </div>
  );
}
