import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const SeoIntro = () => (
  <section className="py-16 bg-card">
    <div className="container mx-auto max-w-4xl px-5">
      <AnimateOnScroll>
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
            🌱 Technologie de pointe
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
            Pourquoi choisir le Décapage Laser ?
          </h2>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { icon: "♻️", title: "Écologique", desc: "Zéro produit chimique, zéro déchet toxique. Une méthode propre et respectueuse de l'environnement." },
          { icon: "🎯", title: "Ultra-précis", desc: "Le laser retire uniquement la couche ciblée. Vos matériaux d'origine sont parfaitement préservés." },
          { icon: "⚡", title: "Rapide & propre", desc: "Pas de ponçage, pas de poussière, pas de projection. Résultat immédiat, sans nettoyage après." },
        ].map((item, idx) => (
          <AnimateOnScroll key={item.title} delay={idx * 100}>
            <div className="bg-background rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow border border-border/50">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-extrabold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll delay={300}>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/laser-renovation" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-all no-underline hover:shadow-lg">
            En savoir plus sur la Laser Rénovation →
          </Link>
          <Link to="/renovation-decapage" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold no-underline hover:opacity-90 transition-opacity hover:shadow-lg">
            Découvrir nos services →
          </Link>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default SeoIntro;
