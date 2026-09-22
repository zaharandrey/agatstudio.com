import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-fg ${className}`}
      aria-label="AGAT — home"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M4 41L14 29H38L44 41H4Z" fill="currentColor" className="text-fg" />
        <path
          d="M12 25L20 15H32L38 25H12Z"
          fill="currentColor"
          className="text-fg"
          opacity="0.62"
        />
        <path
          d="M19 11L24 4L29 11H19Z"
          fill="var(--color-accent)"
        />
      </svg>
      <span>
        AGAT
        <span className="text-fg-muted transition-colors group-hover:text-accent">.top</span>
      </span>
    </Link>
  );
}
