import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/button";
import { PERFORMANCE } from "@/lib/catalog";

export const Route = createFileRoute("/atelier")({ component: AtelierPage });

const STEPS = [
  {
    title: "Engineered core",
    copy: "Solid wood internal framing for dimensional stability and long-term durability.",
  },
  {
    title: "Premium materials",
    copy: "Selected solid-wood components, inspected and prepared for consistency.",
  },
  {
    title: "Precision fabrication",
    copy: "Each component is cut and aligned so the assembly closes as one piece.",
  },
  {
    title: "Structured assembly",
    copy: "Strict quality control to maintain alignment, strength, and consistency.",
  },
  {
    title: "Refined finishing",
    copy: "Surfaces treated and finished for durability, touch, and visual depth.",
  },
  {
    title: "Prepared for delivery",
    copy: "Handled and packed for safe transport and lasting performance.",
  },
];

function AtelierPage() {
  return (
    <SiteShell>
      <section className="relative min-h-[70svh] bg-ink text-cream">
        <img
          src="/images/lifestyle/workshop.jpg"
          alt="Workshop assembling a door core"
          className="absolute inset-0 size-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative mx-auto flex min-h-[70svh] max-w-6xl items-end px-5 pb-16 pt-32 sm:px-8">
          <div>
            <p className="text-[11px] tracking-[0.28em] text-bronze uppercase">
              Manufacturing
            </p>
            <h1 className="font-display mt-3 max-w-3xl text-5xl sm:text-6xl">
              Crafted by experts.
            </h1>
            <p className="mt-4 max-w-xl text-cream/80">
              Precision begins at the hands of skilled craftsmen — from kiln-dried
              timber to a door that closes as if it were always part of the wall.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-[11px] tracking-[0.28em] text-bronze-deep uppercase">
          Process
        </p>
        <h2 className="font-display mt-2 text-4xl text-ink">Six measures of care</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <article key={step.title} className="border border-sand bg-surface p-6">
              <p className="text-xs tracking-[0.2em] text-bronze-deep">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-3 text-2xl text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-ink">Crafted for performance</h2>
            <p className="mt-4 text-muted">
              High-end residential and commercial applications — structural strength,
              refined finishes, and engineering for daily use.
            </p>
            <h3 className="mt-8 text-xs tracking-[0.2em] text-walnut uppercase">
              Construction & materials
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-fg">
              {PERFORMANCE.construction.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="/images/lifestyle/materials.jpg"
              alt="Hardware, gasket, and wood samples"
              className="aspect-video w-full object-cover"
            />
            <h3 className="mt-8 text-xs tracking-[0.2em] text-walnut uppercase">
              Engineered sealing
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-fg">
              {PERFORMANCE.sealing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-3">
        <article>
          <h3 className="font-display text-2xl text-ink">Surface finishes</h3>
          {PERFORMANCE.finishes.map((f) => (
            <p key={f.name} className="mt-4 text-sm leading-relaxed text-muted">
              <span className="text-ink">{f.name}. </span>
              {f.detail}
            </p>
          ))}
        </article>
        <article>
          <h3 className="font-display text-2xl text-ink">Core configurations</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {PERFORMANCE.cores.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </article>
        <article>
          <h3 className="font-display text-2xl text-ink">Hardware</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {PERFORMANCE.hardware.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <img
            src="/images/hardware.jpg"
            alt="Hinges and lever hardware"
            className="mt-6 aspect-[4/3] w-full object-cover"
          />
        </article>
      </section>

      <div className="bg-ink py-16 text-center text-cream">
        <p className="font-display text-3xl">Specify a finish. We will build the rest.</p>
        <div className="mt-6 flex justify-center">
          <Button asChild variant="primary" size="lg" className="uppercase tracking-[0.16em]">
            <Link to="/quote">Request a quote</Link>
          </Button>
        </div>
      </div>
    </SiteShell>
  );
}
