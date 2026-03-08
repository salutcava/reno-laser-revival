import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RenovationDecapage = () => (
  <>
    <Header />
    <main className="py-12">
      <div className="container mx-auto max-w-3xl px-5">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          Rénovation Décapage : Bois, Métal, Pierre
        </h1>

        <div className="space-y-8">
          <section className="bg-card rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Notre service de rénovation décapage</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Le <strong>décapage par rénovation laser</strong> est la solution idéale pour redonner vie
              à vos supports sans les abîmer. Que ce soit du bois, du métal ou de la pierre,
              notre technologie s'adapte à chaque matériau.
            </p>
          </section>

          <section className="bg-card rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">🪵 Décapage Bois</h2>
            <p className="text-foreground leading-relaxed mb-3">
              Volets, portes, poutres, meubles anciens… Le laser retire peinture et vernis
              en respectant le veinage du bois. Résultat : un bois brut, prêt à être traité ou peint.
            </p>
            <p className="text-primary font-bold">À partir de 40€ / volet</p>
          </section>

          <section className="bg-card rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">🔩 Décapage Métal</h2>
            <p className="text-foreground leading-relaxed mb-3">
              Portails, grilles, rambardes, jantes, outils… Le laser élimine rouille,
              peinture écaillée et oxydation. Le métal retrouve son état d'origine.
            </p>
            <p className="text-primary font-bold">À partir de 50€ / jante</p>
          </section>

          <section className="bg-card rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">🏛️ Décapage Pierre</h2>
            <p className="text-foreground leading-relaxed mb-3">
              Façades, murets, monuments, plaques… Le laser nettoie les salissures,
              mousses et graffitis sans altérer la pierre.
            </p>
            <p className="text-primary font-bold">À partir de 20€ / m²</p>
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

export default RenovationDecapage;
