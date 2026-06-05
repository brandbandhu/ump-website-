import { useEffect, useState } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NotFoundPage } from "@/components/NotFoundPage";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HomePage } from "@/routes";
import { AboutPage } from "@/routes/about";
import { BlogDetailPage } from "@/routes/blog.$slug";
import { BlogIndexPage } from "@/routes/blog.index";
import { ContactPage } from "@/routes/contact";
import { IndustryPage } from "@/routes/industries.$slug";
import { NewsDetailPage } from "@/routes/news.$slug";
import { NewsIndexPage } from "@/routes/news.index";
import { ServicePage } from "@/routes/services.$slug";

export function App() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const syncPath = () => setPath(window.location.pathname);
    window.addEventListener("popstate", syncPath);
    return () => window.removeEventListener("popstate", syncPath);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <RouteView path={path.replace(/\/$/, "") || "/"} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function RouteView({ path }: { path: string }) {
  if (path === "/") return <HomePage />;
  if (path === "/about") return <AboutPage />;
  if (path === "/contact") return <ContactPage />;
  if (path === "/blog") return <BlogIndexPage />;
  if (path === "/news") return <NewsIndexPage />;

  const [, section, slug] = path.split("/");
  if (section === "blog" && slug) return <BlogDetailPage slug={slug} />;
  if (section === "news" && slug) return <NewsDetailPage slug={slug} />;
  if (section === "industries" && slug) return <IndustryPage slug={slug} />;
  if (section === "services" && slug) return <ServicePage slug={slug} />;

  return <NotFoundPage />;
}
