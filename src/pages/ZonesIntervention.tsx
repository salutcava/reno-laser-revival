import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { seoDepartments } from "@/data/seoLocations";
import { seoDepartmentsDormans } from "@/data/seoLocationsDormans";

const ZonesIntervention = () => (
  <>
    <Header />
    <main className="py-12">
      <div className="container mx-auto max-w-5xl px-5">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Zones d'intervention</h1>
        <p className="text-center text-lg text-muted-foreground mb-12">
          RenovLaser intervient à domicile en <strong>Île-de-France</strong> et dans un rayon de <strong>30 km autour de Dormans (51700)</strong>.
        </p>

        {/* IDF Departments */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold mb-8 text-center">🏙️ Île-de-France & départements proches</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allDepartments.map((dept, idx) => (
              <AnimateOnScroll key={dept.slug} delay={idx * 60}>
                <Link
                  to={`/decapage-laser/${dept.slug}`}
                  className="block bg-card rounded-2xl p-5 shadow-sm border border-border hover:border-primary hover:shadow-lg transition-all no-underline group"
                >
                  <h3 className="font-extrabold text-lg group-hover:text-primary transition-colors mb-2">
                    {dept.name} ({dept.code})
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{dept.description.slice(0, 100)}…</p>
                  <div className="flex flex-wrap gap-1.5">
                    {dept.cities.slice(0, 3).map((c) => (
                      <span key={c.slug} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                        {c.name}
                      </span>
                    ))}
                  </div>
                  <span className="text-primary text-sm font-semibold mt-3 inline-block">Voir les villes →</span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* Original local zone */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold mb-8 text-center">📍 Zone historique — Dormans et environs</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              "Dormans", "Épernay", "Château-Thierry", "Reims (sud)",
              "Fismes", "Fère-en-Tardenois", "Condé-en-Brie", "Orbais-l'Abbaye",
              "Montmirail", "Sézanne", "Vertus", "Avize",
              "Ay-Champagne", "Mareuil-sur-Ay", "Hautvillers", "Damery",
              "Troissy", "Vincelles", "Verneuil", "Châtillon-sur-Marne",
              "Binson-et-Orquigny", "Cuchery", "Leuvrigny", "Festigny",
            ].map((ville) => (
              <div key={ville} className="bg-card rounded-xl px-4 py-3 text-center font-semibold text-sm shadow-sm border border-border">
                📍 {ville}
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Votre commune ne figure pas dans la liste ? Contactez-nous, nous étudions chaque demande.
          </p>
          <a href="tel:+33761466823" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold no-underline hover:opacity-90 transition-opacity">
            📞 07 61 46 68 23
          </a>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default ZonesIntervention;
