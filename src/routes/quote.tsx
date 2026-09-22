import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/button";
import { PRODUCTS, SITE, getProduct } from "@/lib/catalog";

type Search = { product?: string };

export const Route = createFileRoute("/quote")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    product: typeof search.product === "string" ? search.product : undefined,
  }),
  component: QuotePage,
});

const STORAGE_KEY = "abwab-quote-requests";

function QuotePage() {
  const { product: productSlug } = Route.useSearch();
  const selected = productSlug ? getProduct(productSlug) : undefined;
  const [sent, setSent] = useState(false);

  const defaults = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      city: "",
      category: selected?.category ?? "doors",
      product: selected?.slug ?? "",
      quantity: "1",
      notes: selected
        ? `Interested in ${selected.name} (${selected.sku}).`
        : "",
    }),
    [selected],
  );

  const [form, setForm] = useState(defaults);

  function update(key: string, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const entry = { ...form, at: new Date().toISOString() };
    try {
      const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as unknown[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([entry, ...prev].slice(0, 20)));
    } catch {
      /* ignore quota */
    }
    setSent(true);
  }

  return (
    <SiteShell>
      <section className="bg-ink pt-28 pb-16 text-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-[11px] tracking-[0.28em] text-bronze uppercase">
            Projects
          </p>
          <h1 className="font-display mt-3 text-5xl sm:text-6xl">Request a quote</h1>
          <p className="mt-4 max-w-xl text-cream/75">
            Share the room and the collection. A preliminary estimate follows;
            a site measure confirms it. Or open the Quote Concierge on any page.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <form onSubmit={onSubmit} className="space-y-5 lg:col-span-7">
          {sent ? (
            <div className="border border-sand bg-surface p-8">
              <p className="font-display text-3xl text-ink">Received.</p>
              <p className="mt-3 text-muted">
                Thank you. The atelier will review this request. For a faster
                first pass, stay on the page and use the Quote Concierge.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" id="name">
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={fieldClass}
                  />
                </Field>
                <Field label="Email" id="email">
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={fieldClass}
                  />
                </Field>
                <Field label="Phone" id="phone">
                  <input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={fieldClass}
                  />
                </Field>
                <Field label="City" id="city">
                  <input
                    id="city"
                    required
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    className={fieldClass}
                  />
                </Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Category" id="category">
                  <select
                    id="category"
                    value={form.category}
                    onChange={(e) => update("category", e.target.value)}
                    className={fieldClass}
                  >
                    <option value="doors">Doors</option>
                    <option value="kitchens">Kitchens</option>
                    <option value="dressing-rooms">Dressing rooms</option>
                  </select>
                </Field>
                <Field label="Collection piece" id="product">
                  <select
                    id="product"
                    value={form.product}
                    onChange={(e) => update("product", e.target.value)}
                    className={fieldClass}
                  >
                    <option value="">Not sure yet</option>
                    {PRODUCTS.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.name} — {p.subtitle}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label="Quantity or rooms" id="quantity">
                <input
                  id="quantity"
                  value={form.quantity}
                  onChange={(e) => update("quantity", e.target.value)}
                  className={fieldClass}
                />
              </Field>
              <Field label="Notes" id="notes">
                <textarea
                  id="notes"
                  rows={5}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className="mt-2 w-full border border-sand bg-cream px-3 py-3 text-sm text-fg outline-none focus:border-ink"
                  placeholder="Finishes, hardware, timeline, drawings…"
                />
              </Field>
              <Button type="submit" variant="ink" size="lg" className="uppercase tracking-[0.16em]">
                Send request
              </Button>
            </>
          )}
        </form>

        <aside className="lg:col-span-5">
          <div className="border border-sand bg-surface p-8">
            <p className="text-[11px] tracking-[0.22em] text-bronze-deep uppercase">
              Atelier
            </p>
            <p className="font-display mt-2 text-3xl text-ink">{SITE.name}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {SITE.cities.join(" · ")}
              <br />
              By appointment
              <br />
              <a className="text-walnut hover:text-ink" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Estimates from the concierge are indicative. Final pricing follows
              drawings, finish samples, and a site measure.
            </p>
          </div>
        </aside>
      </div>
    </SiteShell>
  );
}

const fieldClass =
  "mt-2 flex h-11 w-full border border-sand bg-cream px-3 text-sm text-fg outline-none focus:border-ink";

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={id} className="block text-xs tracking-[0.16em] text-muted uppercase">
      {label}
      {children}
    </label>
  );
}
