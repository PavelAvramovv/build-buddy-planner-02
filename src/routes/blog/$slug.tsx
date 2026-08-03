import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, Clock } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { formatDate, posts, type Post } from "@/lib/site-content";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found | Eco Insulate Limited" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const title = `${post.title} | Eco Insulate Limited`;
    return {
      meta: [
        { title },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const post = Route.useLoaderData().post as Post;
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-ink py-14 text-ink-foreground">
        <div className="mx-auto max-w-3xl px-5">
          <p className="text-xs text-ink-foreground/60">
            <Link to="/blog" className="hover:text-primary">
              Blog
            </Link>{" "}
            / <span className="text-primary">{post.title}</span>
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-5 text-xs text-ink-foreground/60">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5 text-primary" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5 text-primary" />
              {post.readMins} min read
            </span>
          </div>
        </div>
      </section>

      <article className="bg-background py-14">
        <div className="mx-auto max-w-3xl px-5">
          <img
            src={post.img}
            alt={post.title}
            width={1200}
            height={750}
            className="w-full rounded-sm object-cover"
          />
          <p className="mt-8 text-lg text-muted-foreground">{post.excerpt}</p>

          {post.paragraphs.map((p, i) => (
            <div key={i} className="mt-7">
              {p.heading && <h2 className="text-2xl font-bold">{p.heading}</h2>}
              <p className="mt-3 text-muted-foreground">{p.body}</p>
            </div>
          ))}

          <div className="mt-12 rounded-sm bg-surface p-6">
            <h2 className="text-xl font-bold">Thinking about this for your home?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Book a free survey and we will give you honest advice and a fixed written price.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-block rounded-sm bg-primary px-5 py-3 font-display text-xs font-bold tracking-widest text-primary-foreground uppercase"
            >
              Get a free quote
            </Link>
          </div>

          <div className="mt-14">
            <h2 className="font-display text-sm font-bold tracking-widest uppercase">
              More articles
            </h2>
            <ul className="mt-4 space-y-3">
              {more.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="font-semibold hover:text-primary"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
