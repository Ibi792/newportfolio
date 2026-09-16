"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AssetImage } from "@/components/AssetImage";
import type { Project } from "@/lib/content";

export function ProjectCard({ project }: { project: Project }) {
  const href = `/projects/${project.slug}`;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="flex flex-col overflow-hidden rounded-2xl shadow-md sm:flex-row"
      style={{ backgroundColor: project.color, color: project.textColor }}
    >
      <div className="flex flex-1 flex-col justify-center gap-4 p-8">
        <p className="font-mono text-xs uppercase tracking-wide opacity-80">{project.category}</p>
        <h3 className="font-display text-3xl font-extrabold">{project.title}</h3>
        <p className="max-w-xs font-mono text-sm leading-relaxed opacity-90">{project.blurb}</p>
        <Link href={href} className="underline-hover font-mono text-sm font-semibold">
          View Project
        </Link>
      </div>
      <div className="relative flex-1">
        <AssetImage
          src={project.image}
          alt={project.title}
          color={project.textColor}
          className="h-56 w-full object-cover sm:h-full"
          label={`Add ${project.title} screenshot`}
        />
      </div>
    </motion.div>
  );
}
