import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, projects } from "@/lib/content";
import { CaseStudy } from "@/components/CaseStudy";
import { ProjectStub } from "@/components/ProjectStub";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.title} — Isaac Isaac` : "Project — Isaac Isaac" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const caseStudy = caseStudies[project.slug];
  if (caseStudy) {
    return <CaseStudy project={project} data={caseStudy} />;
  }

  return <ProjectStub project={project} />;
}
