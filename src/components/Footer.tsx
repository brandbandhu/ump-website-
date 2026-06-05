import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, INDUSTRIES, SERVICES } from "@/lib/site-data";
import logo from "@/assets/logo.png";
import { Link } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="bg-secondary text-white/80 mt-20">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 inline-flex rounded-md bg-white p-2">
            <img src={logo} alt={COMPANY.name} className="h-12 w-auto" />
          </div>
          <p className="text-sm leading-relaxed">
            A research-driven consulting firm partnering with political, healthcare, real-estate and
            business leaders to grow with evidence.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Industries</h4>
          <ul className="space-y-2 text-sm">
            {INDUSTRIES.map((i) => (
              <li key={i.slug}>
                <Link to={`/industries/${i.slug}`} className="hover:text-accent transition-colors">
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-accent transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 text-accent shrink-0" />
              {COMPANY.address}
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="mt-0.5 text-accent shrink-0" />
              <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-accent">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 text-accent shrink-0" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-accent">
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p>Research-driven consulting · Pune, India</p>
        </div>
      </div>
    </footer>
  );
}
