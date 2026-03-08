import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MentionsLegales = () => (
  <>
    <Header />
    <main className="py-12">
      <div className="container mx-auto max-w-3xl px-5">
        <h1 className="text-3xl font-extrabold mb-8">Mentions légales</h1>
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <h2 className="text-xl font-bold">Éditeur du site</h2>
          <p>RenovLaser — SIREN : 944 775 337<br />Adresse : Dormans (51700), France<br />Téléphone : 07 61 46 68 23<br />Email : contact@renovlaser.fr</p>
          <h2 className="text-xl font-bold">Hébergement</h2>
          <p>Ce site est hébergé par Lovable (lovable.dev).</p>
          <h2 className="text-xl font-bold">Données personnelles</h2>
          <p>Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre à votre demande de devis. Elles ne sont ni vendues, ni transmises à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit : contact@renovlaser.fr</p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default MentionsLegales;
