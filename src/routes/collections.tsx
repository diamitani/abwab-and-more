import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { ProductCard } from "@/components/product/ProductCard";
import { CATEGORIES, PRODUCTS, type ProductCategory } from "@/lib/catalog";
import { cn } from "@/lib/utils";

type Search = { category?: ProductCategory | "all" };

export const Route = createFileRoute("/collections")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    category:
      search.category === "doors" ||
      search.category === "kitchens" ||
      search.category === "dressing-rooms"
        ? search.category
        : "all",
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  const { category } = Route.useSearch();
  const items =
    category && category !== "all"
      ? PRODUCTS.filter((p) => p.category === category)
      : PRODUCTS;
  const title =
    category === "doors"
      ? "Door Collection"
      : category === "kitchens"
        ? "Kitchen Collection"
        : category === "dressing-rooms"
          ? "Dressing Rooms"
          : "Collections";
  const blurb =
    CATEGORIES.find((c) => c.id === category)?.blurb ??
    "Doors, kitchens, and dressing rooms — specified as one language of making.";

  return (
    <SiteShell>
      <div className="bg-ink pt-28 pb-16 text-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-[11px] tracking-[0.28em] text-bronze uppercase">
            ABWAB & More
          </p>
          <h1 className="font-display mt-3 text-5xl sm:text-6xl">{title}</h1>
          <p className="mt-4 max-w-xl text-cream/75">{blurb}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-wrap gap-2">
          {(
            [
              { id: "all", label: "All" },
              ...CATEGORIES.map((c) => ({ id: c.id, label: c.label })),
            ] as const
          ).map((tab) => (
            <Link
              key={tab.id}
              to="/collections"
              search={{ category: tab.id === "all" ? undefined : tab.id }}
              className={cn(
                "flex h-11 items-center px-4 text-xs tracking-[0.18em] uppercase",
                (category ?? "all") === tab.id
                  ? "bg-ink text-cream"
                  : "border border-sand text-walnut hover:border-ink",
              )}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
