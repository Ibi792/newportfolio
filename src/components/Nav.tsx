"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { nav, site } from "@/lib/content";

export function Nav({ bg, ink }: { bg: string; ink: string }) {
  return (
    <header className="sticky top-0 z-40" style={{ backgroundColor: bg, color: ink }}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-1.5 whitespace-nowrap font-display text-sm font-extrabold tracking-tight sm:gap-2 sm:text-lg"
        >
          <motion.span
            whileHover={{ rotate: -4, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="inline-block shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="" className="h-7 w-7 object-contain sm:h-9 sm:w-9" />
          </motion.span>
          <span className="sm:hidden">{site.name.split(" ")[0]}</span>
          <span className="hidden sm:inline">{site.name}</span>
          <span className="hidden font-sans text-sm font-normal opacity-70 md:inline">
            {site.role}
          </span>
        </Link>
        <ul className="flex items-center gap-3 font-mono text-xs font-medium sm:gap-6 sm:text-sm">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="underline-hover">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-hover"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
