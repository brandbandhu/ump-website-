import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Lightbulb, Search, Rocket, FileBarChart, ClipboardList } from "lucide-react";
import { PageBanner, Section, SectionTitle } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { INDUSTRIES, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = INDUSTRIES.find((i) => i.slug === params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData }) => {
    const i = loaderData?.industry;
    if (!i) return {};
    return {
      meta: [
        { title: `${i.name} — UMP Consultants` },
        { name: "description", content: i.short },
        { property: "og:title", content: `${i.name} — UMP Consultants` },
        { property: "og:description", content: i.short },
        { property: "og:image", content: i.hero },
      ],
      links: [{ rel: "canonical", href: `/industries/${i.slug}` }],
    };
  },
  component: IndustryPage,
});

function IndustryPage() {
  const { industry } = Route.useLoaderData();
  const serviceMap = SERVICES.reduce<Record<string, (typeof SERVICES)[number]>>((acc, s) => {
    acc[s.name] = s;
    return acc;
  }, {});

  return (
    <>
      <PageBanner
        title={industry.name}
        subtitle={industry.short}
        image={industry.hero}
        crumbs={[{ label: "Industries" }, { label: industry.name }]}
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <Reveal>
              <SectionTitle eyebrow="Overview" title={`What we do for ${industry.name}`} />
              <p className="mt-5 text-muted-foreground leading-relaxed">{industry.overview}</p>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="text-2xl font-bold text-secondary">Industry Challenges</h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {industry.challenges.map((c: string) => (
                  <li key={c} className="card-soft p-4 flex gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0" />
                    <span className="text-secondary">{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="text-2xl font-bold text-secondary">UMP Solutions</h3>
              <ul className="mt-4 space-y-3">
                {industry.solutions.map((s: string) => (
                  <li key={s} className="flex gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" />
                    <span className="text-secondary">{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="text-2xl font-bold text-secondary">Benefits</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {industry.benefits.map((b: string) => (
                  <div key={b} className="card-soft p-5">
                    <p className="font-medium text-secondary">{b}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="text-2xl font-bold text-secondary">Our Process</h3>
              <div className="mt-4 grid sm:grid-cols-5 gap-3">
                {[
                  { i: Search, t: "Understand" },
                  { i: ClipboardList, t: "Research" },
                  { i: Lightbulb, t: "Analyze" },
                  { i: Rocket, t: "Execute" },
                  { i: FileBarChart, t: "Report" },
                ].map((p, idx) => (
                  <div key={p.t} className="card-soft p-4 text-center">
                    <p.i className="mx-auto text-primary" />
                    <p className="text-xs text-accent font-semibold uppercase mt-2">Step {idx + 1}</p>
                    <p className="font-semibold text-secondary text-sm">{p.t}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="space-y-6">
            <Reveal>
              <div className="card-soft p-6 sticky top-24">
                <p className="text-xs text-accent uppercase tracking-wider font-semibold">Services Used</p>
                <h4 className="mt-1 text-xl font-bold text-secondary">Solutions deployed</h4>
                <ul className="mt-4 space-y-2">
                  {industry.services.map((sName: string) => {
                    const s = serviceMap[sName];
                    if (!s) return null;
                    return (
                      <li key={s.slug}>
                        <Link to={`/services/${s.slug}`} className="flex items-center justify-between gap-2 p-3 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors">
                          <span className="font-medium text-sm">{s.name}</span>
                          <ArrowRight size={16} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <Link to="/contact" className="mt-6 block text-center px-4 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-secondary transition-colors">
                  Discuss your brief
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
