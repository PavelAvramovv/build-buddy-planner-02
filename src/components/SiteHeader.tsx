import { Link } from "@tanstack/react-router";
import { HardHat, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { company } from "@/lib/site-content";

export const navItems = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/" as const, hash: "about" },
  { label: "Services", to: "/services" as const },
  { label: "Projects", to: "/projects" as const },
  { label: "AI Visualiser", to: "/" as const, hash: "visualiser" },
  { label: "Blog", to: "/blog" as const },
  { label: "AI Assistant", to: "/chat" as const },
  { label: "Contact", to: "/contact" as const },
];


export function SiteHeader({ variant = "solid" }: { variant?: "solid" | "overlay" }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={
        variant === "overlay"
          ? "absolute inset-x-0 top-0 z-30"
          : "sticky top-0 z-30 bg-ink"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5">
        <Link to="/" className="flex items-center gap-2.5 text-ink-foreground">
          <span className="flex size-9 items-center justify-center rounded-sm bg-primary text-primary-foreground">
            <HardHat className="size-5" />
          </span>
          <span className="font-display text-lg leading-none font-bold tracking-wide uppercase">
            Eco Insulate
            <span className="block text-[0.6rem] font-medium tracking-[0.3em] text-primary">
              limited
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              {...("hash" in item && item.hash ? { hash: item.hash } : {})}
              className="font-display text-sm font-semibold tracking-widest text-ink-foreground/80 uppercase transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={company.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-ink-foreground sm:flex"
          >
            <Phone className="size-4 text-primary" />
            {company.phone}
          </a>
          <Link
            to="/contact"
            className="rounded-sm bg-primary px-3 py-2.5 font-display text-[0.7rem] font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:-translate-y-0.5 sm:px-4 sm:text-xs"
          >
            Free quote
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 shrink-0 items-center justify-center rounded-sm border border-ink-foreground/25 text-ink-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-ink-foreground/10 bg-ink lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                {...("hash" in item && item.hash ? { hash: item.hash } : {})}
                onClick={() => setOpen(false)}
                className="border-b border-ink-foreground/10 py-3.5 font-display text-sm font-semibold tracking-widest text-ink-foreground/85 uppercase last:border-b-0"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 py-3.5 text-sm font-semibold text-ink-foreground sm:hidden"
            >
              <Phone className="size-4 text-primary" />
              {company.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
