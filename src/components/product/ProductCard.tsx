import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/catalog";
import { formatPrice } from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group block"
    >
      <div className="overflow-hidden bg-parchment">
        <img
          src={product.image}
          alt={`${product.name} — ${product.subtitle}`}
          className="aspect-[3/4] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="pt-4">
        <p className="text-[11px] tracking-[0.22em] text-muted uppercase">
          {product.collection} · {product.sku}
        </p>
        <h3 className="font-display mt-1 text-2xl text-ink">{product.name}</h3>
        <p className="mt-1 text-sm text-muted">{product.subtitle}</p>
        <p className="mt-3 text-sm text-walnut">
          From {formatPrice(product.startingAt)}
        </p>
      </div>
    </Link>
  );
}
