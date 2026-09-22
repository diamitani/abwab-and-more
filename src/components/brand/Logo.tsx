import { cn } from "@/lib/utils";

export function Cartouche({
  className,
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "ink";
}) {
  const stroke = tone === "gold" ? "#C4A574" : "#14110E";
  const fill = tone === "gold" ? "#C4A574" : "#14110E";
  return (
    <svg
      viewBox="0 0 88 240"
      className={cn("overflow-visible", className)}
      aria-hidden="true"
    >
      <rect
        x="18"
        y="8"
        width="52"
        height="168"
        rx="26"
        fill="none"
        stroke={stroke}
        strokeWidth="2.2"
      />
      <rect
        x="24"
        y="14"
        width="40"
        height="156"
        rx="20"
        fill="none"
        stroke={stroke}
        strokeWidth="0.9"
      />
      <text
        x="44"
        y="46"
        textAnchor="middle"
        fill={fill}
        fontFamily="Cormorant Garamond, Times New Roman, serif"
        fontSize="22"
        letterSpacing="0.18em"
      >
        A
      </text>
      <text
        x="44"
        y="72"
        textAnchor="middle"
        fill={fill}
        fontFamily="Cormorant Garamond, Times New Roman, serif"
        fontSize="22"
        letterSpacing="0.18em"
      >
        B
      </text>
      <text
        x="44"
        y="98"
        textAnchor="middle"
        fill={fill}
        fontFamily="Cormorant Garamond, Times New Roman, serif"
        fontSize="22"
        letterSpacing="0.18em"
      >
        W
      </text>
      <text
        x="44"
        y="124"
        textAnchor="middle"
        fill={fill}
        fontFamily="Cormorant Garamond, Times New Roman, serif"
        fontSize="22"
        letterSpacing="0.18em"
      >
        A
      </text>
      <text
        x="44"
        y="150"
        textAnchor="middle"
        fill={fill}
        fontFamily="Cormorant Garamond, Times New Roman, serif"
        fontSize="22"
        letterSpacing="0.18em"
      >
        B
      </text>
      <rect x="22" y="180" width="44" height="16" fill="none" stroke={stroke} strokeWidth="1.2" />
      <text
        x="44"
        y="192"
        textAnchor="middle"
        fill={fill}
        fontFamily="Cormorant Garamond, Times New Roman, serif"
        fontSize="9"
        letterSpacing="0.22em"
      >
        MORE
      </text>
      <line x1="30" y1="198" x2="58" y2="198" stroke={stroke} strokeWidth="1.2" />
      <circle cx="44" cy="214" r="6" fill="none" stroke={stroke} strokeWidth="1.6" />
      <line x1="44" y1="220" x2="44" y2="232" stroke={stroke} strokeWidth="1.6" />
      <line x1="36" y1="226" x2="52" y2="226" stroke={stroke} strokeWidth="1.6" />
    </svg>
  );
}

export function Wordmark({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "cream";
}) {
  return (
    <span
      className={cn(
        "font-display text-lg tracking-[0.18em] uppercase",
        tone === "cream" ? "text-cream" : "text-ink",
        className,
      )}
    >
      ABWAB & More
    </span>
  );
}
