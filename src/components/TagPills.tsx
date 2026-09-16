export function TagPills({ tags, color }: { tags: string[]; color: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide"
          style={{ backgroundColor: `${color}2E`, color }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
