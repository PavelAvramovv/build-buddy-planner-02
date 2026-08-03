import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Facebook,
  Flame,
  Hammer,
  HardHat,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Ruler,
  Shield,
  Star,
  ThermometerSun,
  Wallet,
} from "lucide-react";

import heroHouse from "@/assets/hero-house.jpg";
import aboutSite from "@/assets/about-site.jpg";
import svcInsulation from "@/assets/svc-insulation.jpg";
import svcRender from "@/assets/svc-render.jpg";
import svcCladding from "@/assets/svc-cladding.jpg";
import svcPlaster from "@/assets/svc-plaster.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "СтройМакс — Фасади, топлоизолация и ремонти" },
      {
        name: "description",
        content:
          "Строителна фирма СтройМакс: топлоизолация на фасади, мазилки, окачени фасади и цялостни ремонти. Безплатен оглед и оферта.",
      },
      { property: "og:title", content: "СтройМакс — Строителна фирма" },
      {
        property: "og:description",
        content:
          "Топлоизолация, фасадни мазилки, облицовки и цялостни ремонти с гаранция за качество.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  { label: "Начало", href: "#top" },
  { label: "За нас", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Проекти", href: "#projects" },
  { label: "Отзиви", href: "#reviews" },
  { label: "Контакти", href: "#contact" },
];

const benefits = [
  {
    icon: Wallet,
    title: "По-ниски сметки",
    text: "До 40% икономия на разходи за отопление и ток.",
  },
  {
    icon: ThermometerSun,
    title: "Повече комфорт",
    text: "Топло през зимата, прохладно през лятото.",
  },
  {
    icon: Building2,
    title: "По-висока стойност",
    text: "Обновената фасада повишава цената на имота.",
  },
  {
    icon: Shield,
    title: "Гаранция 10 години",
    text: "Работим с сертифицирани системи и материали.",
  },
];

const services = [
  {
    img: svcInsulation,
    title: "Топлоизолация на фасади",
    text: "EPS и минерална вата с пълна сертифицирана система за максимална енергийна ефективност.",
  },
  {
    img: svcRender,
    title: "Силиконови мазилки",
    text: "Гъвкави, устойчиви на замърсяване покрития в широка гама цветове.",
  },
  {
    img: svcPlaster,
    title: "Машинни мазилки",
    text: "Вътрешни и външни мазилки с прецизна равнинност и бързи срокове.",
  },
  {
    img: svcCladding,
    title: "Окачени фасади",
    text: "Вентилируеми фасади и облицовки с модерна визия и дълъг живот.",
  },
  {
    img: heroHouse,
    title: "Цялостни ремонти",
    text: "Довършителни работи, покриви, дограма и вътрешен ремонт с един изпълнител.",
  },
];

const stats = [
  { icon: Award, value: "12+", label: "Години опит" },
  { icon: Hammer, value: "600+", label: "Завършени обекта" },
  { icon: CheckCircle2, value: "100%", label: "Доволни клиенти" },
  { icon: Star, value: "5.0", label: "Оценка в Google" },
];

const projectFilters = ["Всички проекти", "Топлоизолация", "Мазилки", "Облицовки"];

const projects = [
  { img: heroHouse, title: "Еднофамилна къща, София", tag: "Топлоизолация" },
  { img: aboutSite, title: "Фасада, Пловдив", tag: "Мазилки" },
  { img: svcCladding, title: "Пристройка, Варна", tag: "Облицовки" },
  { img: svcRender, title: "Жилищна сграда, Бургас", tag: "Мазилки" },
];

const reviews = [
  {
    text: "Отлична работа от начало до край. Екипът беше коректен, спазиха срока и качеството е на ниво.",
    name: "Иван Д.",
    city: "София",
  },
  {
    text: "Къщата изглежда като нова. Много сме доволни от изолацията и мазилката — усеща се разликата.",
    name: "Мария С.",
    city: "Пловдив",
  },
  {
    text: "Надеждни, комуникативни и на добра цена. Най-доброто решение за нашия имот.",
    name: "Михаил Т.",
    city: "Варна",
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
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5">
          <a href="#top" className="flex items-center gap-2.5 text-ink-foreground">
            <span className="flex size-9 items-center justify-center rounded-sm bg-primary text-primary-foreground">
              <HardHat className="size-5" />
            </span>
            <span className="font-display text-lg leading-none font-bold tracking-wide uppercase">
              Строймакс
              <span className="block text-[0.6rem] font-medium tracking-[0.3em] text-primary">
                строителна фирма
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-display text-sm font-semibold tracking-widest text-ink-foreground/80 uppercase transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+359888123456"
              className="hidden items-center gap-2 text-sm font-semibold text-ink-foreground sm:flex"
            >
              <Phone className="size-4 text-primary" />
              0888 123 456
            </a>
            <a
              href="#contact"
              className="rounded-sm bg-primary px-4 py-2.5 font-display text-xs font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
            >
              Безплатна оферта
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src={heroHouse}
          alt="Обновена фасада на еднофамилна къща"
          width={1600}
          height={1100}
          className="absolute inset-0 size-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 pt-40 pb-24 md:pt-52 md:pb-32">
          <p className="eyebrow">Строймакс ООД</p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl leading-[0.95] font-bold text-ink-foreground uppercase md:text-7xl">
            Специалисти по
            <br />
            фасади и
            <br />
            топлоизолация
          </h1>
          <p className="mt-6 max-w-md text-ink-foreground/75">
            Помагаме ви да намалите сметките и да подобрите комфорта на дома си с
            висококачествени изолационни системи.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#services"
              className="rounded-sm bg-primary px-6 py-3.5 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
            >
              Нашите услуги
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-ink-foreground/40 px-6 py-3.5 font-display text-sm font-bold tracking-widest text-ink-foreground uppercase transition-colors hover:border-primary hover:text-primary"
            >
              Безплатна оферта
            </a>
          </div>
          <p className="mt-10 flex items-center gap-2 text-sm text-ink-foreground/70">
            <MapPin className="size-4 text-primary" />
            База в София — работим в цялата страна
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

      {/* Services */}
      <section id="services" className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="eyebrow">Нашите услуги</p>
            <h2 className="mt-2 text-4xl font-bold">Какво предлагаме</h2>
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
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.text}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 font-display text-xs font-bold tracking-widest uppercase"
                  >
                    Научи повече
                    <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-ink py-20 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <div className="relative">
            <img
              src={aboutSite}
              alt="Работен екип на строително скеле"
              loading="lazy"
              width={1200}
              height={1000}
              className="w-full rounded-sm object-cover"
            />
            <div className="absolute bottom-5 left-5 rounded-sm bg-ink/90 px-5 py-4 backdrop-blur-sm">
              <p className="font-display text-4xl font-bold text-primary">12+</p>
              <p className="font-display text-xs tracking-widest uppercase">
                години
                <br />
                опит
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Защо нас</p>
            <h2 className="mt-2 text-4xl font-bold">Качество, което остава</h2>
            <p className="mt-4 max-w-xl text-ink-foreground/75">
              В Строймакс държим на детайла, честния съвет и високия стандарт. Работим
              само с премиум материали, а системите се монтират от опитни, обучени
              екипи.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <s.icon className="size-5 text-primary" />
                  <p className="mt-2 font-display text-2xl font-bold">{s.value}</p>
                  <p className="text-xs text-ink-foreground/60">{s.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-sm bg-primary px-6 py-3 font-display text-xs font-bold tracking-widest text-primary-foreground uppercase"
            >
              За нас
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="eyebrow">Нашите проекти</p>
            <h2 className="mt-2 text-4xl font-bold">Вижте работата ни</h2>
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
            <p className="eyebrow">Отзиви</p>
            <h2 className="mt-2 text-4xl font-bold">Какво казват клиентите</h2>
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
                <p className="mt-4 text-sm text-muted-foreground">„{r.text}“</p>
                <footer className="mt-5">
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.city}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-soft py-14 text-center text-ink-foreground">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-3xl font-bold md:text-4xl">Готови ли сте да обновите дома си?</h2>
          <p className="mt-3 text-ink-foreground/70">
            Получете безплатен оглед и оферта без ангажимент.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block rounded-sm bg-primary px-7 py-3.5 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase"
          >
            Заявете оферта
          </a>
        </div>
      </section>

      {/* Footer / contact */}
      <footer id="contact" className="bg-ink py-16 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <HardHat className="size-5" />
              </span>
              <span className="font-display text-lg font-bold tracking-wide uppercase">
                Строймакс
              </span>
            </div>
            <p className="mt-4 text-sm text-ink-foreground/65">
              Строителна фирма със седалище в София. Предлагаме пълна гама фасадни и
              довършителни решения за вашия дом.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Ruler].map((Icon, i) => (
                <span
                  key={i}
                  className="flex size-9 items-center justify-center rounded-full bg-ink-soft"
                >
                  <Icon className="size-4" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold tracking-widest uppercase">
              Бързи връзки
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/65">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold tracking-widest uppercase">
              Услуги
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/65">
              {services.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
              <li className="flex items-center gap-2">
                <Flame className="size-3.5 text-primary" /> Пожарозащита
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold tracking-widest uppercase">
              Контакти
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-foreground/65">
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary" /> 0888 123 456
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" /> office@stroymax.bg
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-primary" /> София, ул. Строителна 12
              </li>
            </ul>

            <form
              className="mt-6 space-y-2"
              onSubmit={(e) => {
                e.preventDefault();
                (e.currentTarget as HTMLFormElement).reset();
              }}
            >
              <input
                required
                placeholder="Вашето име"
                className="w-full rounded-sm bg-ink-soft px-3 py-2.5 text-sm text-ink-foreground placeholder:text-ink-foreground/40 focus:ring-2 focus:ring-primary focus:outline-hidden"
              />
              <input
                required
                type="tel"
                placeholder="Телефон"
                className="w-full rounded-sm bg-ink-soft px-3 py-2.5 text-sm text-ink-foreground placeholder:text-ink-foreground/40 focus:ring-2 focus:ring-primary focus:outline-hidden"
              />
              <textarea
                rows={3}
                placeholder="Вашето запитване"
                className="w-full rounded-sm bg-ink-soft px-3 py-2.5 text-sm text-ink-foreground placeholder:text-ink-foreground/40 focus:ring-2 focus:ring-primary focus:outline-hidden"
              />
              <button
                type="submit"
                className="w-full rounded-sm bg-primary py-3 font-display text-xs font-bold tracking-widest text-primary-foreground uppercase"
              >
                Изпрати запитване
              </button>
            </form>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-ink-foreground/10 px-5 pt-6 text-xs text-ink-foreground/50 sm:flex-row sm:justify-between">
          <p>© 2026 Строймакс ООД. Всички права запазени.</p>
          <p>Политика за поверителност · Общи условия</p>
        </div>
      </footer>
    </div>
  );
}
