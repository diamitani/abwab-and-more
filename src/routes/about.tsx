import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/catalog";

export const Route = createFileRoute("/about")({ component: AboutPage });

const PILLARS = [
  {
    title: "Quality without compromise",
    copy: "Premium materials and proven techniques so every product meets the same standard.",
  },
  {
    title: "Precision engineering",
    copy: "Every detail is measured, crafted, and inspected for accuracy and performance.",
  },
  {
    title: "Durability & performance",
    copy: "Built for daily use while keeping integrity and appearance over time.",
  },
  {
    title: "Custom commitment",
    copy: "We work closely with clients to deliver the room they actually live in.",
  },
];

function AboutPage() {
  return (
    <SiteShell>
      <section className="bg-ink pt-28 pb-16 text-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-[11px] tracking-[0.28em] text-bronze uppercase">The house</p>
          <h1 className="font-display mt-3 max-w-3xl text-5xl sm:text-6xl">
            Where heritage meets modern craftsmanship.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center">
        <img
          src="/images/lifestyle/heritage.jpg"
          alt="Walnut paneling and oak door in a quiet hall"
          className="aspect-[4/3] w-full object-cover"
        />
        <div>
          <p className="text-[11px] tracking-[0.28em] text-bronze-deep uppercase">
            Philosophy
          </p>
          <p className="mt-4 text-lg leading-relaxed text-fg">{SITE.philosophy}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Our team of architects, designers, engineers, and master craftsmen
            brings international expertise across the United States, the Middle
            East, and beyond. A dedicated production facility in Egypt keeps
            design, manufacturing, and installation in one conversation.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="font-display text-4xl text-ink">Our commitment</h2>
          <p className="mt-3 max-w-2xl text-muted">
            A door is more than a functional element — it is a statement of
            quality, design, and attention to detail.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <article key={p.title} className="border border-sand bg-cream p-6">
                <h3 className="font-display text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-2">
        <img
          src="/images/commitment-interior.jpg"
          alt="Finished oak door in a contemporary interior"
          className="aspect-[3/4] w-full object-cover"
        />
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-4xl text-ink">
            Fully integrated, fully custom.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            By controlling every stage — from concept to fabrication to final
            installation — we ensure consistency, durability, and attention at
            the highest level. Every piece is made to order and thoughtfully
            crafted to the client’s vision and rooms.
          </p>
          <p className="mt-6 text-sm tracking-[0.16em] text-walnut uppercase">
            {SITE.cities.join(" · ")} · By appointment
          </p>
          <div className="mt-8">
            <Button asChild variant="ink" className="uppercase tracking-[0.16em]">
              <Link to="/quote">Begin a conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
