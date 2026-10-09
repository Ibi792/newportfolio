/**
 * Splits text on {{...}} and wraps the matched spans in the given
 * accent color — the shared inline-highlight syntax used across case
 * study copy and the About bio.
 */
export function renderHighlighted(text: string, accent: string) {
  return text.split(/\{\{(.+?)\}\}/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} style={{ color: accent }}>
        {part}
      </span>
    ) : (
      part
    )
  );
}
