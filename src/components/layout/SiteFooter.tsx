import { Link } from "@tanstack/react-router";
import { Cartouche } from "@/components/brand/Logo";
import { SITE } from "@/lib/catalog";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Cartouche className="h-16 w-6" tone="gold" />
            <div>
              <p className="font-display text-xl tracking-[0.18em] uppercase">
                {SITE.name}
              </p>
              <p className="mt-1 text-xs tracking-[0.2em] text-bronze uppercase">
                {SITE.blurb}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
            {SITE.philosophy}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs tracking-[0.22em] text-bronze uppercase">Visit</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>
              <Link to="/collections" className="hover:text-bronze">
                Collections
              </Link>
            </li>
            <li>
              <Link to="/atelier" className="hover:text-bronze">
                Atelier
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-bronze">
                About
              </Link>
            </li>
            <li>
              <Link to="/quote" className="hover:text-bronze">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs tracking-[0.22em] text-bronze uppercase">Atelier</p>
          <p className="mt-4 text-sm leading-relaxed text-cream/80">
            {SITE.cities.join(" · ")}
            <br />
            By appointment
            <br />
            <a className="hover:text-bronze" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
          <p className="mt-6 text-xs tracking-[0.16em] text-cream/40 uppercase">
            Built with integrity. Designed to last.
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} ABWAB & More. All rights reserved.</p>
          <Link to="/proposal" className="tracking-[0.14em] uppercase hover:text-bronze">
            SalesGency proposal
          </Link>
        </div>
      </div>
    </footer>
  );
}
