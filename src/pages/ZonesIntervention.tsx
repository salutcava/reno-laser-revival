import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ZonesIntervention = () => (
  <>
    <Header />
    <main className="py-12">
      <div className="container mx-auto max-w-4xl px-5">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8">Zones d'intervention</h1>
        <p className="text-center text-lg text-muted-foreground mb-8">
          RenovLaser intervient à domicile dans un rayon de <strong>30 km autour de Dormans (51700)</strong>.
        </p>

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

        <div className="mt-10 text-center">
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
