import Link from "next/link";
import { AssetImage } from "@/components/AssetImage";
import { TiltedFrame } from "@/components/TiltedFrame";
import { TiltCard } from "@/components/TiltCard";
import { TagPills } from "@/components/TagPills";
import type { Project } from "@/lib/content";

export function CompactProjectCard({ project, rotate = -2 }: { project: Project; rotate?: number }) {
  const href = `/projects/${project.slug}`;

  return (
    <TiltCard maxTilt={7} className="h-full rounded-2xl shadow-md">
      <Link
        href={href}
        className="group flex h-full flex-col gap-4 rounded-2xl p-6"
        style={{ backgroundColor: project.color, color: project.textColor }}
      >
        <TiltedFrame rotate={rotate} backdrop={`${project.textColor}33`}>
          <AssetImage
            src={project.image}
            alt={project.title}
            color={project.textColor}
            className="h-40 w-full object-cover"
            label={`Add ${project.title} screenshot`}
          />
        </TiltedFrame>
        <div>
          <TagPills tags={project.tags} color={project.textColor} />
          <h3 className="mt-2 font-display text-xl font-extrabold">{project.title}</h3>
          <p className="mt-2 font-mono text-xs leading-relaxed opacity-90">{project.blurb}</p>
          <span className="underline-hover mt-3 inline-block font-mono text-xs font-semibold">
            Read the Case Study →
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}
