import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GoogleMap } from "@/components/GoogleMap";
import { company } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us in Birmingham | Eco Insulate Limited" },
      {
        name: "description",
        content:
          "Contact Eco Insulate Limited in Birmingham for a free insulation, render or cladding quote. Call 07979 112991 or send us a message — we cover the West Midlands and the UK.",
      },
      { property: "og:title", content: "Contact Eco Insulate Limited" },
      {
        property: "og:description",
        content: "Free surveys and fixed-price quotations across Birmingham and the UK.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://build-buddy-planner-02.lovable.app/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://build-buddy-planner-02.lovable.app/contact" }],
  }),

  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-ink py-16 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 font-display text-5xl font-bold uppercase">Get in touch</h1>
          <p className="mt-4 max-w-2xl text-ink-foreground/70">
            Tell us about your property and we will arrange a free survey and a written, fixed-price
            quotation.
          </p>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <form
              className="mt-6 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                (e.currentTarget as HTMLFormElement).reset();
              }}
            >
              <input
                required
                placeholder="Name"
                className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden"
              />
              <input
                required
                type="email"
                placeholder="Email address"
                className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden"
              />
              <input
                placeholder="Phone number"
                className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden"
              />
              <textarea
                rows={5}
                placeholder="Tell us about the property and the work you need"
                className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden"
              />
              <button
                type="submit"
                className="rounded-sm bg-primary px-6 py-3 font-display text-xs font-bold tracking-widest text-primary-foreground uppercase"
              >
                Submit form
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Company details</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 text-primary" />
                <a href={company.phoneHref} className="font-semibold">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 text-primary" />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 size-4 text-primary" />
                {company.address}
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock className="mt-0.5 size-4 text-primary" />
                Monday to Saturday, 8:00 — 18:00
              </li>
            </ul>

            <p className="mt-6 text-sm text-muted-foreground">
              We cover Birmingham, Solihull, Coventry, Wolverhampton, the West Midlands and work
              nationwide across the UK.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl px-5">
          <GoogleMap />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
