"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function CirclePill({
  href,
  color,
  children,
  size = "md",
}: {
  href: string;
  color: string;
  children: ReactNode;
  size?: "md" | "lg";
}) {
  const dimensions = size === "lg" ? "h-40 w-40 text-xl sm:h-44 sm:w-44" : "h-24 w-24 text-sm sm:h-28 sm:w-28";

  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 350, damping: 18 }}
    >
      <Link
        href={href}
        className={`flex items-center justify-center rounded-full font-bold shadow-sm ${dimensions}`}
        style={{ backgroundColor: color, color: "#1E2A3A" }}
      >
        {children}
      </Link>
    </motion.div>
  );
}

export function ImageOnlyPlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={
        "flex items-center justify-center border border-dashed border-black/20 bg-black/5 text-center text-xs font-mono text-black/50 " +
        (className ?? "")
      }
    >
      {label}
    </div>
  );
}
