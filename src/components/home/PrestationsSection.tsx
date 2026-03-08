const categories = [
  {
    icon: "🪵",
    title: "Bois",
    items: [
      { name: "Volets bois", desc: "Décapage de volets (toutes essences)", price: "À partir de 40€ / volet" },
      { name: "Porte bois", desc: "Porte d'entrée / intérieure", price: "À partir de 80€ / porte" },
      { name: "Poutres / meubles", desc: "Test local, réglage fin", price: "Devis sur photo" },
    ],
  },
  {
    icon: "🔩",
    title: "Métal",
    items: [
      { name: "Portail métal", desc: "Grille, portail, rambarde", price: "À partir de 150€" },
      { name: "Jante", desc: "Acier / alu", price: "À partir de 50€ / jante" },
      { name: "Outils / châssis", desc: "Outillage, cadres", price: "Devis sur photo" },
    ],
  },
  {
    icon: "🏛️",
    title: "Pierre",
    items: [
      { name: "Façades / murets", desc: "Pierre calcaire, briques", price: "À partir de 20€ / m²" },
      { name: "Plaques / monuments", desc: "Nettoyage fin, respect du support", price: "Devis sur photo" },
    ],
  },
  {
    icon: "🚗",
    title: "Véhicules & Agricole",
    items: [
      { name: "Tags carrosserie", desc: "Effacement localisé", price: "Devis sur photo" },
      { name: "Pièces mécaniques", desc: "Moteurs, carters, etc.", price: "Devis sur photo" },
      { name: "Outils agricoles", desc: "Lames, socs, châssis", price: "Base 80€ / heure" },
    ],
  },
];

const PrestationsSection = () => (
  <section id="prestations" className="py-12 bg-card">
    <div className="container mx-auto px-5">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Prestations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <article key={cat.title} className="bg-background rounded-2xl shadow-md p-6 flex flex-col">
            <div className="text-xl font-extrabold mb-4">{cat.icon} {cat.title}</div>
            <div className="flex-1 space-y-4">
              {cat.items.map((item) => (
                <div key={item.name}>
                  <h4 className="font-bold text-foreground">{item.name}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                  <div className="text-primary font-bold text-sm mt-1">{item.price}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#contact" className="flex-1 text-center border-2 border-primary text-primary py-2 rounded-full font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-colors no-underline">
                Demander un devis
              </a>
              <a href="tel:+33761466823" className="flex-1 text-center bg-primary text-primary-foreground py-2 rounded-full font-bold text-sm no-underline hover:opacity-90 transition-opacity">
                Téléphonez-nous
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="text-center mt-5 text-muted-foreground italic text-sm">
        Tarifs indicatifs : prix final après photos et test local (état, surface, accessibilité).
      </p>
    </div>
  </section>
);

export default PrestationsSection;
