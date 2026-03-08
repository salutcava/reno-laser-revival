import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const reviews = [
  { text: "Excellent travail sur mes volets anciens ! Le laser a enlevé toute la peinture écaillée sans abîmer le bois. Service rapide et propre, je recommande vivement.", author: "Marie D.", meta: "Épernay • Janvier 2025" },
  { text: "J'ai fait décaper mon portail en fer forgé. Résultat impeccable, pas de poussière et l'artisan est très professionnel. Prix honnête pour la qualité du travail.", author: "Jean-Pierre L.", meta: "Château-Thierry • Décembre 2024" },
  { text: "Intervention rapide pour nettoyer des tags sur ma carrosserie. Le laser a tout enlevé sans trace ! Je suis très satisfait du résultat et du conseil reçu.", author: "Thomas R.", meta: "Dormans • Novembre 2024" },
  { text: "Parfait pour rénover mes vieux meubles en bois. Le décapage laser a respecté le grain du bois, c'est magnifique ! Artisan à l'écoute et de bon conseil.", author: "Sophie M.", meta: "Fère-en-Tardenois • Octobre 2024" },
  { text: "Mes jantes de voiture sont comme neuves ! Pas de rayure, pas de dommage. Le résultat est bluffant et le tarif très correct pour la prestation.", author: "Alexandre P.", meta: "Dormans • Septembre 2024" },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section id="avis" className="py-16 bg-card overflow-hidden">
      <div className="container mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Star size={16} fill="currentColor" className="text-yellow-500" />
              Note moyenne : 4.9/5 sur 47 avis
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold">Ce que disent nos clients</h2>
          </div>
        </AnimateOnScroll>

        <div className="relative max-w-2xl mx-auto">
          <button onClick={prev} className="absolute -left-2 md:-left-14 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 z-10 shadow-lg transition-transform hover:scale-110" aria-label="Avis précédent">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="absolute -right-2 md:-right-14 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 z-10 shadow-lg transition-transform hover:scale-110" aria-label="Avis suivant">
            <ChevronRight size={20} />
          </button>

          <div className="min-h-[250px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-background rounded-2xl shadow-lg p-8 md:p-10 text-center w-full border border-border/50"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={22} fill="currentColor" className="text-yellow-400" />)}
                </div>
                <p className="text-foreground text-lg italic leading-relaxed mb-6">
                  "{reviews[current].text}"
                </p>
                <p className="font-extrabold text-foreground text-lg">{reviews[current].author}</p>
                <p className="text-muted-foreground text-sm">{reviews[current].meta}</p>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-8" : "bg-border hover:bg-primary/40"}`}
                aria-label={`Avis ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <AnimateOnScroll delay={200}>
          <p className="text-center mt-10">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-extrabold text-lg hover:opacity-90 transition-opacity no-underline shadow-lg"
            >
              Rejoignez nos clients satisfaits →
            </motion.a>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ReviewsSection;
