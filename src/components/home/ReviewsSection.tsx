import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { text: "Excellent travail sur mes volets anciens ! Le laser a enlevé toute la peinture écaillée sans abîmer le bois. Service rapide et propre, je recommande vivement.", author: "Marie D.", meta: "Épernay • Janvier 2025" },
  { text: "J'ai fait décaper mon portail en fer forgé. Résultat impeccable, pas de poussière et l'artisan est très professionnel. Prix honnête pour la qualité du travail.", author: "Jean-Pierre L.", meta: "Château-Thierry • Décembre 2024" },
  { text: "Intervention rapide pour nettoyer des tags sur ma carrosserie. Le laser a tout enlevé sans trace ! Je suis très satisfait du résultat et du conseil reçu.", author: "Thomas R.", meta: "Dormans • Novembre 2024" },
  { text: "Parfait pour rénover mes vieux meubles en bois. Le décapage laser a respecté le grain du bois, c'est magnifique ! Artisan à l'écoute et de bon conseil.", author: "Sophie M.", meta: "Fère-en-Tardenois • Octobre 2024" },
  { text: "Mes jantes de voiture sont comme neuves ! Pas de rayure, pas de dommage. Le résultat est bluffant et le tarif très correct pour la prestation.", author: "Alexandre P.", meta: "Dormans • Septembre 2024" },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section id="avis" className="py-12 bg-card">
      <div className="container mx-auto px-5">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Avis clients</h2>
        <div className="relative max-w-2xl mx-auto">
          <button onClick={prev} className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 z-10" aria-label="Avis précédent">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 z-10" aria-label="Avis suivant">
            <ChevronRight size={20} />
          </button>

          <article className="bg-background rounded-2xl shadow-md p-8 text-center">
            <div className="text-2xl text-yellow-500 mb-3">★★★★★</div>
            <p className="text-foreground italic leading-relaxed mb-4">"{reviews[current].text}"</p>
            <p className="font-bold text-foreground">{reviews[current].author}</p>
            <p className="text-muted-foreground text-sm">{reviews[current].meta}</p>
          </article>

          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
                aria-label={`Avis ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <p className="text-center mt-8">
          <a href="#contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity no-underline">
            Demander votre devis gratuit
          </a>
        </p>
      </div>
    </section>
  );
};

export default ReviewsSection;
