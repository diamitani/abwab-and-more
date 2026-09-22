import { createFileRoute, Link } from "@tanstack/react-router";
import { SalesGencyMark } from "@/components/brand/SalesGencyMark";

export const Route = createFileRoute("/proposal")({ component: ProposalPage });

const PDF_HREF = "/abwab-salesgency-proposal.pdf";

const WEBSITE = [
  [
    "Ship the site from this mockup",
    "Collections, product pages, atelier, about, and the quote flow go from sample to production. What you are clicking today is the foundation, not a throwaway.",
  ],
  [
    "Three design revisions",
    "Kickoff, content lock, and pre-launch. Each review is scheduled. Your catalog remains the visual source of truth.",
  ],
  [
    "Connect the rest of the catalog",
    "Photography, finishes, kitchens, dressing rooms, and copy you provide are placed into the live site so it reads as a working showroom, not a teaser.",
  ],
  [
    "Launch on your domain",
    "Hosting, repository, and environment transfer to you. After launch, ABWAB owns the property. We do not keep the keys.",
  ],
  [
    "Two to three working sessions",
    "Kickoff, build review, and launch. Short meetings with the live site on screen so decisions are concrete.",
  ],
];

const ENGINE = [
  [
    "Quote chatbot",
    "An on-site concierge trained on your doors, kitchens, and dressing rooms. It gathers project detail and prepares a preliminary estimate before a person ever picks up the phone.",
  ],
  [
    "Lead engine",
    "Every chat, form, and inbound inquiry is qualified, scored, and routed to the right owner with a next action attached.",
  ],
  [
    "CRM write-back",
    "Names, rooms, finishes, and conversation context land in the system you already use. We wire into your CRM. We do not replace it.",
  ],
  [
    "Daily reports and first reply",
    "A morning digest of new inquiries, estimates issued, and threads still waiting. An auto-responder so no architect or homeowner sits in silence.",
  ],
];

const PRESENTERS = [
  [
    "Patrick Diamitani",
    "SalesGency",
    "Delivery lead for the production website, quote chatbot, CRM wiring, and handoff to ABWAB.",
  ],
  [
    "Geraldy Jean-Baptiste",
    "Unleash Your Sales Greatness",
    "Sales partner. Owns the motion after a quote lands — follow-up that turns a brief into a booked measure.",
  ],
];

function ProposalPage() {
  return (
    <div className="min-h-svh bg-sg-mist font-sg text-sg-slate">
      <header className="border-b border-sg-line bg-sg-mist print:hidden">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
          <SalesGencyMark className="text-xl" />
          <div className="flex items-center gap-5">
            <Link
              to="/proposal-pdf"
              className="text-sm font-medium text-sg-action hover:underline"
            >
              View 6-page PDF
            </Link>
            <a
              href={PDF_HREF}
              download="ABWAB-SalesGency-Proposal.pdf"
              className="inline-flex h-9 items-center bg-sg-ink px-3 font-sans text-sm font-semibold text-white"
            >
              Download PDF
            </a>
            <Link
              to="/"
              className="hidden text-sm font-medium text-sg-action hover:underline sm:inline"
            >
              View the ABWAB mockup
            </Link>
          </div>
        </div>
      </header>

      <section className="sg-hero text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-medium tracking-widest text-white/55 uppercase">
            Confidential proposal · September 2026 · ABWAB & More
          </p>
          <h1 className="mt-6 max-w-3xl font-sans text-5xl leading-[1.02] font-extrabold tracking-tight sm:text-6xl">
            Website. Chatbot. Lead engine.
            <span className="mt-2 block text-sg-cyan">
              One sprint. You own all three.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            SalesGency, in partnership with Unleash Your Sales Greatness, will
            take this live mockup to production, place a quote chatbot on it,
            and install a lead engine that writes every inquiry into your CRM.
            Thirty days. Ten thousand dollars. The site, the bot, and the
            pipeline transfer to ABWAB.
          </p>
          <p className="mt-8 font-sans text-4xl font-extrabold tracking-tight tabular-nums">
            $10,000
          </p>
          <p className="mt-2 text-sm text-white/55">
            Website $7,000 · Quote chatbot and lead engine $3,000 · 30-day
            sprint included. Faster 14-day delivery available for $2,500 more.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-5xl space-y-20 px-5 py-16 sm:px-8 sm:py-20">
        <section>
          <p className="text-xs font-medium tracking-widest text-sg-action uppercase">
            What you are buying
          </p>
          <h2 className="mt-3 max-w-2xl font-sans text-4xl font-extrabold tracking-tight text-sg-ink">
            A commercial website with a quoting desk that never closes.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            ABWAB already has the catalog. What is missing is a public house
            for it, a chatbot that can take a first brief, and a lead engine
            that makes sure no inquiry dies in an inbox. This engagement
            delivers those three pieces as one system, then hands you the
            keys.
          </p>
          <div className="mt-10 grid gap-8 border-t border-sg-line pt-8 sm:grid-cols-3">
            {[
              [
                "Website",
                "$7,000",
                "Production site from this mockup: collections, product pages, atelier, about, quote. Three revisions. Your domain. Your backend.",
              ],
              [
                "Quote chatbot",
                "Included in $3,000",
                "Catalog-trained concierge on the site. It specifies the project, issues a preliminary estimate, and files the brief.",
              ],
              [
                "Lead engine",
                "Included in $3,000",
                "Routing, CRM write-back, daily reports, and an auto-responder so every inbound is answered and owned.",
              ],
            ].map(([title, price, copy]) => (
              <div key={title}>
                <h3 className="font-sans text-lg font-bold text-sg-ink">{title}</h3>
                <p className="mt-1 text-sm font-medium text-sg-action">{price}</p>
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
              Luxury millwork — doors, kitchens, dressing rooms. This live
              mockup is the sample of work you would pay to finish, host, and
              keep. It is not a concept deck. It is the house, already standing.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest text-sg-action uppercase">
              Prepared by
            </p>
            <SalesGencyMark className="mt-2 text-2xl" />
            <p className="mt-2 text-sm leading-relaxed">
              Custom websites and AI revenue systems for operators who already
              have demand and cannot afford to drop it. A d/b/a of Diamitani
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
            Who signs the work.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {PRESENTERS.map(([name, org, copy]) => (
              <div
                key={name}
                className="break-inside-avoid rounded-lg border border-sg-line bg-white p-6"
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
            Part one · website · $7,000
          </p>
          <h2 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-sg-ink">
            A production catalog on your name.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            Seven thousand dollars covers the site through launch: finish this
            mockup, three design revisions, remaining content, two to three
            meetings, and transfer onto ABWAB’s domain and infrastructure.
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
            Part two · quote chatbot and lead engine · $3,000
          </p>
          <h2 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-sg-ink">
            Capture the quote. File it. Follow it.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            Three thousand dollars installs the commercial layer on top of the
            site: a quote chatbot visitors can talk to, and a lead engine that
            qualifies, logs, reports, and replies. The millwork is the product.
            This is the desk that takes the order.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {ENGINE.map(([title, copy]) => (
              <div
                key={title}
                className="break-inside-avoid rounded-lg border border-sg-line bg-white p-6"
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
            The chatbot runs on ABWAB’s models. We stand it up with you.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            You bring the model account — your vendor, your keys, your usage
            bill. SalesGency does not resell or host the model. We help you
            obtain access, place credentials in your environment, and connect
            the chatbot and lead engine so the whole system lives in your
            stack. Model spend is billed by your provider, not by us.
          </p>
        </section>

        <section>
          <p className="text-xs font-medium tracking-widest text-sg-action uppercase">
            Investment
          </p>
          <h2 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-sg-ink">
            $10,000. Payable by ABWAB & More.
          </h2>
          <div className="mt-8 divide-y divide-sg-line border-y border-sg-line">
            {[
              [
                "Website build",
                "Production site from this mockup, three design revisions, remaining content, two to three meetings, domain and backend transfer",
                "$7,000",
              ],
              [
                "Quote chatbot and lead engine",
                "On-site quote chatbot, inbound routing, CRM write-back, daily reports, auto-responder — on your models",
                "$3,000",
              ],
              [
                "30-day sprint",
                "Standard delivery from signed agreement to launch. Included in the figure above.",
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
                  Same website, chatbot, and lead engine, delivered in two
                  weeks instead of thirty days.
                </p>
              </div>
              <p className="shrink-0 font-sans text-xl font-extrabold tabular-nums text-sg-ink">
                +$2,500
              </p>
            </div>
            <p className="mt-3 text-sm text-sg-caption">
              Fourteen-day option brings the total to $12,500.
            </p>
          </div>

          <p className="mt-6 text-sm leading-relaxed">
            Fifty percent is due on signed agreement. Fifty percent is due on
            delivery. Three design revisions are included. Hosting after
            transfer sits on your account. There is no monthly platform fee in
            this number. Client data, credentials, and model access remain
            yours.
          </p>
        </section>

        <section>
          <p className="text-xs font-medium tracking-widest text-sg-action uppercase">
            How the sprint runs
          </p>
          <h2 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-sg-ink">
            Thirty days. Three gates. Then it is yours.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            Signed agreement to live site in 30 days. The 14-day option is the
            same sequence, compressed.
          </p>
          <div className="mt-10 grid gap-8 border-t border-sg-line pt-8 sm:grid-cols-3">
            {[
              [
                "Week 1",
                "Kickoff",
                "Domain, CRM, model access, content, first design revision. We map where quotes currently stall.",
              ],
              [
                "Weeks 2–3",
                "Build",
                "Remaining catalog, second revision, quote chatbot live against real scenarios, lead engine writing into your CRM.",
              ],
              [
                "Week 4",
                "Launch",
                "Third revision, site on your domain, auto-responder on, ownership documented, keys transferred.",
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
            Decision
          </p>
          <h2 className="mt-3 max-w-2xl font-sans text-4xl font-extrabold tracking-tight sm:text-5xl">
            Approve $10,000 and we start the sprint.
          </h2>
          <p className="mt-4 max-w-xl text-white/75 leading-relaxed">
            Walk the mockup. If this is the catalog ABWAB wants public, sign
            the agreement. Fifty percent to begin. In thirty days the website,
            the quote chatbot, and the lead engine are live on your domain and
            in your name.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 print:hidden">
            <Link
              to="/proposal-pdf"
              className="inline-flex h-12 items-center bg-white px-6 font-sans text-sm font-semibold text-sg-ink hover:bg-sg-mist"
            >
              View 6-page PDF
            </Link>
            <a
              href={PDF_HREF}
              download="ABWAB-SalesGency-Proposal.pdf"
              className="inline-flex h-12 items-center border border-white/30 px-6 font-sans text-sm font-semibold text-white hover:border-white"
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
