import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Eye, Heart, Target, ArrowRight } from "lucide-react";
import { PageBanner, Section, SectionTitle } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About UMP Consultants — Towards Growth" },
      { name: "description", content: "Learn about UMP Consultants — our mission, vision, values and research-led approach to political and market consulting." },
      { property: "og:title", content: "About UMP Consultants" },
      { property: "og:description", content: "Mission, vision, values and our research-led approach." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageBanner
        title="About UMP Consultants"
        subtitle="Towards Growth — a research-driven consulting practice for politics, healthcare, real-estate and business."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
        crumbs={[{ label: "About Us" }]}
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionTitle eyebrow="Who we are" title="Niche studies. Practical impact." />
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {COMPANY.name} is a start-up sworn to deliver niche studies in the fields of politics and market research. We assist political parties, government agencies, media, businesses and organizations by providing analysis grounded in evidence, accurate primary information, statistics, public opinion, recent developments, market data, surveys and reliable sources.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              UMP also partners for marketing assignments, promotions, campaign planning, area coverage, event management and strategic initiatives tailored to specific locations, industries, constituencies and audiences.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80" alt="UMP team" className="rounded-2xl shadow-xl object-cover w-full h-[420px]" />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-muted">
        <SectionTitle eyebrow="Foundations" title="Mission, vision & values" center />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, t: "Mission", d: "Equip leaders with primary evidence and on-ground execution that turns ambition into measurable growth." },
            { icon: Eye, t: "Vision", d: "To be India's most trusted partner for niche political and market research and integrated campaign delivery." },
            { icon: Heart, t: "Values", d: "Rigor, honesty, confidentiality, and accountability — in every survey, every campaign, every report." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 90}>
              <div className="card-soft p-7 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4">
                  <c.icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-secondary">{c.t}</h3>
                <p className="mt-2 text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=1200&q=80" alt="Approach" className="rounded-2xl shadow-xl object-cover w-full h-[420px]" />
          </Reveal>
          <Reveal delay={100}>
            <SectionTitle eyebrow="Our approach" title="Evidence-first. Field-driven. Outcome-led." />
            <ul className="mt-6 space-y-4">
              {[
                "Every engagement starts with the right question, not a template.",
                "We collect primary data ourselves — no recycled panels for serious decisions.",
                "We connect research, ground action and marketing as one workflow.",
                "We report what the data says — even when it is inconvenient.",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <Compass className="text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-secondary transition-colors">
              Start a conversation <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-secondary text-white">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-accent font-semibold uppercase tracking-widest text-xs">Towards Growth</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Growth is not a slogan. It is a discipline.</h2>
          <p className="mt-5 text-white/80 text-lg">
            We exist to help institutions grow — voters, patients, customers, citizens — by understanding them deeply and reaching them faithfully.
          </p>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
