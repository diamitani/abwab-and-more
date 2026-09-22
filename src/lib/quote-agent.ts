import { createServerFn } from "@tanstack/react-start";
import { PRODUCTS, PERFORMANCE, SITE } from "@/lib/catalog";

export type ChatMessage = { role: "user" | "assistant"; content: string };

const catalogBrief = PRODUCTS.map(
  (p) =>
    `${p.sku} | ${p.name} (${p.subtitle}) | ${p.category} | ${p.collection} | ${p.finish} | ${p.material} | ${p.design} | from $${p.startingAt} | lead ${p.leadTime}`,
).join("\n");

const SYSTEM = `You are the Atelier Concierge for ${SITE.name}, a luxury millwork house rooted in Egyptian heritage. Showrooms: ${SITE.cities.join(" and ")}. Email: ${SITE.email}.

Tone: calm, precise, tasteful. Short paragraphs. No slang, no emoji, no exclamation marks. You help visitors specify a project and prepare a preliminary quote. All prices are estimates for a proposal mockup and must be labeled as "preliminary estimate, subject to measure and finish selection."

Catalog:
${catalogBrief}

Construction:
${PERFORMANCE.construction.join("; ")}
Sealing: ${PERFORMANCE.sealing.join("; ")}
Cores: ${PERFORMANCE.cores.join("; ")}
Hardware: ${PERFORMANCE.hardware.join("; ")}

Pricing rules:
- Use catalog starting prices as a floor.
- Custom size or nonstandard hardware: +15% to +35%.
- Full-home door packages (8+ leaves): 8% package courtesy.
- Kitchens and dressing rooms are project quotes; give a range, not a fake exact total.
- Always ask for: city, quantity or room size, finish preference, timeline.
- When you have enough, present a clear estimate with line items and invite them to Request a Quote on the site.
- Never invent products that are not in the catalog. Never claim a signed contract. Never request credit cards.
- If asked about the website proposal: that is a SalesGency engagement, not a millwork price. ABWAB would pay $10,000 for a 30-day sprint covering three things: a production website ($7,000), plus a quote chatbot and lead engine ($3,000) that capture inquiries, write them into ABWAB's CRM, send daily reports, and auto-respond. The chatbot runs on ABWAB's own model access; SalesGency helps set that up and does not bill the model. Optional 14-day delivery is $2,500 more ($12,500 total). Presenters: Patrick Diamitani (SalesGency) and Geraldy Jean-Baptiste (Unleash Your Sales Greatness). Payment is 50% at signed agreement, 50% on delivery.`;

export const sendQuoteMessage = createServerFn({ method: "POST" })
  .validator((input: { messages: ChatMessage[] }) => {
    const messages = Array.isArray(input.messages)
      ? input.messages.slice(-12).map((m) => ({
          role: m.role === "assistant" ? ("assistant" as const) : ("user" as const),
          content: String(m.content ?? "").slice(0, 3000),
        }))
      : [];
    return { messages };
  })
  .handler(async ({ data }): Promise<{ ok: true; text: string } | { ok: false; error: string }> => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return { ok: false, error: "The concierge is unavailable in this environment." };
    }

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 500,
        temperature: 0.5,
        messages: [
          { role: "system", content: SYSTEM },
          ...data.messages,
        ],
      }),
    });

    if (!res.ok) {
      return { ok: false, error: "The atelier could not reach the concierge. Please try again." };
    }

    const body = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = body.choices?.[0]?.message?.content?.trim() ?? "";
    if (!text) return { ok: false, error: "No reply was returned." };
    return { ok: true, text };
  });
