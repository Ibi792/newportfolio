import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, themes } from "@/lib/content";

export const metadata: Metadata = { title: "Projects — Isaac Isaac" };

export default function ProjectsPage() {
  const theme = themes.projects;

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.ink }} className="min-h-screen">
      <Nav bg={theme.nav} ink={theme.ink} />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 md:py-24">
        <Reveal>
          <h1
            className="font-display text-5xl font-black uppercase tracking-tight sm:text-6xl"
            style={{ color: theme.accent }}
          >
            Projects
          </h1>
        </Reveal>

        <RevealGroup className="mt-12 flex flex-col gap-8" stagger={0.1}>
          {projects.map((project) => (
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
