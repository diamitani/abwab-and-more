import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { Cartouche } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/proposal")({ component: ProposalPage });

function ProposalPage() {
  return (
    <SiteShell>
      <article className="bg-ink text-cream">
        <div className="mx-auto max-w-3xl px-5 pt-32 pb-20 sm:px-8">
          <Cartouche className="h-28 w-10" tone="gold" />
          <p className="mt-8 text-[11px] tracking-[0.32em] text-bronze uppercase">
            Confidential · September 2026
          </p>
          <h1 className="font-display mt-4 text-5xl leading-[0.95] sm:text-6xl">
            A digital house for ABWAB & More
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-cream/75">
            A proposal to design, build, and tend the public face of the atelier —
            a catalog the equal of the millwork, and a quote concierge that
            treats every first inquiry with the same care as a drawing.
          </p>
        </div>
      </article>

      <div className="bg-cream">
        <div className="mx-auto max-w-3xl space-y-14 px-5 py-16 sm:px-8">
          <section>
            <h2 className="font-display text-3xl text-ink">Prepared for</h2>
            <p className="mt-3 text-muted leading-relaxed">
              ABWAB & More — doors, kitchens, dressing rooms. Crafted with
              integrity. Designed to last. This document accompanies the live
              mockup you are viewing: the site itself is the sample of work.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-ink">The opportunity</h2>
            <p className="mt-3 text-muted leading-relaxed">
              The catalog is already a complete language — cartouche, cream
              stone, walnut, measured type. What is missing is a house for that
              language on the web: a place an architect can send a client, a
              place a homeowner can specify a door at eleven at night, and a
              place the atelier can answer without waiting on a missed call.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              This mockup is that house. Collections, product pages, atelier
              notes, a quote form, and an on-site concierge that knows the
              catalog and can issue a preliminary estimate.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-ink">Scope of work</h2>
            <ol className="mt-6 space-y-5">
              {[
                [
                  "Marketing site",
                  "Home, collections with filters, product stories, atelier / performance, about, quote. Mobile-first. Brand-faithful to the printed catalog.",
                ],
                [
                  "Quote concierge",
                  "An on-site agent trained on your collections, construction, finishes, and lead times. It qualifies the project, then hands a clean brief to the atelier.",
                ],
                [
                  "Care",
                  "Hosting, uptime, content updates, catalog additions, concierge tuning, and small design amendments each month.",
                ],
              ].map(([title, copy], i) => (
                <li key={title} className="grid grid-cols-[48px_1fr] gap-4">
                  <span className="font-display text-2xl text-bronze">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm tracking-[0.16em] text-ink uppercase">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="font-display text-3xl text-ink">Investment</h2>
            <div className="mt-6 divide-y divide-sand border-y border-sand">
              {[
                ["Website build", "Design, front end, catalog, quote flow", "$7,000"],
                ["Quote concierge", "On-site agent, catalog training, handoff", "$3,000"],
                ["Monthly care", "Hosting, updates, concierge, small amendments", "$1,000 / mo"],
              ].map(([item, note, price]) => (
                <div key={item} className="flex items-baseline justify-between gap-4 py-4">
                  <div>
                    <p className="text-ink">{item}</p>
                    <p className="text-sm text-muted">{note}</p>
                  </div>
                  <p className="shrink-0 font-display text-xl text-ink">{price}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted">
              Launch investment: $10,000. Thereafter $1,000 each month, cancellable
              with thirty days’ notice after the first quarter.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-ink">What is included</h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
              <li>Brand system taken from the printed catalog — not a template.</li>
              <li>Door, kitchen, and dressing-room collections with filters.</li>
              <li>Product pages with materials, finishes, and customization.</li>
              <li>Quote form and live concierge on every page.</li>
              <li>Responsive layout, from a phone in a showroom to a desktop in the office.</li>
              <li>Handoff notes so the atelier can add collections without starting over.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl text-ink">Timeline</h2>
            <p className="mt-3 text-muted leading-relaxed">
              The mockup you are reading is already the first two weeks of work.
              Remaining: photography direction if you prefer studio stills over
              catalog crops, copy in your voice, a production domain, and a
              concierge connected to the mailbox you actually read.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Typical path from approval to public launch: three to four weeks.
            </p>
          </section>

          <section className="border border-sand bg-surface p-8">
            <h2 className="font-display text-3xl text-ink">A request</h2>
            <p className="mt-4 text-muted leading-relaxed">
              If this house feels like yours, we ask to build it. $7,000 for the
              site, $3,000 for the concierge, $1,000 each month to keep both
              exacting. Walk the collections. Open the concierge. Then tell us
              to proceed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="ink" className="uppercase tracking-[0.16em]">
                <Link to="/">Walk the site</Link>
              </Button>
              <Button asChild variant="cream" className="uppercase tracking-[0.16em]">
                <Link to="/quote">Leave a note</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </SiteShell>
  );
}
