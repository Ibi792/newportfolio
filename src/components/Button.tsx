"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

export function Button({
  href,
  variant = "filled",
  bg,
  ink,
  accent,
  children,
}: {
  href: string;
  variant?: "filled" | "outline";
  bg: string;
  ink: string;
  accent: string;
  children: ReactNode;
}) {
  const style =
    variant === "filled"
      ? { backgroundColor: bg, color: ink }
      : { backgroundColor: "transparent", color: bg, border: `2px solid ${bg}` };

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="group inline-block">
      <Link
        href={href}
        className="relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 font-display text-sm font-bold"
        style={style}
      >
        <span
          className="absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
          style={{ backgroundColor: accent }}
          aria-hidden
        />
        <span
          className="relative z-10 inline-flex items-center gap-2 transition-colors duration-300 group-hover:[color:var(--btn-hover-ink)]"
          style={{ "--btn-hover-ink": ink } as CSSProperties}
        >
          {children}
        </span>
      </Link>
    </motion.div>
  );
}
