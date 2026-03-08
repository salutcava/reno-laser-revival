import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const categories = [
  {
    icon: "🪵",
    title: "Bois",
    gradient: "from-amber-50 to-orange-50",
    items: [
      { name: "Volets bois", desc: "Décapage de volets (toutes essences)", price: "À partir de 40€ / volet" },
      { name: "Porte bois", desc: "Porte d'entrée / intérieure", price: "À partir de 80€ / porte" },
      { name: "Poutres / meubles", desc: "Test local, réglage fin", price: "Devis sur photo" },
    ],
  },
  {
    icon: "🔩",
    title: "Métal",
    gradient: "from-slate-50 to-gray-100",
    items: [
      { name: "Portail métal", desc: "Grille, portail, rambarde", price: "À partir de 150€" },
      { name: "Jante", desc: "Acier / alu", price: "À partir de 50€ / jante" },
      { name: "Outils / châssis", desc: "Outillage, cadres", price: "Devis sur photo" },
    ],
  },
  {
    icon: "🏛️",
    title: "Pierre",
    gradient: "from-stone-50 to-neutral-100",
    items: [
      { name: "Façades / murets", desc: "Pierre calcaire, briques", price: "À partir de 20€ / m²" },
      { name: "Plaques / monuments", desc: "Nettoyage fin, respect du support", price: "Devis sur photo" },
    ],
  },
  {
    icon: "🚗",
    title: "Véhicules & Agricole",
    gradient: "from-emerald-50 to-green-50",
    items: [
      { name: "Tags carrosserie", desc: "Effacement localisé", price: "Devis sur photo" },
      { name: "Pièces mécaniques", desc: "Moteurs, carters, etc.", price: "Devis sur photo" },
      { name: "Outils agricoles", desc: "Lames, socs, châssis", price: "Base 80€ / heure" },
    ],
  },
];

const PrestationsSection = () => (
  <section id="prestations" className="py-16 bg-card">
    <div className="container mx-auto px-5">
      <AnimateOnScroll>
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-3">Nos Prestations</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Des solutions de décapage laser adaptées à tous vos matériaux. Tarifs transparents, résultats garantis.
        </p>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <AnimateOnScroll key={cat.title} delay={idx * 100}>
            <motion.article
              whileHover={{ y: -4, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.2 }}
              className={`bg-gradient-to-br ${cat.gradient} rounded-2xl shadow-md p-6 flex flex-col h-full border border-border/50`}
            >
              <div className="text-2xl font-extrabold mb-4 flex items-center gap-2">
                <span className="text-3xl">{cat.icon}</span> {cat.title}
              </div>
              <div className="flex-1 space-y-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-3">
                    <div>
                      <h4 className="font-bold text-foreground">{item.name}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                    <div className="text-primary font-extrabold text-sm whitespace-nowrap bg-white/80 px-3 py-1 rounded-full shadow-sm">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                <a href="#contact" className="flex-1 text-center border-2 border-primary text-primary py-2.5 rounded-full font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-all no-underline hover:shadow-lg">
                  Demander un devis
                </a>
                <a href="tel:+33761466823" className="flex-1 text-center bg-primary text-primary-foreground py-2.5 rounded-full font-bold text-sm no-underline hover:opacity-90 transition-opacity hover:shadow-lg">
                  📞 Appeler
                </a>
              </div>
            </motion.article>
          </AnimateOnScroll>
        ))}
      </div>
      <p className="text-center mt-6 text-muted-foreground italic text-sm">
        Tarifs indicatifs : prix final après photos et test local (état, surface, accessibilité).
      </p>
    </div>
  </section>
);

export default PrestationsSection;
