import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageBanner, Section } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { BLOGS } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOGS.find((b) => b.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.title} — UMP Blog` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p.image },
      ],
      links: [{ rel: "canonical", href: `/blog/${p.slug}` }],
    };
  },
  component: BlogDetail,
});

function BlogDetail() {
  const { post } = Route.useLoaderData();
  const related = BLOGS.filter((b) => b.slug !== post.slug).slice(0, 3);
  return (
    <>
      <PageBanner
        title={post.title}
        subtitle={`${post.category} · ${post.date}`}
        image={post.image}
        crumbs={[{ label: "Blog", to: "/blog" }, { label: post.title }]}
      />
      <Section>
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          <Reveal>
            <article className="prose prose-lg max-w-none">
              <img src={post.image} alt={post.title} className="rounded-2xl shadow-md w-full h-80 object-cover" />
              <p className="mt-6 text-lg text-muted-foreground italic">{post.excerpt}</p>
              {post.body.split("\n\n").map((para: string, i: number) => (
                <p key={i} className="mt-5 text-secondary leading-relaxed">{para}</p>
              ))}
            </article>
          </Reveal>
          <aside>
            <Reveal>
              <div className="card-soft p-6 sticky top-24">
                <p className="text-xs text-accent uppercase tracking-wider font-semibold">Related reads</p>
                <ul className="mt-4 space-y-4">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link to="/blog/$slug" params={{ slug: r.slug }} className="group block">
                        <p className="text-xs text-muted-foreground">{r.category} · {r.date}</p>
                        <p className="font-semibold text-secondary group-hover:text-primary transition-colors">{r.title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
                  All posts <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
