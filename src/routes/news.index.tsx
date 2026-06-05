import { PageBanner, Section } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import { NEWS } from "@/lib/site-data";
import { Link } from "@/lib/navigation";

export function NewsIndexPage() {
  return (
    <>
      <PageBanner
        title="Newsroom"
        subtitle="Announcements, research releases and field updates from UMP."
        image="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1600&q=80"
        crumbs={[{ label: "News" }]}
      />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS.map((n, i) => (
            <Reveal key={n.slug} delay={i * 60}>
              <Link
                to="/news/$slug"
                params={{ slug: n.slug }}
                className="card-soft overflow-hidden h-full block hover:[&]:card-soft-hover"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                    {n.category} · {n.date}
                  </span>
                  <h2 className="mt-2 font-semibold text-secondary">{n.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{n.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
