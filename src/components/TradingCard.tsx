"use client";

import { useRef, useState, type MouseEvent } from "react";
import { AssetImage } from "@/components/AssetImage";
import { hero, site } from "@/lib/content";

const { card } = hero;

export function TradingCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [shine, setShine] = useState({ x: 50, y: 50, active: false });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setShine({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  }

  return (
    <div
      className="relative h-full w-full rounded-[22px] p-[3px] shadow-xl"
      style={{ background: `linear-gradient(135deg, ${card.holoColors.join(", ")})` }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setShine((s) => ({ ...s, active: false }))}
        className="relative h-full w-full overflow-hidden rounded-[19px] bg-[#FDF9EE] p-4 text-[#1E2A3A]"
      >
        {/* holo shine */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[19px] transition-opacity duration-300"
          style={{
            opacity: shine.active ? 0.5 : 0,
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, #ffffffaa, transparent 55%)`,
            mixBlendMode: "overlay",
          }}
        />

        {/* header */}
        <div className="flex items-center justify-between rounded-lg bg-[#F7DFA0] px-3 py-2">
          <p className="font-display text-lg font-black tracking-wide">{card.name}</p>
          <p className="font-mono text-xs font-bold opacity-70">LV {card.level}</p>
        </div>

        {/* portrait */}
        <div className="mt-3 overflow-hidden rounded-lg border border-black/10">
          <AssetImage
            src="/images/portrait.jpg"
            alt={site.name}
            color="#4A47B0"
            className="aspect-[16/10] w-full object-cover"
            label="Add /public/images/portrait.jpg — the park photo, cut out on the holo"
          />
        </div>

        {/* type tags */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {card.tags.map((tag) => (
            <span
              key={tag.label}
              className="rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-white"
              style={{ backgroundColor: tag.color }}
            >
              {tag.label}
            </span>
          ))}
          <span className="ml-auto rounded-full border border-black/20 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wide">
            {card.classYear}
          </span>
        </div>

        {/* moves */}
        <div className="mt-3 divide-y divide-black/10 rounded-lg border border-black/10">
          {card.moves.map((move) => (
            <div key={move.title} className="p-3">
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 flex-shrink-0 rounded-sm"
                  style={{ backgroundColor: move.color }}
                  aria-hidden
                />
                <p className="font-display text-sm font-bold">{move.title}</p>
                <p className="ml-auto font-mono text-sm font-bold">{move.power}</p>
              </div>
              <p className="mt-1 pl-5 font-mono text-xs leading-relaxed opacity-80">{move.detail}</p>
            </div>
          ))}
        </div>

        {/* flavor text */}
        <div className="mt-3 rounded-lg border border-black/10 bg-black/[0.03] px-3 py-2">
          <p className="font-mono text-xs italic leading-relaxed opacity-80">{card.flavorText}</p>
        </div>

        {/* footer */}
        <div className="mt-3 flex items-center justify-between font-mono text-[10px] font-semibold uppercase tracking-wide opacity-60">
          <span>{card.setInfo}</span>
          <span className="flex items-center gap-2">
            <span aria-hidden>{"★".repeat(card.rarity)}</span>
            <span className="rounded border border-black/20 px-1.5 py-0.5">Holo</span>
          </span>
        </div>
      </div>
    </div>
  );
}
