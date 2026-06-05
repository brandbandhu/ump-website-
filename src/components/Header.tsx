import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { COMPANY, INDUSTRIES, SERVICES } from "@/lib/site-data";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-white"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center group" aria-label={`${COMPANY.name} home`}>
          <img src={logo} alt={COMPANY.name} className="h-11 w-auto md:h-14" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((i) => (
            <NavLink key={i.to} to={i.to}>{i.label}</NavLink>
          ))}
          <Dropdown label="Industries" items={INDUSTRIES.map((i) => ({ to: `/industries/${i.slug}`, label: i.name }))} />
          <Dropdown label="Services" items={SERVICES.map((s) => ({ to: `/services/${s.slug}`, label: s.name }))} />
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
            <Phone size={16} /> {COMPANY.phone}
          </a>
          <Link to="/contact" className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-secondary transition-colors">
            Get a Quote
          </Link>
        </div>

        <button className="lg:hidden p-2 text-secondary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="lg:hidden border-t bg-white">
          <div className="container-x py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
            {navItems.map((i) => (
              <MobileLink key={i.to} to={i.to} onClick={() => setOpen(false)}>{i.label}</MobileLink>
            ))}
            <MobileGroup
              label="Industries"
              isOpen={openMenu === "ind"}
              onToggle={() => setOpenMenu(openMenu === "ind" ? null : "ind")}
              items={INDUSTRIES.map((i) => ({ to: `/industries/${i.slug}`, label: i.name }))}
              onItemClick={() => setOpen(false)}
            />
            <MobileGroup
              label="Services"
              isOpen={openMenu === "srv"}
              onToggle={() => setOpenMenu(openMenu === "srv" ? null : "srv")}
              items={SERVICES.map((s) => ({ to: `/services/${s.slug}`, label: s.name }))}
              onItemClick={() => setOpen(false)}
            />
            <MobileLink to="/blog" onClick={() => setOpen(false)}>Blog</MobileLink>
            <MobileLink to="/news" onClick={() => setOpen(false)}>News</MobileLink>
            <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact Us</MobileLink>
            <a href={`tel:${COMPANY.phoneRaw}`} className="mt-3 px-4 py-3 rounded-lg bg-secondary text-white text-center font-semibold">
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="px-3 py-2 text-sm font-medium text-secondary hover:text-primary transition-colors rounded-md"
      activeProps={{ className: "px-3 py-2 text-sm font-semibold text-primary rounded-md" }}
      activeOptions={{ exact: to === "/" }}
    >
      {children}
    </Link>
  );
}

function Dropdown({ label, items }: { label: string; items: { to: string; label: string }[] }) {
  return (
    <div className="relative group">
      <button className="px-3 py-2 text-sm font-medium text-secondary hover:text-primary transition-colors rounded-md inline-flex items-center gap-1">
        {label} <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[240px]">
        <div className="bg-white rounded-xl shadow-xl border p-2">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="block px-3 py-2 text-sm text-secondary hover:bg-muted hover:text-primary rounded-md transition-colors"
            >
              {it.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link to={to} onClick={onClick} className="px-3 py-3 rounded-md text-secondary font-medium hover:bg-muted">
      {children}
    </Link>
  );
}

function MobileGroup({
  label, isOpen, onToggle, items, onItemClick,
}: { label: string; isOpen: boolean; onToggle: () => void; items: { to: string; label: string }[]; onItemClick: () => void }) {
  return (
    <div>
      <button onClick={onToggle} className="w-full flex items-center justify-between px-3 py-3 rounded-md text-secondary font-medium hover:bg-muted">
        {label} <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pl-4 flex flex-col">
          {items.map((it) => (
            <Link key={it.to} to={it.to} onClick={onItemClick} className="px-3 py-2 text-sm text-muted-foreground hover:text-primary">
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
