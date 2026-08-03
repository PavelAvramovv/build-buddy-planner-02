import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { services } from "@/lib/site-content";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Insulation, Render & Cladding Services | Eco Insulate Limited" },
      {
        name: "description",
        content:
          "Explore our UK insulation, eco-friendly materials, energy efficiency consultations, external wall cladding and render services. Free survey and fixed pricing.",
      },
      { property: "og:title", content: "Our Services — Eco Insulate Limited" },
      {
        property: "og:description",
        content:
          "Insulation installation, eco-friendly materials, energy assessments, cladding and render finishes across the UK.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-ink py-16 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <p className="eyebrow">Our services</p>
          <h1 className="mt-3 font-display text-5xl font-bold uppercase">What we offer</h1>
          <p className="mt-4 max-w-2xl text-ink-foreground/70">
            With a commitment to sustainability and quality, we offer a comprehensive range of
            services to meet all your insulation, render and façade needs across the UK.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.slug}
              className="group flex flex-col overflow-hidden rounded-sm bg-card"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={900}
                  height={700}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl leading-tight font-semibold">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                <ul className="mt-4 flex-1 space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="mt-6 inline-flex items-center gap-2 font-display text-xs font-bold tracking-widest uppercase"
                >
                  Read more
                  <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
