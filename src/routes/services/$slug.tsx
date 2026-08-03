import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, Phone } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { company, services, type Service } from "@/lib/site-content";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found | Eco Insulate Limited" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    const title = `${service.title} | Eco Insulate Limited`;
    const url = `https://build-buddy-planner-02.lovable.app/services/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: service.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: service.intro },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.intro,
            areaServed: "United Kingdom",
            provider: { "@type": "LocalBusiness", name: "Eco Insulate Limited", telephone: "07979 112991" },
            url,
          }),
        },
      ],
    };
  },

  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData().service as Service;
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-ink py-14 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <p className="text-xs text-ink-foreground/60">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/services" className="hover:text-primary">
              Services
            </Link>{" "}
            / <span className="text-primary">{service.title}</span>
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-ink-foreground/70">{service.intro}</p>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <img
              src={service.img}
              alt={service.title}
              width={1200}
              height={800}
              className="w-full rounded-sm object-cover"
            />

            <p className="mt-8 text-muted-foreground">{service.text}</p>

            {service.sections.map((sec) => (
              <div key={sec.heading} className="mt-8">
                <h2 className="text-2xl font-bold">{sec.heading}</h2>
                <p className="mt-3 text-muted-foreground">{sec.body}</p>
              </div>
            ))}

            {service.faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Frequently asked</h2>
                <div className="mt-4 space-y-3">
                  {service.faqs.map((f) => (
                    <details key={f.q} className="rounded-sm border border-border bg-card p-5">
                      <summary className="cursor-pointer list-none font-semibold">{f.q}</summary>
                      <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-sm bg-ink p-6 text-ink-foreground">
              <h2 className="font-display text-lg font-bold uppercase">Free consultation</h2>
              <p className="mt-2 text-sm text-ink-foreground/70">
                Tell us about your property and we will provide a written, fixed-price quotation.
              </p>
              <a
                href={company.phoneHref}
                className="mt-4 flex items-center gap-2 font-semibold text-primary"
              >
                <Phone className="size-4" /> {company.phone}
              </a>
              <Link
                to="/contact"
                className="mt-5 inline-block rounded-sm bg-primary px-5 py-3 font-display text-xs font-bold tracking-widest text-primary-foreground uppercase"
              >
                Request a quote
              </Link>
            </div>

            <div className="rounded-sm border border-border bg-card p-6">
              <h2 className="font-display text-sm font-bold tracking-widest uppercase">
                What's included
              </h2>
              <ul className="mt-4 space-y-2">
                {service.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-sm border border-border bg-card p-6">
              <h2 className="font-display text-sm font-bold tracking-widest uppercase">
                Other services
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
