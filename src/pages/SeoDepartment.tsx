import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { getDepartmentBySlug, allDepartments } from "@/data/seoLocations";

const SeoDepartment = ({ slug }: { slug: string }) => {
  const dept = getDepartmentBySlug(slug);

  if (!dept) return <Navigate to="/zones-intervention" replace />;

  const otherDepts = seoDepartments.filter((d) => d.slug !== dept.slug).slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{dept.metaTitle}</title>
        <meta name="description" content={dept.metaDescription} />
        <link rel="canonical" href={`https://www.renovlaser.fr/decapage-laser-${dept.slug}`} />
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
                <Link to="/zones-intervention" className="hover:text-primary no-underline">Zones d'intervention</Link>
                <span>/</span>
                <span className="text-foreground font-semibold">{dept.name} ({dept.code})</span>
              </nav>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
                Décapage Laser en <span className="text-primary">{dept.name} ({dept.code})</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {dept.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+33761466823" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold no-underline hover:opacity-90 transition-opacity shadow-lg">
                  📞 Devis gratuit — 07 61 46 68 23
                </a>
                <a href="mailto:contact@renovlaser.fr" className="border-2 border-primary text-primary px-8 py-3 rounded-full font-bold no-underline hover:bg-primary hover:text-primary-foreground transition-all">
                  ✉️ contact@renovlaser.fr
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-card">
          <div className="container mx-auto max-w-4xl px-5">
            <AnimateOnScroll>
              <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">
                Nos prestations en {dept.name}
              </h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "🚪", title: "Volets & Portails", desc: "Décapage de peintures multicouches, rouille et vernis sur bois et métal." },
                { icon: "🪑", title: "Meubles & Boiseries", desc: "Restauration de meubles anciens, poutres, escaliers sans abîmer le bois." },
                { icon: "🔩", title: "Métal & Fer forgé", desc: "Dérouillage de grilles, garde-corps, jantes et structures métalliques." },
              ].map((item, idx) => (
                <AnimateOnScroll key={item.title} delay={idx * 100}>
                  <div className="bg-background rounded-2xl p-6 shadow-md text-center border border-border/50 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-extrabold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-5">
            <AnimateOnScroll>
              <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">
                Pourquoi choisir RenovLaser en {dept.name} ?
              </h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "♻️", title: "100% Écologique", desc: "Zéro produit chimique, zéro déchet toxique. Le laser utilise uniquement la lumière." },
                { icon: "🎯", title: "Précision chirurgicale", desc: "Le laser retire uniquement la couche ciblée. Vos matériaux d'origine sont parfaitement préservés." },
                { icon: "🏠", title: "Intervention à domicile", desc: `Nous nous déplaçons directement chez vous en ${dept.name}. Pas besoin de démonter.` },
                { icon: "⚡", title: "Résultat immédiat", desc: "Pas de temps de séchage, pas de nettoyage. Le résultat est visible instantanément." },
              ].map((item, idx) => (
                <AnimateOnScroll key={item.title} delay={idx * 80}>
                  <div className="flex gap-4 items-start bg-card rounded-xl p-5 border border-border/50">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Cities */}
        <section className="py-16 bg-card">
          <div className="container mx-auto max-w-4xl px-5">
            <AnimateOnScroll>
              <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-4">
                Nos interventions en {dept.name}
              </h2>
              <p className="text-center text-muted-foreground mb-10">
                Découvrez nos prestations de décapage laser ville par ville
              </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dept.cities.map((city, idx) => (
                <AnimateOnScroll key={city.slug} delay={idx * 80}>
                  <Link
                    to={`/decapage-laser-${city.slug}`}
                    className="block bg-background rounded-xl p-5 border border-border/50 hover:border-primary hover:shadow-lg transition-all no-underline group"
                  >
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                      📍 {city.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                      {city.description}
                    </p>
                    <span className="text-primary text-sm font-semibold mt-2 inline-block">
                      En savoir plus →
                    </span>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Other departments */}
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-5">
            <AnimateOnScroll>
              <h2 className="text-2xl font-extrabold text-center mb-8">
                Autres départements couverts
              </h2>
            </AnimateOnScroll>
            <div className="flex flex-wrap justify-center gap-3">
              {otherDepts.map((d) => (
                <Link
                  key={d.slug}
                  to={`/decapage-laser-${d.slug}`}
                  className="bg-card border border-border rounded-full px-5 py-2 text-sm font-semibold hover:border-primary hover:text-primary transition-all no-underline"
                >
                  {d.name} ({d.code})
                </Link>
              ))}
              <Link
                to="/zones-intervention"
                className="bg-primary/10 text-primary border border-primary/20 rounded-full px-5 py-2 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all no-underline"
              >
                Toutes les zones →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto max-w-3xl px-5 text-center">
            <AnimateOnScroll>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                Besoin d'un décapage laser en {dept.name} ?
              </h2>
              <p className="text-muted-foreground mb-8">
                Devis gratuit sous 24h — Intervention rapide — Sans engagement
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

export default SeoDepartment;
