import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Stethoscope,
  Vote,
  Pill,
  ClipboardList,
  MapPin,
  Megaphone,
  TrendingUp,
  CalendarDays,
  Target,
  CheckCircle2,
  Search,
  Lightbulb,
  Rocket,
  FileBarChart,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionTitle } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { BLOGS, INDUSTRIES, NEWS, SERVICES } from "@/lib/site-data";
import { Link } from "@/lib/navigation";

const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  hospitals: Stethoscope,
  "building-construction": Building2,
  "social-life-politics": Vote,
  "healthcare-pharma": Pill,
};
const SERVICE_ICONS: Record<string, LucideIcon> = {
  surveys: ClipboardList,
  "area-coverage": MapPin,
  promotion: Megaphone,
  marketing: TrendingUp,
  "event-management": CalendarDays,
  "strategic-initiatives": Target,
};

const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=85",
    alt: "Consulting team planning a research strategy",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2200&q=85",
    alt: "Data dashboard used for market research insights",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2200&q=85",
    alt: "Business team reviewing growth plans",
  },
];

export function HomePage() {
  const [heroImage, setHeroImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroImage((current) => (current + 1) % HERO_IMAGES.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative w-full overflow-hidden md:flex md:h-[calc(100svh-5rem)] md:min-h-[680px] md:max-h-[815px] md:items-center">
        {HERO_IMAGES.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === heroImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/15" />
        <div className="relative container-x py-20 md:py-24 lg:py-28 text-white">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent bg-white/10 border border-white/15 rounded-full px-3 py-1 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Towards Growth
            </p>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
              Research-Driven Consulting <br className="hidden md:block" />
              for <span className="text-gradient bg-clip-text">Smarter Growth</span>
            </h1>
            <p className="mt-5 text-white/85 text-lg max-w-2xl animate-fade-in">
              Market research, surveys, campaign planning, area coverage, promotion, marketing and
              strategic initiatives — for high-impact decision making.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-in">
              <Link
                to="/services/surveys"
                className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-accent transition-colors inline-flex items-center gap-2"
              >
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg bg-white text-secondary font-semibold hover:bg-muted transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
              {[
                { k: "4", v: "Core Industries" },
                { k: "6", v: "Services" },
                { k: "25k+", v: "Surveys Conducted" },
                { k: "100%", v: "Evidence-Backed" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="border border-white/15 bg-white/5 backdrop-blur rounded-xl p-4"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">{s.k}</div>
                  <div className="text-xs text-white/70 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {HERO_IMAGES.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Show banner image ${index + 1}`}
              onClick={() => setHeroImage(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === heroImage ? "w-8 bg-white" : "w-2.5 bg-white/45 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionTitle
              eyebrow="About UMP"
              title="A start-up sworn to deliver niche studies in politics & market research."
            />
            <p className="mt-5 text-muted-foreground leading-relaxed">
              UMP Consultants partners with political parties, government agencies, media,
              businesses, and organizations — providing analysis based on evidence, accurate primary
              information, statistics, public opinion, recent developments, market data, surveys,
              and reliable sources.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We also partner for marketing assignments, promotions, campaign planning, area
              coverage, event management and strategic initiatives tailored to specific locations,
              industries, constituencies and audiences.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Read more about us <ArrowRight size={18} />
            </Link>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80"
              alt="Strategy meeting"
              className="rounded-2xl object-cover h-48 w-full shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80"
              alt="Field research"
              className="rounded-2xl object-cover h-48 w-full shadow-md mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
              alt="Survey work"
              className="rounded-2xl object-cover h-48 w-full shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80"
              alt="Analytics"
              className="rounded-2xl object-cover h-48 w-full shadow-md mt-8"
            />
          </Reveal>
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section className="bg-muted">
        <SectionTitle
          eyebrow="Industries"
          title="Sectors we know inside out"
          desc="Deep specialization in four sectors where evidence drives outcomes."
          center
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, i) => {
            const Icon = INDUSTRY_ICONS[ind.slug] ?? BarChart3;
            return (
              <Reveal key={ind.slug} delay={i * 80}>
                <Link
                  to={`/industries/${ind.slug}`}
                  className="card-soft p-6 block h-full hover:[&]:card-soft-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-semibold text-secondary text-lg">{ind.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{ind.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold">
                    Explore <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <SectionTitle
          eyebrow="Services"
          title="Six services. One growth engine."
          desc="Mix and match research, ground execution and marketing to fit your brief."
          center
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[s.slug] ?? Target;
            return (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  to={`/services/${s.slug}`}
                  className="card-soft p-6 block h-full hover:[&]:card-soft-hover group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent grid place-items-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-semibold text-secondary text-lg">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* WHY CHOOSE */}
      <Section className="bg-secondary text-white">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <Reveal>
            <p className="text-accent font-semibold uppercase tracking-wider text-xs">Why UMP</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              Built for decisions that cannot afford to be wrong.
            </h2>
            <p className="mt-4 text-white/80">
              We are a small senior team with the discipline of academia and the speed of a campaign
              room.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Senior team on every brief",
              "Trained, multilingual field force",
              "Evidence-first methodology",
              "Sector-specific playbooks",
              "Transparent reporting",
              "Confidential & accountable",
            ].map((w, i) => (
              <Reveal
                key={w}
                delay={i * 70}
                className="flex gap-3 p-4 rounded-xl border border-white/10 bg-white/5"
              >
                <CheckCircle2 className="text-accent shrink-0" />
                <p className="text-white/90 text-sm font-medium">{w}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section>
        <SectionTitle
          eyebrow="Our Process"
          title="From a question to a confident decision."
          desc="A five-step engagement designed to deliver clarity, fast."
          center
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { icon: Search, t: "Understand", d: "Listen, scope, align on outcomes." },
            { icon: ClipboardList, t: "Research", d: "Primary + secondary, field-first." },
            { icon: Lightbulb, t: "Analyze", d: "Clean, segment, interpret." },
            { icon: Rocket, t: "Execute", d: "Ground teams + campaigns." },
            { icon: FileBarChart, t: "Report", d: "Insights you can act on." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <div className="card-soft p-6 h-full">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary text-white grid place-items-center font-bold">
                    {i + 1}
                  </div>
                  <p.icon className="text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-secondary">{p.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* STATS */}
      <Section className="bg-muted">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "25,000+", v: "Survey responses collected" },
            { k: "150+", v: "Cities & towns covered" },
            { k: "60+", v: "Campaigns delivered" },
            { k: "98%", v: "Client retention" },
          ].map((s, i) => (
            <Reveal key={s.v} delay={i * 80} className="card-soft p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{s.k}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* LATEST BLOGS */}
      <Section>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionTitle eyebrow="Insights" title="From our blog" />
          <Link
            to="/blog"
            className="text-primary font-semibold hover:gap-3 inline-flex items-center gap-2 transition-all"
          >
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {BLOGS.slice(0, 3).map((b, i) => (
            <Reveal key={b.slug} delay={i * 80}>
              <Link
                to="/blog/$slug"
                params={{ slug: b.slug }}
                className="card-soft block overflow-hidden h-full hover:[&]:card-soft-hover"
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
                  <h3 className="mt-2 font-semibold text-secondary">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{b.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* LATEST NEWS */}
      <Section className="bg-muted">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionTitle eyebrow="Newsroom" title="Latest news" />
          <Link
            to="/news"
            className="text-primary font-semibold hover:gap-3 inline-flex items-center gap-2 transition-all"
          >
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {NEWS.slice(0, 3).map((n, i) => (
            <Reveal key={n.slug} delay={i * 80}>
              <Link
                to="/news/$slug"
                params={{ slug: n.slug }}
                className="card-soft block overflow-hidden h-full hover:[&]:card-soft-hover"
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
                  <h3 className="mt-2 font-semibold text-secondary">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{n.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
