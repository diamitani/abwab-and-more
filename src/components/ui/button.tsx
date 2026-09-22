import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans text-sm tracking-wide transition-[color,background-color,border-color,transform,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze",
  {
    variants: {
      variant: {
        primary: "bg-bronze text-ink hover:bg-bronze-deep hover:text-cream",
        ink: "bg-ink text-cream hover:bg-walnut",
        outline:
          "border border-bronze/70 bg-transparent text-cream hover:bg-bronze hover:text-ink",
        cream: "border border-sand bg-cream text-ink hover:bg-parchment",
        ghost: "text-fg hover:text-walnut",
      },
      size: {
        sm: "h-10 px-4",
        md: "h-11 px-5",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
