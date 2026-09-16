"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function CirclePill({
  href,
  color,
  children,
}: {
  href: string;
  color: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 350, damping: 18 }}
    >
      <Link
        href={href}
        className="flex h-32 w-32 items-center justify-center rounded-full text-lg font-bold shadow-sm sm:h-36 sm:w-36"
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
