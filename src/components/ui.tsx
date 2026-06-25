import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline" | "white";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 text-base font-medium min-h-[52px] min-w-[44px] transition-colors duration-150 focus-visible:outline-3";

const variants: Record<Variant, string> = {
  // One primary CTA per page, teal (WDS A-017, skill §4 primary-action)
  primary: "bg-teal text-white hover:bg-teal-700",
  outline: "border-2 border-teal text-teal hover:bg-teal hover:text-white",
  white: "bg-white text-teal hover:bg-bluegray",
};

export function Cta({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
  ...rest
}: {
  href: string;
  variant?: Variant;
  showArrow?: boolean;
} & ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
      {showArrow && <ArrowRight size={18} aria-hidden="true" />}
    </Link>
  );
}

export function Section({
  children,
  className = "",
  bg = "cream",
  id,
  labelledby,
}: {
  children: React.ReactNode;
  className?: string;
  bg?: "cream" | "white" | "teal" | "bluegray";
  id?: string;
  labelledby?: string;
}) {
  const bgClass = {
    cream: "bg-cream",
    white: "bg-white",
    teal: "bg-teal text-white",
    bluegray: "bg-bluegray",
  }[bg];
  return (
    <section
      id={id}
      aria-labelledby={labelledby}
      className={`${bgClass} px-4 py-12 sm:px-6 md:py-20 ${className}`}
    >
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}
