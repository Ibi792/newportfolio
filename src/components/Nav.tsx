"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { nav, site } from "@/lib/content";

export function Nav({ bg, ink }: { bg: string; ink: string }) {
  return (
    <header className="sticky top-0 z-40" style={{ backgroundColor: bg, color: ink }}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
          <motion.span
            whileHover={{ rotate: -4, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="inline-block"
          >
            🎬
          </motion.span>
          {site.name}
          <span className="hidden font-sans text-sm font-normal opacity-70 sm:inline">
            {site.role}
          </span>
        </Link>
        <ul className="flex items-center gap-6 font-mono text-sm font-medium">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="underline-hover">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
