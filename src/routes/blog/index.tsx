import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { formatDate, posts } from "@/lib/site-content";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Insulation & Rendering Blog | Eco Insulate Limited" },
      {
        name: "description",
        content:
          "Practical advice on external wall insulation, render finishes, PAS 2035 and cutting energy bills in UK homes, written by our installers.",
      },
      { property: "og:title", content: "Blog — Eco Insulate Limited" },
      {
        property: "og:description",
        content: "Guides on insulation costs, render choices and energy efficiency for UK homes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-ink py-16 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <p className="eyebrow">Blog</p>
          <h1 className="mt-3 font-display text-5xl font-bold uppercase">Advice &amp; insight</h1>
          <p className="mt-4 max-w-2xl text-ink-foreground/70">
            Straight-talking guides on insulation, render and energy efficiency, written by the team
            that does the work.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-sm bg-card"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="aspect-16/10 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={900}
                  height={560}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="size-3.5 text-primary" />
                    {formatDate(p.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5 text-primary" />
                    {p.readMins} min read
                  </span>
                </div>
                <h2 className="mt-3 text-xl leading-tight font-semibold">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="mt-5 inline-flex items-center gap-2 font-display text-xs font-bold tracking-widest uppercase"
                >
                  Read article
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
