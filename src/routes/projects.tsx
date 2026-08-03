import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RealProjects } from "@/components/RealProjects";
import { projectFilters, projects } from "@/lib/projects-data";

const TITLE = "Our Projects — Insulation & Rendering, West Midlands";
const DESCRIPTION =
  "Recent Eco Insulate Limited projects: external wall insulation, silicone render and cladding across Birmingham, Dudley, Solihull and Coventry.";
const URL = "https://build-buddy-planner-02.lovable.app/projects";
const OG_IMAGE = `https://build-buddy-planner-02.lovable.app${projects[0]?.img ?? ""}`;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState("All projects");
  const shown =
    filter === "All projects" ? projects : projects.filter((p) => p.tag === filter);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-ink py-16 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <p className="eyebrow text-primary">Our work</p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-tight font-bold md:text-5xl">
            Insulation, render and cladding projects across the West Midlands
          </h1>
          <p className="mt-4 max-w-2xl text-ink-foreground/75">
            Genuine photographs from recent Eco Insulate Limited jobs — from full external wall
            insulation systems to render refreshes and new-build cladding.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap gap-3">
            {projectFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-sm px-4 py-2 font-display text-xs font-bold tracking-widest uppercase transition-colors ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/70"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <article
                key={p.title}
                className="overflow-hidden rounded-sm bg-card"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <img
                  src={p.img}
                  alt={`${p.title} — ${p.summary}`}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
                <div className="p-5">
                  <span className="font-display text-[0.65rem] font-bold tracking-widest text-primary uppercase">
                    {p.tag}
                  </span>
                  <h2 className="mt-2 text-lg leading-tight font-semibold">{p.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                  <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="size-3.5 text-primary" />
                    {p.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RealProjects />

      <section className="bg-ink py-16 text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Want your property to look like this?</h2>
            <p className="mt-2 text-ink-foreground/75">
              Book a free survey and we&apos;ll quote your job properly, with no pressure.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase"
          >
            Get a free quote <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
