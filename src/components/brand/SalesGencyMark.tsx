import { cn } from "@/lib/utils";

export function SalesGencyMark({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "reversed";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-sans font-extrabold tracking-tight",
        tone === "reversed" ? "text-white" : "text-sg-ink",
        className,
      )}
    >
      SalesGency<span className="text-sg-cyan" aria-hidden="true">.</span>
    </span>
  );
}
