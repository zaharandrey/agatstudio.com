type Props = {
  from: string;
  to: string;
  pattern: "strata" | "grid" | "wave" | "dot";
  className?: string;
};

export default function CoverArt({ from, to, pattern, className = "" }: Props) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 h-full w-full opacity-70" preserveAspectRatio="none">
        <defs>
          <pattern id={`p-${pattern}-${from}`} width="28" height="28" patternUnits="userSpaceOnUse">
            {pattern === "grid" && (
              <path d="M28 0H0V28" fill="none" stroke="var(--color-fg)" strokeOpacity="0.08" />
            )}
            {pattern === "dot" && <circle cx="2" cy="2" r="1.4" fill="var(--color-fg)" fillOpacity="0.14" />}
            {pattern === "wave" && (
              <path d="M0 14 Q7 4 14 14 T28 14" fill="none" stroke="var(--color-fg)" strokeOpacity="0.1" />
            )}
            {pattern === "strata" && (
              <path d="M0 24 L14 8 H28" fill="none" stroke="var(--color-fg)" strokeOpacity="0.1" />
            )}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#p-${pattern}-${from})`} />
      </svg>
      <div
        className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--color-accent)" }}
      />
    </div>
  );
}
