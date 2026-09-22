import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { formatPrice, getProduct, PRODUCTS } from "@/lib/catalog";
import { useState } from "react";

export const Route = createFileRoute("/products/$slug")({
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);
  const [active, setActive] = useState(0);

  if (!product) throw notFound();

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  ).slice(0, 3);

  return (
    <SiteShell>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-28 pb-20 sm:px-8 lg:grid-cols-2">
        <div>
          <img
            src={product.gallery[active] ?? product.image}
            alt={product.name}
            className="aspect-[3/4] w-full object-cover"
          />
          {product.gallery.length > 1 ? (
            <div className="mt-3 grid grid-cols-3 gap-3">
              {product.gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    i === active ? "ring-1 ring-ink ring-offset-2 ring-offset-cream" : ""
                  }
                >
                  <img src={src} alt="" className="aspect-[4/3] w-full object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div>
          <p className="text-[11px] tracking-[0.24em] text-muted uppercase">
            {product.collection} · {product.sku}
          </p>
          <h1 className="font-display mt-2 text-5xl text-ink">{product.name}</h1>
          <p className="mt-2 text-lg text-walnut">{product.subtitle}</p>
          <p className="mt-6 text-base leading-relaxed text-muted">{product.tagline}</p>
          <p className="mt-8 font-display text-3xl text-ink">
            From {formatPrice(product.startingAt)}
          </p>
          <p className="mt-1 text-sm text-muted">
            Preliminary. Lead time {product.leadTime}. Made to order.
          </p>

          <dl className="mt-10 divide-y divide-sand border-y border-sand">
            {[
              ["Material", product.material],
              ["Finish", product.finishDetail],
              ["Design", product.design],
              ["Customization", product.customization],
              ...product.specs.map((s) => [s.label, s.value] as const),
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-3 gap-4 py-3 text-sm">
                <dt className="tracking-[0.08em] text-muted uppercase">{label}</dt>
                <dd className="col-span-2 text-fg">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="ink" size="lg" className="uppercase tracking-[0.16em]">
              <Link to="/quote" search={{ product: product.slug }}>
                Request this piece
              </Link>
            </Button>
            <Button asChild variant="cream" size="lg" className="uppercase tracking-[0.16em]">
              <Link to="/collections" search={{ category: product.category }}>
                Back to collection
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {related.length ? (
        <div className="bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <h2 className="font-display text-3xl text-ink">In the same language</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </SiteShell>
  );
}
