import Link from "next/link";
import { AssetImage } from "@/components/AssetImage";
import { TiltedFrame } from "@/components/TiltedFrame";
import { TiltCard } from "@/components/TiltCard";
import { TagPills } from "@/components/TagPills";
import type { Project } from "@/lib/content";

export function FeaturedProjectCard({ project }: { project: Project }) {
  const href = `/projects/${project.slug}`;

  return (
    <TiltCard maxTilt={4} className="rounded-2xl shadow-lg">
      <Link
        href={href}
        className="group flex flex-col items-center gap-10 rounded-2xl p-8 sm:flex-row sm:p-10"
        style={{ backgroundColor: project.color, color: project.textColor }}
      >
        <div className="flex flex-1 flex-col justify-center gap-4 self-start">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="inline-flex w-fit items-center gap-1 rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wide"
              style={{ backgroundColor: `${project.textColor}2E`, color: project.textColor }}
            >
              ★ Featured
            </span>
            <TagPills tags={project.tags} color={project.textColor} />
          </div>
          <h3 className="font-display text-4xl font-extrabold sm:text-5xl">{project.title}</h3>
          <p className="max-w-sm font-mono text-sm leading-relaxed opacity-90 sm:text-base">{project.blurb}</p>
          <span className="underline-hover w-fit font-mono text-sm font-semibold">Read the Case Study →</span>
        </div>
        <TiltedFrame rotate={-2} backdrop={`${project.textColor}33`} className="w-full flex-1">
          <AssetImage
            src={project.image}
            alt={project.title}
            color={project.textColor}
            className="h-64 w-full object-cover sm:h-80"
            label={`Add ${project.title} screenshot`}
          />
        </TiltedFrame>
      </Link>
    </TiltCard>
  );
}
