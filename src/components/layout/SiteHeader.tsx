import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Cartouche } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/collections", label: "Collections" },
  { to: "/atelier", label: "Atelier" },
  { to: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-ink/90 text-cream backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Cartouche className="h-12 w-5" tone="gold" />
          <span className="font-display text-base tracking-[0.22em] uppercase sm:text-lg">
            ABWAB & More
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-xs tracking-[0.22em] uppercase transition-opacity duration-150 hover:opacity-70",
                pathname.startsWith(item.to) ? "text-bronze" : "text-cream",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="outline" size="sm" className="uppercase tracking-[0.16em]">
            <Link to="/quote">Request a Quote</Link>
          </Button>
        </nav>

        <button
          type="button"
          className="relative flex size-11 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-bronze/20 bg-ink px-5 py-6 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center text-sm tracking-[0.18em] uppercase"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-2 flex h-12 items-center justify-center bg-bronze text-ink text-sm tracking-[0.18em] uppercase"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
