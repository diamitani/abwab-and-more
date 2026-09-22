import { createFileRoute, Link } from "@tanstack/react-router";
import { SalesGencyMark } from "@/components/brand/SalesGencyMark";

export const Route = createFileRoute("/proposal-pdf")({
  component: ProposalPdfPage,
});

const PAGES = [1, 2, 3, 4, 5, 6] as const;
const PDF_HREF = "/abwab-salesgency-proposal.pdf";

function ProposalPdfPage() {
  return (
    <div className="min-h-svh bg-sg-ink font-sg text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-sg-ink/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[52rem] items-center justify-between gap-4 px-4">
          <SalesGencyMark tone="reversed" className="text-lg" />
          <div className="flex items-center gap-4 text-sm">
            <Link to="/proposal" className="text-white/70 hover:text-white">
              Web version
            </Link>
            <a
              href={PDF_HREF}
              download="ABWAB-SalesGency-Proposal.pdf"
              className="inline-flex h-10 items-center bg-white px-4 font-sans text-sm font-semibold text-sg-ink"
            >
              Download PDF
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[52rem] space-y-6 px-4 py-8">
        <p className="text-center text-sm text-white/60">
          6-page letter · Website, chatbot, and lead engine · $10,000
        </p>
        {PAGES.map((n) => (
          <figure key={n} className="overflow-hidden rounded-sm bg-white shadow-2xl">
            <img
              src={`/images/proposal/page-${String(n).padStart(2, "0")}.png`}
              alt={`SalesGency proposal for ABWAB & More, page ${n} of 6`}
              width={1224}
              height={1584}
              className="block h-auto w-full"
            />
          </figure>
        ))}
        <p className="pb-8 text-center text-sm text-white/50">
          Patrick Diamitani · SalesGency · Geraldy Jean-Baptiste · UYSG
        </p>
      </main>
    </div>
  );
}
