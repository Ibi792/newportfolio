"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AssetImage } from "@/components/AssetImage";
import { TiltedFrame } from "@/components/TiltedFrame";
import { TagPills } from "@/components/TagPills";
import type { Project } from "@/lib/content";

const MotionLink = motion.create(Link);

export function ProjectCard({ project, rotate = -2 }: { project: Project; rotate?: number }) {
  const href = `/projects/${project.slug}`;

  return (
    <MotionLink
      href={href}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex flex-col items-center gap-8 rounded-2xl p-8 shadow-md sm:flex-row sm:gap-10"
      style={{ backgroundColor: project.color, color: project.textColor }}
    >
      <div className="flex flex-1 flex-col justify-center gap-4 self-start">
        <TagPills tags={project.tags} color={project.textColor} />
        <h3 className="font-display text-3xl font-extrabold">{project.title}</h3>
        <p className="max-w-xs font-mono text-sm leading-relaxed opacity-90">{project.blurb}</p>
        <span className="underline-hover w-fit font-mono text-sm font-semibold">Read the Case Study →</span>
      </div>
      <TiltedFrame rotate={rotate} backdrop={`${project.textColor}33`} className="w-full flex-1">
        <AssetImage
          src={project.image}
          alt={project.title}
          color={project.textColor}
          className="h-56 w-full object-cover sm:h-64"
          label={`Add ${project.title} screenshot`}
        />
      </TiltedFrame>
    </MotionLink>
  );
}
