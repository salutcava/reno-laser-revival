import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LaserRenovation = () => (
  <>
    <Header />
    <main className="py-12">
      <div className="container mx-auto max-w-3xl px-5">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          Laser Rénovation : Technologie & Avantages
        </h1>

        <div className="space-y-8">
          <section className="bg-card rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Qu'est-ce que la laser rénovation ?</h2>
            <p className="text-foreground leading-relaxed mb-4">
              La <strong>laser rénovation</strong> utilise un faisceau laser haute puissance pour retirer
              les couches indésirables (peinture, rouille, vernis, oxydation) sans endommager le matériau d'origine.
            </p>
            <p className="text-foreground leading-relaxed">
              Contrairement aux méthodes traditionnelles (sablage, décapant chimique, ponçage),
              la <strong>rénovation laser</strong> est propre, précise et 100% écologique.
            </p>
          </section>

          <section className="bg-card rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">🌱 Avantages du décapage laser</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "♻️", title: "Écologique", desc: "Aucun produit chimique, aucun déchet toxique" },
                { icon: "🎯", title: "Ultra-précis", desc: "Réglage au micron, seule la couche ciblée est retirée" },
                { icon: "🔇", title: "Silencieux & propre", desc: "Pas de projection, pas de poussière" },
                { icon: "💪", title: "Tous matériaux", desc: "Bois, métal, pierre, composites" },
              ].map((adv) => (
                <div key={adv.title} className="bg-muted rounded-xl p-4">
                  <div className="text-2xl mb-2">{adv.icon}</div>
                  <h3 className="font-bold mb-1">{adv.title}</h3>
                  <p className="text-muted-foreground text-sm">{adv.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center">
            <a href="/#contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold no-underline hover:opacity-90 transition-opacity">
              📞 Demander un devis gratuit
            </a>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default LaserRenovation;
