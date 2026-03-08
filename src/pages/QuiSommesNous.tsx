import Header from "@/components/Header";
import Footer from "@/components/Footer";

const QuiSommesNous = () => (
  <>
    <Header />
    <main className="py-12">
      <div className="container mx-auto max-w-3xl px-5">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8">Qui sommes-nous ?</h1>

        <div className="bg-card rounded-2xl shadow-md p-6 md:p-8 space-y-6">
          <p className="text-lg leading-relaxed text-foreground">
            <strong>RenovLaser</strong> est né d'une passion pour la rénovation et d'une conviction :
            il est possible de décaper, nettoyer et restaurer sans polluer.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            Basé à <strong>Dormans (51700)</strong>, je suis artisan spécialisé dans le
            <strong> décapage laser</strong>. Cette technologie de pointe permet de retirer peintures,
            rouille, vernis et salissures sans aucun produit chimique, sans ponçage abrasif et sans poussière.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            J'interviens à domicile dans un rayon de 30 km autour de Dormans pour tous vos projets :
            volets, portails, meubles, jantes, façades, outils agricoles…
          </p>

          <div className="bg-muted rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">🌱 Pourquoi le laser ?</h2>
            <ul className="space-y-2 text-foreground">
              <li>✅ <strong>Écologique</strong> : zéro déchet chimique, zéro solvant</li>
              <li>✅ <strong>Précis</strong> : le laser n'attaque que la couche à retirer</li>
              <li>✅ <strong>Propre</strong> : pas de poussière, pas de projection</li>
              <li>✅ <strong>Respectueux</strong> : préserve le matériau d'origine (bois, métal, pierre)</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              <strong>SIREN : 944 775 337</strong> — Artisan déclaré
            </p>
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

export default QuiSommesNous;
