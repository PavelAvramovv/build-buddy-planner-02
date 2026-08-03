import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Hammer,
  MapPin,
  Shield,
  Star,
  ThermometerSun,
  Wallet,
} from "lucide-react";

import { BeforeAfterAI } from "@/components/BeforeAfterAI";
import { RealProjects } from "@/components/RealProjects";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GoogleMap } from "@/components/GoogleMap";
import { services } from "@/lib/site-content";

import heroHouse from "@/assets/hero-house.jpg";
import aboutSite from "@/assets/about-site.jpg";
import svcRender from "@/assets/svc-render.jpg";
import svcCladding from "@/assets/svc-cladding.jpg";
import proj1After from "@/assets/proj1-after.jpg.asset.json";
import proj2After from "@/assets/proj2-after.jpg.asset.json";
import proj2AfterSide from "@/assets/proj2-after-side.jpg.asset.json";
import proj3Progress from "@/assets/proj3-progress.jpg.asset.json";
import proj4Complete from "@/assets/proj4-complete.jpg.asset.json";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eco Insulate Limited — Insulation & Rendering UK" },
      {
        name: "description",
        content:
          "Eco Insulate Limited installs eco-friendly insulation, render and plaster finishes across the UK. Free consultation and AI before & after visualiser.",
      },
      { property: "og:title", content: "Eco Insulate Limited — Building a sustainable future for your home" },
      {
        property: "og:description",
        content:
          "Professional insulation installation, eco-friendly materials and energy efficiency consultations across the United Kingdom.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://build-buddy-planner-02.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://build-buddy-planner-02.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Eco Insulate Limited",
          description:
            "Insulation installation, eco-friendly materials, external wall cladding, render and plaster across the UK.",
          telephone: "07979 112991",
          email: "ecoisulatelimited@gmail.com",
          url: "https://build-buddy-planner-02.lovable.app/",
          address: { "@type": "PostalAddress", addressLocality: "Birmingham", addressCountry: "GB" },
          areaServed: "United Kingdom",
          geo: { "@type": "GeoCoordinates", latitude: 52.4762122, longitude: -2.0792682 },
        }),
      },
    ],
  }),

  component: Index,
});


const benefits = [
  {
    icon: Wallet,
    title: "Lower energy bills",
    text: "Save up to 40% on your heating and energy costs.",
  },
  {
    icon: ThermometerSun,
    title: "Year-round comfort",
    text: "Warm in the winter, cool through the summer.",
  },
  {
    icon: Building2,
    title: "Added property value",
    text: "A refreshed, well-insulated façade raises your home's value.",
  },
  {
    icon: Shield,
    title: "Quality guaranteed",
    text: "Certified systems fitted by skilled, experienced installers.",
  },
];


const stats = [
  { icon: Award, value: "12+", label: "Years of experience" },
  { icon: Hammer, value: "600+", label: "Projects completed" },
  { icon: CheckCircle2, value: "100%", label: "Happy customers" },
  { icon: Star, value: "5.0", label: "Google rating" },
];

const projectFilters = ["All projects", "Insulation", "Render", "Cladding"];

const projects = [
  { img: proj2After.url, title: "Full render, Dudley", tag: "Render" },
  { img: proj1After.url, title: "EWI + silicone render, Dudley", tag: "Insulation" },
  { img: proj3Progress.url, title: "Semi-detached, work in progress", tag: "Insulation" },
  { img: proj4Complete.url, title: "Detached house, Solihull", tag: "Render" },
  { img: proj2AfterSide.url, title: "Side elevation, Dudley", tag: "Render" },
  { img: svcCladding, title: "Rear extension, Coventry", tag: "Cladding" },
  { img: heroHouse, title: "Detached house, Birmingham", tag: "Insulation" },
  { img: aboutSite, title: "Terrace façade, Solihull", tag: "Render" },
  { img: svcRender, title: "Apartment block, Wolverhampton", tag: "Render" },
];


const faqs = [
  {
    q: "What types of insulation materials do you offer?",
    a: "We offer a variety of insulation materials, including natural fibres and recycled options, all of which are eco-friendly and effective.",
  },
  {
    q: "Do you provide energy efficiency assessments?",
    a: "Yes, we provide energy efficiency assessments to help you optimise your home's energy usage and save money.",
  },
  {
    q: "How can I schedule an installation consultation?",
    a: "You can schedule an installation consultation by contacting our team directly via phone or email.",
  },
];

const reviews = [
  {
    text: "Eco Insulate Limited provided exceptional service, delivering top-notch insulation for my home. Their attention to detail and eco-friendly approach truly set them apart from the rest.",
    name: "Sarah Johnson",
    city: "Birmingham",
  },
  {
    text: "The team turned up on time, worked cleanly and the finish on the render is superb. Our home feels noticeably warmer already.",
    name: "David M.",
    city: "Solihull",
  },
  {
    text: "Honest advice, fair pricing and excellent workmanship. I would not hesitate to recommend them to anyone.",
    name: "Priya K.",
    city: "Coventry",
  },
];

function Index() {
  const [activeFilter, setActiveFilter] = useState(projectFilters[0]);

  const visibleProjects =
    activeFilter === projectFilters[0]
      ? projects
      : projects.filter((p) => p.tag === activeFilter);

  return (
    <div id="top" className="min-h-screen bg-background">
      {/* Header */}
      <SiteHeader variant="overlay" />


      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src={heroHouse}
          alt="Newly insulated and rendered family home"
          width={1600}
          height={1100}
          className="absolute inset-0 size-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 pt-40 pb-24 md:pt-52 md:pb-32">
          <p className="eyebrow">Eco Insulate Limited</p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl leading-[0.95] font-bold text-ink-foreground uppercase md:text-7xl">
            Building a
            <br />
            sustainable future
            <br />
            for your home
          </h1>
          <p className="mt-6 max-w-md text-ink-foreground/75">
            A leading construction company in the United Kingdom, specialising in eco-friendly
            insulation solutions — your value for money.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#services"
              className="rounded-sm bg-primary px-6 py-3.5 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
            >
              Explore services
            </a>
            <a
              href="#visualiser"
              className="rounded-sm border border-ink-foreground/40 px-6 py-3.5 font-display text-sm font-bold tracking-widest text-ink-foreground uppercase transition-colors hover:border-primary hover:text-primary"
            >
              Try the AI visualiser
            </a>
          </div>
          <p className="mt-10 flex items-center gap-2 text-sm text-ink-foreground/70">
            <MapPin className="size-4 text-primary" />
            Based in Birmingham — working across the United Kingdom
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-4">
              <b.icon className="size-8 shrink-0 stroke-[1.25] text-ink" />
              <div>
                <h3 className="text-base font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UK coverage */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" />
            <span>
              <span className="font-semibold text-foreground">Areas we cover:</span> Birmingham,
              Solihull, Coventry, Wolverhampton, the West Midlands and nationwide across the UK.
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Shield className="size-4 text-primary" />
            Work carried out to UK Building Regulations &amp; PAS 2035 standards
          </p>
        </div>
      </section>


      {/* Services */}
      <section id="services" className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="eyebrow">Our services</p>
            <h2 className="mt-2 text-4xl font-bold">What we offer</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              With a commitment to sustainability and quality, we offer a comprehensive range of
              services to meet all your insulation needs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s) => (
              <article
                key={s.title}
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
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg leading-tight font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                  <ul className="mt-3 flex-1 space-y-1.5">
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
                    className="mt-5 inline-flex items-center gap-2 font-display text-xs font-bold tracking-widest uppercase"
                  >
                    Read more
                    <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                  </Link>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI before & after visualiser */}
      <BeforeAfterAI />

      {/* About */}
      <section id="about" className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <div className="relative">
            <img
              src={aboutSite}
              alt="Our installation team working on a scaffolded façade"
              loading="lazy"
              width={1200}
              height={1000}
              className="w-full rounded-sm object-cover"
            />
            <div className="absolute bottom-5 left-5 rounded-sm bg-ink/90 px-5 py-4 text-ink-foreground backdrop-blur-sm">
              <p className="font-display text-4xl font-bold text-primary">12+</p>
              <p className="font-display text-xs tracking-widest uppercase">
                years of
                <br />
                experience
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">About us</p>
            <h2 className="mt-2 text-4xl font-bold">Welcome to Eco Insulate Limited</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              At Eco Insulate Limited, we are dedicated to providing sustainable insulation
              solutions that make a difference. With a focus on eco-friendly materials and energy
              efficiency, we strive to create a more sustainable future for homes across the United
              Kingdom. Our installations are carried out by skilled professionals, ensuring
              top-quality results and customer satisfaction.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <s.icon className="size-5 text-primary" />
                  <p className="mt-2 font-display text-2xl font-bold">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-block rounded-sm bg-primary px-6 py-3 font-display text-xs font-bold tracking-widest text-primary-foreground uppercase"
            >
              Get in touch
            </Link>

          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="eyebrow">Our projects</p>
            <h2 className="mt-2 text-4xl font-bold">See our work</h2>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {projectFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-full px-4 py-2 font-display text-xs font-bold tracking-widest uppercase transition-colors ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visibleProjects.map((p) => (
              <figure key={p.title} className="group relative overflow-hidden rounded-sm">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={900}
                  height={700}
                  className="aspect-3/4 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-ink/80 p-4 text-ink-foreground">
                  <p className="font-display text-sm font-bold tracking-wide uppercase">
                    {p.title}
                  </p>
                  <p className="text-xs text-primary">{p.tag}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="eyebrow">Reviews</p>
            <h2 className="mt-2 text-4xl font-bold">What our customers say</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <blockquote
                key={r.name}
                className="rounded-sm border border-border bg-card p-6"
              >
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">“{r.text}”</p>
                <footer className="mt-5">
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.city}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-2 text-4xl font-bold">Frequently asked questions</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-sm border border-border bg-card p-5"
              >
                <summary className="cursor-pointer list-none font-semibold">{f.q}</summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-soft py-14 text-center text-ink-foreground">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to upgrade your home?</h2>
          <p className="mt-3 text-ink-foreground/70">
            Get in touch today for a free consultation on your insulation needs. Alternatively call
            07979 112991.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-sm bg-primary px-7 py-3.5 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase"
          >
            Request a free quote
          </Link>

        </div>
      </section>

      {/* Map */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="eyebrow">Find us</p>
            <h2 className="mt-2 text-4xl font-bold">Where we are based</h2>
          </div>
          <GoogleMap className="mt-10" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

