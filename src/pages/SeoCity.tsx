import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { getCityBySlug, getDepartmentBySlug } from "@/data/seoLocations";

const SeoCity = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = getCityBySlug(slug || "");
  const dept = city ? getDepartmentBySlug(city.departmentSlug) : null;

  if (!city || !dept) return <Navigate to="/zones-intervention" replace />;

  const otherCities = dept.cities.filter((c) => c.slug !== city.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Décapage Laser à ${city.name}`,
    provider: {
      "@type": "LocalBusiness",
      name: "RenovLaser",
      telephone: "+33761466823",
      email: "contact@renovlaser.fr",
      url: "https://www.renovlaser.fr",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    description: city.description,
  };

  return (
    <>
      <Helmet>
        <title>{city.metaTitle}</title>
        <meta name="description" content={city.metaDescription} />
        <link rel="canonical" href={`https://www.renovlaser.fr/decapage-laser-${city.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-5">
            <AnimateOnScroll>
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
                <Link to="/" className="hover:text-primary no-underline">Accueil</Link>
                <span>/</span>
                <Link to="/zones-intervention" className="hover:text-primary no-underline">Zones</Link>
                <span>/</span>
                <Link to={`/decapage-laser-${dept.slug}`} className="hover:text-primary no-underline">{dept.name}</Link>
                <span>/</span>
                <span className="text-foreground font-semibold">{city.name}</span>
              </nav>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
                Décapage Laser à <span className="text-primary">{city.name}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {city.description}
              </p>
              {city.population && (
                <p className="text-sm text-muted-foreground mb-6">
                  🏙️ {city.name} — {city.population} habitants
                </p>
              )}
              <div className="flex flex-wrap gap-4">
                <a href="tel:+33761466823" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold no-underline hover:opacity-90 transition-opacity shadow-lg">
                  📞 Devis gratuit — 07 61 46 68 23
                </a>
                <a href="mailto:contact@renovlaser.fr" className="border-2 border-primary text-primary px-8 py-3 rounded-full font-bold no-underline hover:bg-primary hover:text-primary-foreground transition-all">
                  ✉️ Nous contacter
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Landmarks */}
        {city.landmarks.length > 0 && (
          <section className="py-12 bg-card">
            <div className="container mx-auto max-w-4xl px-5">
              <AnimateOnScroll>
                <h2 className="text-2xl font-extrabold mb-6">
                  Intervention décapage laser près de…
                </h2>
                <div className="flex flex-wrap gap-3">
                  {city.landmarks.map((l) => (
                    <span key={l} className="bg-background border border-border rounded-full px-4 py-2 text-sm font-medium">
                      📍 {l}
                    </span>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </section>
        )}

        {/* What we do */}
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-5">
            <AnimateOnScroll>
              <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">
                Ce que nous décapons à {city.name}
              </h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "🚪", label: "Volets" },
                { icon: "🔩", label: "Portails" },
                { icon: "🪑", label: "Meubles" },
                { icon: "🏗️", label: "Garde-corps" },
                { icon: "🪵", label: "Poutres" },
                { icon: "🚗", label: "Jantes" },
                { icon: "🧱", label: "Pierre" },
                { icon: "⚙️", label: "Outillage" },
              ].map((item, idx) => (
                <AnimateOnScroll key={item.label} delay={idx * 50}>
                  <div className="bg-card rounded-xl p-4 text-center border border-border/50 hover:border-primary transition-colors">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <span className="font-semibold text-sm">{item.label}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-card">
          <div className="container mx-auto max-w-4xl px-5">
            <AnimateOnScroll>
              <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">
                Comment ça marche ?
              </h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Envoyez vos photos", desc: "Par WhatsApp, email ou téléphone. Décrivez votre projet et recevez un devis sous 24h." },
                { step: "2", title: "Intervention à domicile", desc: `Nous nous déplaçons à ${city.name} avec notre équipement laser. Aucun démontage nécessaire.` },
                { step: "3", title: "Résultat immédiat", desc: "Vos surfaces sont décapées, propres et prêtes à être protégées ou repeintes." },
              ].map((item, idx) => (
                <AnimateOnScroll key={item.step} delay={idx * 100}>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Other cities */}
        {otherCities.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto max-w-4xl px-5">
              <h2 className="text-xl font-extrabold mb-6 text-center">
                Aussi en {dept.name}
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {otherCities.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/decapage-laser-${c.slug}`}
                    className="bg-card border border-border rounded-full px-5 py-2 text-sm font-semibold hover:border-primary hover:text-primary transition-all no-underline"
                  >
                    {c.name}
                  </Link>
                ))}
                <Link
                  to={`/decapage-laser-${dept.slug}`}
                  className="bg-primary/10 text-primary rounded-full px-5 py-2 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all no-underline"
                >
                  Tout le {dept.name} →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto max-w-3xl px-5 text-center">
            <AnimateOnScroll>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                Vous êtes à {city.name} ?
              </h2>
              <p className="text-muted-foreground mb-8">
                Devis gratuit sous 24h — Intervention rapide — Résultat garanti
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+33761466823" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg no-underline hover:opacity-90 transition-opacity shadow-lg">
                  📞 07 61 46 68 23
                </a>
                <a href="https://wa.me/33761466823" target="_blank" rel="noopener" className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg no-underline hover:opacity-90 transition-opacity shadow-lg">
                  💬 WhatsApp
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SeoCity;
