import { ArrowRight } from "lucide-react";
import { PageBanner, Section } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { NEWS } from "@/lib/site-data";
import { NotFoundPage } from "@/components/NotFoundPage";
import { Link } from "@/lib/navigation";

export function NewsDetailPage({ slug }: { slug: string }) {
  const post = NEWS.find((b) => b.slug === slug);
  if (!post) return <NotFoundPage />;
  const related = NEWS.filter((b) => b.slug !== post.slug).slice(0, 3);
  return (
    <>
      <PageBanner
        title={post.title}
        subtitle={`${post.category} · ${post.date}`}
        image={post.image}
        crumbs={[{ label: "News", to: "/news" }, { label: post.title }]}
      />
      <Section>
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          <Reveal>
            <article className="prose prose-lg max-w-none">
              <img
                src={post.image}
                alt={post.title}
                className="rounded-2xl shadow-md w-full h-80 object-cover"
              />
              <p className="mt-6 text-lg text-muted-foreground italic">{post.excerpt}</p>
              {post.body.split("\n\n").map((para: string, i: number) => (
                <p key={i} className="mt-5 text-secondary leading-relaxed">
                  {para}
                </p>
              ))}
            </article>
          </Reveal>
          <aside>
            <Reveal>
              <div className="card-soft p-6 sticky top-24">
                <p className="text-xs text-accent uppercase tracking-wider font-semibold">
                  More news
                </p>
                <ul className="mt-4 space-y-4">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link to="/news/$slug" params={{ slug: r.slug }} className="group block">
                        <p className="text-xs text-muted-foreground">
                          {r.category} · {r.date}
                        </p>
                        <p className="font-semibold text-secondary group-hover:text-primary transition-colors">
                          {r.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/news"
                  className="mt-6 inline-flex items-center gap-2 text-primary font-semibold"
                >
                  All news <ArrowRight size={16} />
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
