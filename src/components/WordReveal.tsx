type WordRevealProps = {
  text: string;
  className?: string;
  /** word index to start the gradient highlight from */
  highlightFrom?: number;
};

/**
 * Animates a headline word-by-word on mount using staggered CSS animation.
 * Each word gets `--i` for its stagger index. Words from `highlightFrom`
 * onward render with the brand gradient.
 */
export default function WordReveal({
  text,
  className = "",
  highlightFrom = -1,
}: WordRevealProps) {
  const words = text.split(" ");
  return (
    <span className={`word-reveal ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          style={{ ["--i" as string]: i }}
          className={
            highlightFrom >= 0 && i >= highlightFrom ? "th-gradient-text" : ""
          }
          aria-hidden
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}
