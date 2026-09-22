import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/proposal")({ component: ProposalPage });

const WEBSITE_SCOPE = [
  [
    "Continue the build",
    "This live mockup is the starting point — not a throwaway. We finish collections, product stories, atelier, quote, and the concierge, then take it to production quality.",
  ],
  [
    "Three design revisions",
    "Kickoff pass, content pass, pre-launch pass. Each is a structured review — not unlimited tinkering. The catalog language stays the north star.",
  ],
  [
    "Additional content",
    "We connect further photography, finishes, kitchen and dressing-room stories, and any copy you supply so the site is a working catalog, not a sample.",
  ],
  [
    "Domain and backend transfer",
    "Launch on your domain. Hand the project to your hosting and backend, with environment, DNS notes, and a clean repository — the site becomes yours.",
  ],
  [
    "Two to three meetings",
    "Kickoff, mid-build review, launch handoff. Short, decisive, with the mockup on the table so nothing is abstract.",
  ],
];

const ENGINE_SCOPE = [
  [
    "Quote and inbound AI",
    "On-site concierge that knows the catalog, qualifies the project, and captures every inbound — web, after hours, first inquiry.",
  ],
  [
    "CRM wiring",
    "Leads, quote briefs, and conversation context written into your system. No platform tax. You own the records.",
  ],
  [
    "Daily reports",
    "A morning digest: new inquiries, estimates issued, unanswered threads, and what needs a human next.",
  ],
  [
    "Auto-responder",
    "Every lead gets a timely, on-brand first reply so no architect or homeowner waits on a missed call.",
  ],
];

function ProposalPage() {
  return (
    <SiteShell>
      <article className="bg-sg-black text-cream">
        <div className="mx-auto max-w-3xl px-5 pt-28 pb-16 sm:px-8">
          <p className="text-[10px] tracking-[0.36em] text-sg-gold uppercase">
            SalesGency · in partnership with
          </p>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
            <img
              src="/images/agency/uysg-pegasus.png"
              alt="Unleash Your Sales Greatness — winged horse on a red shield"
              width={112}
              height={92}
              className="h-24 w-auto shrink-0 object-contain outline-none sm:h-28"
            />
            <div>
              <p className="font-display text-3xl leading-[0.95] tracking-[0.08em] text-sg-gold uppercase sm:text-4xl">
                Unleash your
                <br />
                sales greatness
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
                A proposal to finish ABWAB & More’s digital house, transfer it
                to their domain, and install a quote-and-lead engine in their
                stack.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 border-y border-sg-gold/25 py-5 sm:grid-cols-4">
            {[
              ["$10,000", "Finished engagement"],
              ["3", "Design revisions"],
              ["2–3", "Working meetings"],
              ["Yours", "Domain & CRM"],
            ].map(([stat, label]) => (
              <div key={label}>
                <p className="font-display text-2xl text-sg-gold">{stat}</p>
                <p className="mt-1 text-[10px] tracking-[0.18em] text-cream/55 uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[11px] tracking-[0.32em] text-bronze uppercase">
            Confidential · September 2026 · Prepared for ABWAB & More
          </p>
          <h1 className="font-display mt-4 text-5xl leading-[0.95] sm:text-6xl">
            Finish the house.
            <br />
            Wire the inbound.
          </h1>
        </div>
      </article>

      <div className="bg-cream">
        <div className="mx-auto max-w-3xl space-y-14 px-5 py-16 sm:px-8">
          <section className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-[11px] tracking-[0.22em] text-bronze uppercase">
                Prepared for
              </h2>
              <p className="font-display mt-2 text-2xl text-ink">ABWAB & More</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Doors, kitchens, dressing rooms. Crafted with integrity.
                Designed to last. This live mockup is the sample of work.
              </p>
            </div>
            <div>
              <h2 className="text-[11px] tracking-[0.22em] text-bronze uppercase">
                Prepared by
              </h2>
              <p className="font-display mt-2 text-2xl text-ink">SalesGency</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                AI revenue workflows installed in your stack — in partnership
                with Unleash Your Sales Greatness. Helping take the fear out of
                selling.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl text-ink">The opportunity</h2>
            <p className="mt-3 text-muted leading-relaxed">
              The catalog already has a language. The mockup already has a
              house. What remains is to finish it, put it on your domain, and
              make sure every inbound — a midnight quote, a showroom follow-up,
              an architect’s first note — lands in your CRM with a reply already
              sent.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We do not sell a rented platform. The site, the agent, and the
              records are yours.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-ink">
              01 · The website · $7,000
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              Continue this build through launch. Three design revisions.
              Additional content connected. Two to three meetings. Transfer to
              your domain and backend.
            </p>
            <ol className="mt-6 space-y-5">
              {WEBSITE_SCOPE.map(([title, copy], i) => (
                <li key={title} className="grid grid-cols-[48px_1fr] gap-4">
                  <span className="font-display text-2xl text-bronze">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm tracking-[0.16em] text-ink uppercase">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="font-display text-3xl text-ink">
              02 · The lead engine · $3,000
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              A chat AI that handles quotes and inbound leads, wired into your
              CRM, with daily reports and an auto-responder — so the atelier
              never starts from a blank inbox.
            </p>
            <ol className="mt-6 space-y-5">
              {ENGINE_SCOPE.map(([title, copy], i) => (
                <li key={title} className="grid grid-cols-[48px_1fr] gap-4">
                  <span className="font-display text-2xl text-sg-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm tracking-[0.16em] text-ink uppercase">
                      {title}
                    </h3>
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
                [
                  "Website",
                  "Continue the mockup, 3 design revisions, additional content, 2–3 meetings, domain and backend transfer",
                  "$7,000",
                ],
                [
                  "Chat AI & lead system",
                  "Quotes, inbound leads, CRM wiring, daily reports, auto-responder",
                  "$3,000",
                ],
              ].map(([item, note, price]) => (
                <div key={item} className="flex items-baseline justify-between gap-4 py-4">
                  <div>
                    <p className="text-ink">{item}</p>
                    <p className="text-sm text-muted">{note}</p>
                  </div>
                  <p className="shrink-0 font-display text-xl text-ink">{price}</p>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-4 py-4">
                <p className="font-display text-2xl text-ink">Total</p>
                <p className="font-display text-3xl text-ink">$10,000</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted">
              One engagement. No monthly platform fee in this figure. Hosting
              on your account after transfer. Further care, if wanted, is a
              separate conversation after launch.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-ink">How we work</h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
              <li>Meeting 1 — kickoff: domain, CRM, content, first design revision.</li>
              <li>Meeting 2 — mid-build: content connected, second revision, lead-flow review.</li>
              <li>Meeting 3 — launch: third revision, transfer, auto-responder live.</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              Typical path from approval to public launch: three to four weeks.
              The mockup you are standing in is already the first stretch of
              work.
            </p>
          </section>

          <section className="border border-sand bg-surface p-8">
            <div className="mb-6 bg-sg-black px-4 py-3">
              <img
                src="/images/agency/uysg-lockup.png"
                alt="Unleash Your Sales Greatness"
                width={640}
                height={160}
                className="h-14 w-auto max-w-full object-contain object-left outline-none"
              />
            </div>
            <h2 className="font-display text-3xl text-ink">A request</h2>
            <p className="mt-4 text-muted leading-relaxed">
              If this house feels like yours, we ask to finish it. $7,000 to
              complete the site, revise it three times, connect your content,
              meet two or three times, and move it onto your domain. $3,000 to
              put a quote-and-lead AI in your CRM with daily reports and an
              auto-responder. $10,000 total.
            </p>
            <p className="mt-4 text-sm tracking-[0.14em] text-ink uppercase">
              SalesGency · Unleash Your Sales Greatness
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
