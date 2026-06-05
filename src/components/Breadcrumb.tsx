import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex items-center flex-wrap gap-1 text-white/80">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-white">
            <Home size={14} /> Home
          </Link>
        </li>
        {items.map((it, idx) => (
          <li key={idx} className="flex items-center gap-1">
            <ChevronRight size={14} className="text-white/50" />
            {it.to ? (
              <Link to={it.to} className="hover:text-white">{it.label}</Link>
            ) : (
              <span className="text-white font-medium">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
