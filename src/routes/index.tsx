import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { Cartouche } from "@/components/brand/Logo";
import { PRODUCTS, SITE } from "@/lib/catalog";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = PRODUCTS.filter((p) => p.category === "doors").slice(0, 4);

  return (
    <SiteShell>
      <section className="relative flex min-h-svh items-end bg-ink text-cream">
        <img
          src="/images/lifestyle/hero.jpg"
          alt="A quiet foyer with a solid oak door"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/25" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20">
          <p className="text-[11px] tracking-[0.32em] text-bronze uppercase">
            {SITE.blurb}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[0.95] sm:text-7xl">
            Heritage millwork for modern rooms.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Solid wood doors, kitchens, and dressing rooms — designed, made, and
            finished as one piece of work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="primary" size="lg" className="uppercase tracking-[0.16em]">
              <Link to="/collections">
                View collections <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="uppercase tracking-[0.16em]">
              <Link to="/quote">Request a quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] tracking-[0.28em] text-bronze-deep uppercase">
              Our philosophy
            </p>
            <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
              Craftsmanship rooted in heritage. Designed for modern living.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              {SITE.philosophy} Architects, designers, engineers, and master
              craftsmen work from a dedicated production facility in Egypt —
              concept to fabrication to installation.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex h-11 items-center gap-2 text-sm tracking-[0.16em] text-ink uppercase"
            >
              The house <ArrowRight className="size-4" />
            </Link>
          </div>
          <img
            src="/images/philosophy-door.jpg"
            alt="Solid oak door in the workshop"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.28em] text-bronze-deep uppercase">
                Door collection
              </p>
              <h2 className="font-display mt-2 text-4xl text-ink">Crafted entrances</h2>
            </div>
            <Link
              to="/collections"
              search={{ category: "doors" }}
              className="hidden text-xs tracking-[0.2em] text-walnut uppercase sm:inline-flex"
            >
              All doors
            </Link>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <Link to="/collections" search={{ category: "kitchens" }} className="group relative min-h-[420px]">
          <img
            src="/images/products/kitchen-natural.jpg"
            alt="Natural Elegance kitchen"
            className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-ink/35" />
          <div className="relative flex h-full min-h-[420px] flex-col justify-end p-8 text-cream">
            <p className="text-[11px] tracking-[0.28em] text-bronze uppercase">Kitchens</p>
            <h3 className="font-display mt-2 text-4xl">Designed for living</h3>
          </div>
        </Link>
        <Link
          to="/collections"
          search={{ category: "dressing-rooms" }}
          className="group relative min-h-[420px]"
        >
          <img
            src="/images/products/dressing-room.jpg"
            alt="Custom dressing room"
            className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-ink/35" />
          <div className="relative flex h-full min-h-[420px] flex-col justify-end p-8 text-cream">
            <p className="text-[11px] tracking-[0.28em] text-bronze uppercase">
              Dressing rooms
            </p>
            <h3 className="font-display mt-2 text-4xl">Designed around you</h3>
          </div>
        </Link>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center">
          <img
            src="/images/lifestyle/workshop.jpg"
            alt="Craftsmen assembling a solid wood door core"
            className="aspect-video w-full object-cover"
          />
          <div>
            <p className="text-[11px] tracking-[0.28em] text-bronze uppercase">
              The atelier
            </p>
            <h2 className="font-display mt-3 text-4xl">Precision begins in the mill.</h2>
            <ul className="mt-8 space-y-4 text-sm leading-relaxed text-cream/75">
              <li>2-inch kiln-dried leaves, pre-hung for true alignment.</li>
              <li>Concealed gasket sealing — quiet close, private rooms.</li>
              <li>HPL or natural veneer, specified to the project.</li>
              <li>Heavy-gauge stainless hardware, made to be used daily.</li>
            </ul>
            <Link
              to="/atelier"
              className="mt-8 inline-flex h-11 items-center gap-2 text-sm tracking-[0.16em] text-bronze uppercase"
            >
              How we build <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center sm:px-8">
          <Cartouche className="h-24 w-9" tone="ink" />
          <h2 className="font-display mt-8 text-4xl text-ink sm:text-5xl">
            Every piece is made to order.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Tell us the room, the finish, and the city. The concierge will
            prepare a preliminary estimate; the atelier will confirm after
            measure.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="ink" size="lg" className="uppercase tracking-[0.16em]">
              <Link to="/quote">Begin a project</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
