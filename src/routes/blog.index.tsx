import { PageBanner, Section } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import { BLOGS } from "@/lib/site-data";
import { Link } from "@/lib/navigation";

export function BlogIndexPage() {
  return (
    <>
      <PageBanner
        title="Insights & Analysis"
        subtitle="Notes from the field — research, campaigns and growth ideas."
        image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=80"
        crumbs={[{ label: "Blog" }]}
      />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOGS.map((b, i) => (
            <Reveal key={b.slug} delay={i * 60}>
              <Link
                to="/blog/$slug"
                params={{ slug: b.slug }}
                className="card-soft overflow-hidden h-full block hover:[&]:card-soft-hover"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                    {b.category} · {b.date}
                  </span>
                  <h2 className="mt-2 font-semibold text-secondary">{b.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{b.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
