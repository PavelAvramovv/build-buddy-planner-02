import { Link } from "@tanstack/react-router";
import { Facebook, HardHat, Instagram, Mail, MapPin, Phone, Ruler } from "lucide-react";

import { company, services } from "@/lib/site-content";
import { navItems } from "@/components/SiteHeader";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-ink py-16 text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-sm bg-primary text-primary-foreground">
              <HardHat className="size-5" />
            </span>
            <span className="font-display text-lg font-bold tracking-wide uppercase">
              {company.name}
            </span>
          </div>
          <p className="mt-4 text-sm text-ink-foreground/65">
            Sustainable insulation, render and plaster solutions for homes across the United
            Kingdom.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={company.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-full bg-ink-soft hover:text-primary"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={company.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full bg-ink-soft hover:text-primary"
            >
              <Instagram className="size-4" />
            </a>
            <span className="flex size-9 items-center justify-center rounded-full bg-ink-soft">
              <Ruler className="size-4" />
            </span>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest uppercase">Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/65">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  {...("hash" in item && item.hash ? { hash: item.hash } : {})}
                  className="hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest uppercase">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/65">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="hover:text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest uppercase">Contact us</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/65">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-primary" />
              <a href={company.phoneHref}>{company.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-primary" />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 text-primary" /> {company.address}
            </li>
          </ul>

          <Link
            to="/contact"
            className="mt-6 inline-block rounded-sm bg-primary px-5 py-3 font-display text-xs font-bold tracking-widest text-primary-foreground uppercase"
          >
            Request a free quote
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-ink-foreground/10 px-5 pt-6 text-xs text-ink-foreground/50 sm:flex-row sm:justify-between">
        <p>© 2026 {company.name}. All rights reserved.</p>
        <p>Privacy policy · Terms &amp; conditions</p>
      </div>
    </footer>
  );
}
