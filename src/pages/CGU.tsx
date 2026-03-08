import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CGU = () => (
  <>
    <Header />
    <main className="py-12">
      <div className="container mx-auto max-w-3xl px-5">
        <h1 className="text-3xl font-extrabold mb-8">Conditions Générales d'Utilisation</h1>
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <h2 className="text-xl font-bold">Objet</h2>
          <p>Les présentes conditions régissent l'utilisation du site renovlaser.fr et les services proposés par RenovLaser.</p>
          <h2 className="text-xl font-bold">Services</h2>
          <p>RenovLaser propose des services de décapage laser à domicile. Les tarifs affichés sont indicatifs. Un devis définitif est établi après évaluation sur photos ou sur place.</p>
          <h2 className="text-xl font-bold">Responsabilité</h2>
          <p>RenovLaser s'engage à fournir un travail de qualité professionnelle. Toute réclamation doit être adressée dans les 7 jours suivant l'intervention à contact@renovlaser.fr.</p>
          <h2 className="text-xl font-bold">Propriété intellectuelle</h2>
          <p>L'ensemble du contenu du site (textes, images, design) est la propriété de RenovLaser. Toute reproduction est interdite sans autorisation.</p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default CGU;
