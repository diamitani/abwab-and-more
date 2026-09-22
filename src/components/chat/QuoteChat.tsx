import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageSquare, Send, X } from "lucide-react";
import { sendQuoteMessage, type ChatMessage } from "@/lib/quote-agent";
import { cn } from "@/lib/utils";

const STARTERS = [
  "I need interior doors for a new home.",
  "Quote the Natural Elegance kitchen.",
  "What is the lead time for Luxor Line 03?",
];

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Welcome to the atelier. I can help you specify a door, kitchen, or dressing room and prepare a preliminary estimate. Which collection are you considering?",
};

export function QuoteChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, open, pending]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || pending) return;
    const next: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setPending(true);
    setError(null);
    const result = await sendQuoteMessage({ data: { messages: next } });
    setPending(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setMessages([...next, { role: "assistant", content: result.text }]);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "fixed right-5 bottom-5 z-50 flex h-14 items-center gap-2 bg-ink px-5 text-cream shadow-border transition-opacity duration-150 hover:bg-walnut",
          open && "pointer-events-none opacity-0",
        )}
        aria-label="Open quote concierge"
      >
        <MessageSquare className="size-4" />
        <span className="text-xs tracking-[0.18em] uppercase">Quote Concierge</span>
      </button>

      {open ? (
        <div className="fixed inset-x-0 bottom-0 z-50 flex max-h-[92svh] flex-col bg-cream text-fg shadow-border sm:inset-auto sm:right-5 sm:bottom-5 sm:h-[min(640px,86svh)] sm:w-[380px]">
          <div className="flex items-center justify-between bg-ink px-4 py-3 text-cream">
            <div>
              <p className="font-display text-lg tracking-wide">Atelier Concierge</p>
              <p className="text-[10px] tracking-[0.18em] text-bronze uppercase">
                Preliminary quotes
              </p>
            </div>
            <button
              type="button"
              className="flex size-11 items-center justify-center"
              aria-label="Close concierge"
              onClick={() => setOpen(false)}
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={`${m.role}-${i}`}
                className={cn(
                  "max-w-[92%] px-3 py-2 text-sm leading-relaxed",
                  m.role === "assistant"
                    ? "bg-parchment text-fg"
                    : "ml-auto bg-ink text-cream",
                )}
              >
                {m.content}
              </div>
            ))}
            {pending ? (
              <p className="text-xs tracking-[0.16em] text-muted uppercase">Considering…</p>
            ) : null}
            {error ? <p className="text-sm text-walnut">{error}</p> : null}
            <div ref={endRef} />
          </div>

          {messages.length < 3 ? (
            <div className="flex flex-wrap gap-2 px-4 pb-2">
              {STARTERS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="border border-sand px-3 py-2 text-left text-xs text-walnut hover:border-bronze"
                >
                  {s}
                </button>
              ))}
            </div>
          ) : null}

          <form
            className="flex items-end gap-2 border-t border-sand p-3"
            onSubmit={(e) => {
              e.preventDefault();
              void send(input);
            }}
          >
            <label className="sr-only" htmlFor="concierge-input">
              Message
            </label>
            <textarea
              id="concierge-input"
              rows={2}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  void send(input);
                }
              }}
              placeholder="Describe the project"
              className="min-h-11 flex-1 resize-none bg-surface px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-bronze"
            />
            <button
              type="submit"
              disabled={pending || !input.trim()}
              className="flex size-11 shrink-0 items-center justify-center bg-ink text-cream disabled:opacity-40"
              aria-label="Send"
            >
              <Send className="size-4" />
            </button>
          </form>
          <Link
            to="/quote"
            onClick={() => setOpen(false)}
            className="bg-parchment py-3 text-center text-[11px] tracking-[0.18em] text-walnut uppercase hover:text-ink"
          >
            Open full quote form
          </Link>
        </div>
      ) : null}
    </>
  );
}
