import { createFileRoute, Link } from "@tanstack/react-router";
import { SalesGencyMark } from "@/components/brand/SalesGencyMark";

export const Route = createFileRoute("/proposal")({ component: ProposalPage });

const PDF_HREF = "/abwab-salesgency-proposal.pdf";

const WEBSITE = [
  [
    "Continue this mockup",
    "The live site is the starting point. We finish collections, product pages, atelier, about, and quote — then take it to production.",
  ],
  [
    "Three design revisions",
    "Kickoff, content, and pre-launch. Each is a structured review. The catalog language stays the source of truth.",
  ],
  [
    "Additional content",
    "Photography, finishes, kitchen and dressing-room stories, and copy you supply — connected so this is a working catalog, not a sample.",
  ],
  [
    "Your domain and backend",
    "Launch on your domain. Transfer hosting, environment, and the repository. The site and the records stay yours.",
  ],
  [
    "Two to three meetings",
    "Diagnose, build review, launch. Short sessions with the mockup on the table so nothing is abstract.",
  ],
];

const ENGINE = [
  [
    "Inbound conversion",
    "Qualify, enrich and route every quote and inbound lead to the right owner, with the right next action.",
  ],
  [
    "Installed in your CRM",
    "Leads, quote briefs and conversation context written into your system. We do not replace your stack.",
  ],
  [
    "Daily reports",
    "A morning digest: new inquiries, estimates issued, unanswered threads, and what needs a person next.",
  ],
  [
    "Auto-responder",
    "Every inbound gets a timely first reply so no architect or homeowner waits on a missed call.",
  ],
];

const PRESENTERS = [
  ["Patrick Diamitani", "SalesGency", "GTM AI and automation. Delivery owner for the site, CRM wiring, and launch."],
  [
    "Geraldy Jean-Baptiste",
    "Unleash Your Sales Greatness",
    "Sales process and inbound motion. Partner on how quotes get worked once they land.",
  ],
];

function ProposalPage() {
  return (
    <div className="min-h-svh bg-sg-mist font-sg text-sg-slate">
      <header className="border-b border-sg-line bg-sg-mist print:hidden">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
          <SalesGencyMark className="text-xl" />
          <div className="flex items-center gap-5">
            <a
              href={PDF_HREF}
              className="text-sm font-medium text-sg-action hover:underline"
            >
              Download PDF
            </a>
            <Link
              to="/"
              className="text-sm font-medium text-sg-action hover:underline"
            >
              View the ABWAB mockup
            </Link>
          </div>
        </div>
      </header>

      <section className="sg-hero text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-medium tracking-widest text-white/55 uppercase">
            Proposal · September 2026 · Prepared for ABWAB & More
          </p>
          <h1 className="mt-6 max-w-3xl font-sans text-5xl leading-[1.02] font-extrabold tracking-tight sm:text-6xl">
            Installed in your stack.
            <span className="mt-2 block text-sg-cyan">Built to be trusted.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            A custom build for ABWAB & More: finish the website you are walking,
            move it onto your domain, and install an inbound conversion workflow
            so every quote gets worked. Standard delivery is a 30-day sprint.
          </p>
          <p className="mt-8 font-sans text-4xl font-extrabold tracking-tight tabular-nums">
            $10,000
          </p>
          <p className="mt-2 text-sm text-white/55">
            30-day sprint. Website plus inbound conversion. Client-owned.
            Optional 14-day sprint +$2,500.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-5xl space-y-20 px-5 py-16 sm:px-8 sm:py-20">
        <section>
          <p className="text-xs font-medium tracking-widest text-sg-action uppercase">
            Essence
          </p>
          <h2 className="mt-3 max-w-2xl font-sans text-4xl font-extrabold tracking-tight text-sg-ink">
            Lead with the result. Prove it with the system.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            SalesGency installs AI revenue workflows inside your existing stack,
            so every lead gets worked, every conversation becomes usable data,
            and every next step moves forward. In partnership with Unleash Your
            Sales Greatness.
          </p>
          <div className="mt-10 grid gap-8 border-t border-sg-line pt-8 sm:grid-cols-3">
            {[
              [
                "1. Outcome",
                "More inbound quotes get worked. Less revenue work is lost to missed calls, handoffs and incomplete briefs.",
              ],
              [
                "2. Mechanism",
                "We finish the site and install an inbound conversion workflow across web, CRM, daily reports and first reply.",
              ],
              [
                "3. Proof",
                "You are already on the mockup. This is not a generic demo — it is the catalog, live, waiting to be transferred.",
              ],
            ].map(([title, copy]) => (
              <div key={title}>
                <h3 className="font-sans text-lg font-bold text-sg-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium tracking-widest text-sg-action uppercase">
              Prepared for
            </p>
            <p className="mt-2 font-sans text-2xl font-extrabold tracking-tight text-sg-ink">
              ABWAB & More
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Doors, kitchens, dressing rooms. This live mockup is the sample of
              work you would be paying to finish, host on your domain, and own.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest text-sg-action uppercase">
              Prepared by
            </p>
            <SalesGencyMark className="mt-2 text-2xl" />
            <p className="mt-2 text-sm leading-relaxed">
              AI revenue workflows for modern GTM teams. A d/b/a of Diamitani
              Industries, in partnership with Unleash Your Sales Greatness.
            </p>
            <p className="mt-3 text-sm">
              <a
                className="font-medium text-sg-action hover:underline"
                href="mailto:hello@salesgency.com"
              >
                hello@salesgency.com
              </a>
              {" · "}
              <a
                className="font-medium text-sg-action hover:underline"
                href="https://www.salesgency.com"
                target="_blank"
                rel="noreferrer"
              >
                salesgency.com
              </a>
            </p>
          </div>
        </section>

        <section>
          <p className="text-xs font-medium tracking-widest text-sg-action uppercase">
            Presenters
          </p>
          <h2 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-sg-ink">
            Who is in the room.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {PRESENTERS.map(([name, org, copy]) => (
              <div
                key={name}
                className="rounded-lg border border-sg-line bg-white p-6"
              >
                <p className="font-sans text-xl font-extrabold tracking-tight text-sg-ink">
                  {name}
                </p>
                <p className="mt-1 text-sm font-medium text-sg-action">{org}</p>
                <p className="mt-3 text-sm leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs font-medium tracking-widest text-sg-action uppercase">
            Custom scope · website
          </p>
          <h2 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-sg-ink">
            Finish the catalog. Transfer it to you.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            $7,000 to continue this build through launch — three design
            revisions, additional content, two to three meetings, and transfer
            to your domain and backend.
          </p>
          <ol className="mt-8 space-y-6">
            {WEBSITE.map(([title, copy], i) => (
              <li key={title} className="grid grid-cols-[3rem_1fr] gap-4">
                <span className="font-sans text-xl font-extrabold tabular-nums text-sg-action">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-sans font-bold text-sg-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed">{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <p className="text-xs font-medium tracking-widest text-sg-action uppercase">
            Engine 01 · inbound conversion
          </p>
          <h2 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-sg-ink">
            Work every inbound. Write it back to your CRM.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            $3,000 to install a quote-and-lead workflow in your stack: the
            on-site concierge, CRM wiring, daily reports, and an auto-responder.
            Your tools are not the problem. The gaps between them are.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {ENGINE.map(([title, copy]) => (
              <div
                key={title}
                className="rounded-lg border border-sg-line bg-white p-6"
              >
                <h3 className="font-sans font-bold text-sg-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs font-medium tracking-widest text-sg-action uppercase">
            Model access
          </p>
          <h2 className="mt-3 max-w-2xl font-sans text-4xl font-extrabold tracking-tight text-sg-ink">
            The concierge runs on your models. We help you set that up.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            ABWAB needs its own model access for the quote concierge — your
            keys, your vendor, your billing. SalesGency does not host or resell
            the model. We help you choose access, put credentials in your
            environment, and wire the concierge into the site and CRM so it is
            installed in your stack.
          </p>
        </section>

        <section>
          <p className="text-xs font-medium tracking-widest text-sg-action uppercase">
            Investment
          </p>
          <h2 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-sg-ink">
            One engagement. 30-day sprint. $10,000.
          </h2>
          <div className="mt-8 divide-y divide-sg-line border-y border-sg-line">
            {[
              [
                "Website",
                "Continue the mockup, 3 design revisions, additional content, 2–3 meetings, domain and backend transfer",
                "$7,000",
              ],
              [
                "Inbound conversion workflow",
                "Quotes, inbound leads, CRM wiring, daily reports, auto-responder — installed in your stack, on your models",
                "$3,000",
              ],
              [
                "30-day sprint",
                "Standard delivery window. Included.",
                "Included",
              ],
            ].map(([item, note, price]) => (
              <div
                key={item}
                className="flex items-baseline justify-between gap-4 py-5"
              >
                <div>
                  <p className="font-sans font-bold text-sg-ink">{item}</p>
                  <p className="mt-1 text-sm">{note}</p>
                </div>
                <p className="shrink-0 font-sans text-xl font-extrabold tabular-nums text-sg-ink">
                  {price}
                </p>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-4 py-5">
              <p className="font-sans text-2xl font-extrabold text-sg-ink">
                Total due from ABWAB & More
              </p>
              <p className="font-sans text-3xl font-extrabold tabular-nums text-sg-ink">
                $10,000
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-sg-line bg-white p-6">
            <p className="text-xs font-medium tracking-widest text-sg-action uppercase">
              Optional
            </p>
            <div className="mt-3 flex items-baseline justify-between gap-4">
              <div>
                <p className="font-sans text-lg font-extrabold text-sg-ink">
                  14-day sprint
                </p>
                <p className="mt-1 text-sm leading-relaxed">
                  Compress the same scope into two weeks. Additional fee on top
                  of the $10,000 engagement.
                </p>
              </div>
              <p className="shrink-0 font-sans text-xl font-extrabold tabular-nums text-sg-ink">
                +$2,500
              </p>
            </div>
            <p className="mt-3 text-sm text-sg-caption">
              With the 14-day option the total is $12,500.
            </p>
          </div>

          <p className="mt-6 text-sm leading-relaxed">
            Payment is 50% at signed SOW and 50% on delivery. Three design
            revisions are included. Client data, credentials, and model access
            stay the client’s. No monthly platform fee in this figure — hosting
            sits on your account after transfer. Model usage is billed by your
            provider, not by SalesGency.
          </p>
        </section>

        <section>
          <p className="text-xs font-medium tracking-widest text-sg-action uppercase">
            How it works
          </p>
          <h2 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-sg-ink">
            Built around your process, not a generic demo.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            Standard path is 30 days from signed SOW to launch. The 14-day
            option is the same three steps, compressed.
          </p>
          <div className="mt-10 grid gap-8 border-t border-sg-line pt-8 sm:grid-cols-3">
            {[
              [
                "Step 1",
                "Diagnose",
                "Kickoff: domain, CRM, model access, content, first design revision. Map handoffs and the work that is slow or invisible.",
              ],
              [
                "Step 2",
                "Build",
                "Connect content, second revision, inbound workflow in your CRM on your models. Guardrails and real quote scenarios.",
              ],
              [
                "Step 3",
                "Launch",
                "Third revision, transfer to your domain, auto-responder live, ownership documented.",
              ],
            ].map(([step, title, copy]) => (
              <div key={step}>
                <p className="text-xs font-medium tracking-widest text-sg-action uppercase">
                  {step}
                </p>
                <h3 className="mt-2 font-sans text-2xl font-extrabold text-sg-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <section className="sg-hero text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-xs font-medium tracking-widest text-white/55 uppercase">
            Next step
          </p>
          <h2 className="mt-3 max-w-2xl font-sans text-4xl font-extrabold tracking-tight sm:text-5xl">
            Stop losing inbound quotes to a missed call.
          </h2>
          <p className="mt-4 max-w-xl text-white/75 leading-relaxed">
            If this mockup is the house you want, ABWAB & More pays $10,000 for
            a 30-day sprint to finish it, transfer it, and install the inbound
            workflow. Walk the catalog. Then tell us to proceed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 print:hidden">
            <a
              href={PDF_HREF}
              className="inline-flex h-12 items-center bg-white px-6 font-sans text-sm font-semibold text-sg-ink hover:bg-sg-mist"
            >
              Download PDF
            </a>
            <Link
              to="/"
              className="inline-flex h-12 items-center border border-white/30 px-6 font-sans text-sm font-semibold text-white hover:border-white"
            >
              Walk the mockup
            </Link>
            <a
              href="mailto:hello@salesgency.com?subject=ABWAB%20%26%20More%20proposal"
              className="inline-flex h-12 items-center border border-white/30 px-6 font-sans text-sm font-semibold text-white hover:border-white"
            >
              hello@salesgency.com
            </a>
          </div>
          <div className="mt-16 flex flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SalesGencyMark tone="reversed" className="text-2xl" />
              <p className="mt-2 text-sm text-white/55">
                Patrick Diamitani · SalesGency
                <br />
                Geraldy Jean-Baptiste · Unleash Your Sales Greatness
                <br />
                hello@salesgency.com · salesgency.com
                <br />
                SalesGency is a d/b/a of Diamitani Industries.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/images/agency/uysg-pegasus.png"
                alt=""
                width={48}
                height={40}
                className="h-10 w-auto object-contain outline-none"
              />
              <p className="text-xs text-white/50">
                In partnership with
                <br />
                Unleash Your Sales Greatness
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
