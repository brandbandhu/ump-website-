import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle2, type LucideIcon } from "lucide-react";
import { PageBanner, Section } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import { COMPANY, SERVICES } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d\s-]{7,20}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(120),
  service: z.string().min(1, "Please pick a service"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

export function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <>
      <PageBanner
        title="Let's talk"
        subtitle="Tell us about your goals — we respond within one business day."
        image="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1600&q=80"
        crumbs={[{ label: "Contact Us" }]}
      />
      <Section>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <Reveal className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">Reach the UMP team</h2>
            <p className="text-muted-foreground">
              Pune-based, working across India. Walk in, call, or send a message — we will get back
              fast.
            </p>
            <div className="space-y-3 mt-6">
              <InfoCard icon={MapPin} title="Office">
                {COMPANY.address}
              </InfoCard>
              <InfoCard icon={Phone} title="Phone">
                <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-primary">
                  {COMPANY.phone}
                </a>
              </InfoCard>
              <InfoCard icon={Mail} title="Email">
                <a href={`mailto:${COMPANY.email}`} className="hover:text-primary">
                  {COMPANY.email}
                </a>
              </InfoCard>
              <InfoCard icon={Clock} title="Hours">
                Mon – Sat · 10:00 AM – 7:00 PM
              </InfoCard>
            </div>
            <div className="rounded-2xl overflow-hidden border mt-6 aspect-[4/3]">
              <iframe
                title="UMP Consultants on Google Maps"
                src="https://www.google.com/maps?q=Loni+Kalbhor+Pune&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} noValidate className="card-soft p-6 md:p-8 space-y-5">
              <h2 className="text-2xl font-bold text-secondary">Send us a message</h2>
              {sent && (
                <div className="flex gap-3 p-4 rounded-lg bg-accent/10 border border-accent/30 text-accent">
                  <CheckCircle2 className="shrink-0" />
                  <p className="text-sm font-medium">
                    Thanks! Your message is in. We will reply within one business day.
                  </p>
                </div>
              )}
              <Field label="Name" name="name" error={errors.name} />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Phone number" name="phone" error={errors.phone} />
                <Field label="Email" name="email" type="email" error={errors.email} />
              </div>
              <div>
                <Label>Service interested in</Label>
                <select
                  name="service"
                  defaultValue=""
                  className="mt-1 w-full px-3 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                  <option value="Other">Other / Not sure</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-xs text-destructive">{errors.service}</p>
                )}
              </div>
              <div>
                <Label>Message</Label>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-1 w-full px-3 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                  placeholder="Tell us what you're working on…"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-secondary transition-colors disabled:opacity-60"
              >
                <Send size={18} /> {loading ? "Sending…" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-medium text-secondary">{children}</label>;
}
function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        className="mt-1 w-full px-3 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-soft p-4 flex gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
          {title}
        </p>
        <p className="text-secondary font-medium">{children}</p>
      </div>
    </div>
  );
}
