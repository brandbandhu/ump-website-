import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageBanner, Section, SectionTitle } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { INDUSTRIES, SERVICES } from "@/lib/site-data";
import { NotFoundPage } from "@/components/NotFoundPage";
import { Link } from "@/lib/navigation";

export function ServicePage({ slug }: { slug: string }) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <NotFoundPage />;
  const matchedInds = INDUSTRIES.filter((i) => service.industries.includes(i.name));

  return (
    <>
      <PageBanner
        title={service.name}
        subtitle={service.short}
        image={service.hero}
        crumbs={[{ label: "Services" }, { label: service.name }]}
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <Reveal>
              <SectionTitle eyebrow="Overview" title={`${service.name} at UMP`} />
              <p className="mt-5 text-muted-foreground leading-relaxed">{service.description}</p>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="text-2xl font-bold text-secondary">Benefits</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {service.benefits.map((b: string) => (
                  <div key={b} className="card-soft p-5 flex gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" />
                    <p className="font-medium text-secondary">{b}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="text-2xl font-bold text-secondary">Our Process</h3>
              <ol className="mt-4 relative border-l-2 border-primary/20 pl-6 space-y-6">
                {service.process.map((p: { title: string; desc: string }, i: number) => (
                  <li key={p.title} className="relative">
                    <span className="absolute -left-[34px] top-1 w-7 h-7 rounded-full bg-primary text-white text-xs grid place-items-center font-bold">
                      {i + 1}
                    </span>
                    <h4 className="font-semibold text-secondary">{p.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{p.desc}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="text-2xl font-bold text-secondary">Industries Served</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {matchedInds.map((i) => (
                  <Link
                    key={i.slug}
                    to={`/industries/${i.slug}`}
                    className="card-soft p-5 hover:[&]:card-soft-hover flex items-center justify-between gap-3"
                  >
                    <div>
                      <p className="font-semibold text-secondary">{i.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{i.short}</p>
                    </div>
                    <ArrowRight className="text-primary" size={18} />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          <aside>
            <Reveal>
              <div className="card-soft p-6 sticky top-24">
                <p className="text-xs text-accent uppercase tracking-wider font-semibold">
                  Other services
                </p>
                <h4 className="mt-1 text-xl font-bold text-secondary">Explore more</h4>
                <ul className="mt-4 space-y-2">
                  {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/services/${s.slug}`}
                        className="flex items-center justify-between gap-2 p-3 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors"
                      >
                        <span className="font-medium text-sm">{s.name}</span>
                        <ArrowRight size={16} />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 block text-center px-4 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-secondary transition-colors"
                >
                  Get a quote
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
