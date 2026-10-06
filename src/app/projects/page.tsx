import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { MiniCaseStudy } from "@/components/MiniCaseStudy";
import { projects, themes } from "@/lib/content";

export const metadata: Metadata = { title: "Projects · Isaac Isaac" };

export default function ProjectsPage() {
  const theme = themes.projects;

  return (
    <div className="min-h-screen">
      <Nav bg={theme.nav} ink={theme.navInk} />

      <section style={{ backgroundColor: theme.heroBg, color: theme.heroText }} className="px-6 py-14 sm:px-10">
        <Reveal className="mx-auto max-w-6xl">
          <h1 className="font-display text-5xl font-black uppercase tracking-tight sm:text-6xl" style={{ color: theme.heroAccent }}>
            Projects
          </h1>
        </Reveal>
      </section>

      <section style={{ backgroundColor: theme.bodyBg, color: theme.bodyInk }} className="px-6 py-16 sm:px-10">
        <RevealGroup className="mx-auto flex max-w-6xl flex-col gap-8" stagger={0.1}>
          {projects.map((project, i) => (
            <RevealItem key={project.slug}>
              <ProjectCard project={project} rotate={i % 2 === 0 ? -2 : 2} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mx-auto mt-16 max-w-6xl">
          <div className="flex items-center gap-4">
            <p className="shrink-0 font-mono text-xs font-semibold uppercase tracking-wide opacity-50">
              Smaller Projects
            </p>
            <div className="h-px flex-1" style={{ backgroundColor: `${theme.bodyInk}22` }} aria-hidden />
          </div>
          <p className="mt-2 max-w-xl font-mono text-sm opacity-70">
            Quicker, self-scoped work that didn&apos;t need a full case study, but might still be worth a look.
          </p>

          <div className="mt-6">
            <MiniCaseStudy />
          </div>
        </Reveal>
      </section>

      <Footer bg={theme.footer} text={theme.footerText} tagline={theme.tagline} />
    </div>
  );
}
