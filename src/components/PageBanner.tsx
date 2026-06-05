import type { ReactNode } from "react";
import { Breadcrumb } from "./Breadcrumb";

export function PageBanner({
  title, subtitle, image, crumbs,
}: { title: string; subtitle?: string; image?: string; crumbs: { label: string; to?: string }[] }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      {image && (
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="relative container-x py-16 md:py-24 text-white">
        <Breadcrumb items={crumbs} />
        <h1 className="mt-4 text-3xl md:text-5xl font-bold max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-4 text-white/85 max-w-2xl text-base md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, desc, center = false }: { eyebrow?: string; title: string; desc?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="text-accent font-semibold tracking-wider uppercase text-xs">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl md:text-4xl font-bold text-secondary">{title}</h2>
      {desc && <p className="mt-3 text-muted-foreground text-base md:text-lg">{desc}</p>}
    </div>
  );
}
