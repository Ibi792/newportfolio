import { SwipeHighlight } from "@/components/SwipeHighlight";

/**
 * Splits text on {{...}} and wraps the matched spans in a SwipeHighlight —
 * the shared inline-highlight syntax used across case study copy and the
 * About bio.
 */
export function renderHighlighted(text: string, accent: string) {
  return text.split(/\{\{(.+?)\}\}/g).map((part, i) =>
    i % 2 === 1 ? (
      <SwipeHighlight key={i} accent={accent}>
        {part}
      </SwipeHighlight>
    ) : (
      part
    )
  );
}
