import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { AssetImage } from "@/components/AssetImage";
import { TiltedFrame } from "@/components/TiltedFrame";
import { TagPills } from "@/components/TagPills";
import { themes, type Project } from "@/lib/content";

export function ProjectStub({ project }: { project: Project }) {
  const theme = themes.caseStudy;

  return (
    <div style={{ backgroundColor: theme.bodyBg, color: theme.bodyInk }} className="min-h-screen">
      <Nav bg={project.color} ink={project.textColor} />

      <section style={{ backgroundColor: project.color, color: project.textColor }} className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <TagPills tags={project.tags} color={project.textColor} />
            <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-lg font-mono text-base">{project.blurb}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <TiltedFrame rotate={-2} backdrop={`${project.textColor}33`} className="mt-10">
              <AssetImage
                src={project.image}
                alt={project.title}
                color={project.textColor}
                className="h-80 w-full object-cover sm:h-[420px]"
                label={`Add ${project.title} screenshot`}
              />
            </TiltedFrame>
          </Reveal>

          {project.externalUrl && (
            <Reveal delay={0.15}>
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-black/10 px-6 py-3 font-mono text-sm font-semibold transition hover:bg-black/20"
              >
                View Project ↗
              </a>
            </Reveal>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-sm leading-relaxed sm:px-10 sm:text-base">
        <Reveal>
          <p className="font-mono opacity-70">
            A full case study for {project.title} — problem, process, and outcome — is coming soon,
            written to the same depth as the Four Stories case study. In the meantime, reach out
            directly and I&apos;m happy to walk through the work.
          </p>
        </Reveal>
      </section>

      <Footer bg={theme.footer} text={theme.footerText} tagline={theme.tagline} />
    </div>
  );
}
