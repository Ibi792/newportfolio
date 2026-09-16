"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Button({
  href,
  variant = "filled",
  bg,
  ink,
  children,
}: {
  href: string;
  variant?: "filled" | "outline";
  bg: string;
  ink: string;
  children: ReactNode;
}) {
  const style =
    variant === "filled"
      ? { backgroundColor: bg, color: ink }
      : { backgroundColor: "transparent", color: bg, border: `2px solid ${bg}` };

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm font-bold"
        style={style}
      >
        {children}
      </Link>
    </motion.div>
  );
}
