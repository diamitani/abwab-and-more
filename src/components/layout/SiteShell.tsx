import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { QuoteChat } from "@/components/chat/QuoteChat";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh bg-cream text-fg">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <QuoteChat />
    </div>
  );
}
