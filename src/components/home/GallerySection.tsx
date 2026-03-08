import { useState } from "react";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const pairs = [
  {
    before: "/images/avant-radiateur.png",
    after: "/images/apres-radiateur.png",
    label: "Radiateur fonte",
    altBefore: "Radiateur en fonte avant décapage (peinture écaillée)",
    altAfter: "Radiateur fonte après décapage laser, fonte à nu",
  },
  {
    before: "/images/avant-porte.png",
    after: "/images/apres-porte.png",
    label: "Porte bois massif",
    altBefore: "Porte bois massif avant décapage laser",
    altAfter: "Porte bois massif après décapage laser, prête à peindre",
  },
];

const GallerySection = () => {
  const [sliderValues, setSliderValues] = useState<number[]>(pairs.map(() => 50));

  return (
    <section id="galerie" className="py-16 bg-muted/30">
      <div className="container mx-auto px-5">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-3">Avant / Après</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Découvrez la puissance du décapage laser. Glissez pour voir la transformation.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pairs.map((pair, idx) => (
            <AnimateOnScroll key={pair.label} delay={idx * 150}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-xl select-none group"
              >
                <div className="relative aspect-[4/3]">
                  <img src={pair.before} alt={pair.altBefore} className="w-full h-full object-cover" />
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 0 0 ${sliderValues[idx]}%)` }}
                  >
                    <img src={pair.after} alt={pair.altAfter} className="w-full h-full object-cover" />
                  </div>

                  <span className="absolute top-3 left-3 bg-red-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">AVANT</span>
                  <span className="absolute top-3 right-3 bg-green-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">APRÈS</span>

                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)] pointer-events-none"
                    style={{ left: `${sliderValues[idx]}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center">
                      <span className="text-xs font-bold">⟷</span>
                    </div>
                  </div>

                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={sliderValues[idx]}
                    onChange={(e) => {
                      const newVals = [...sliderValues];
                      newVals[idx] = Number(e.target.value);
                      setSliderValues(newVals);
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-10"
                    aria-label="Glisser pour comparer avant/après"
                  />
                </div>
                <div className="bg-card py-3 px-4 text-center">
                  <span className="font-bold text-foreground">{pair.label}</span>
                  <span className="text-muted-foreground text-sm ml-2">— Décapage laser</span>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={300}>
          <div className="text-center mt-10">
            <p className="text-muted-foreground text-sm mb-4">
              Envoyez vos photos pour un devis précis sous 24h
            </p>
            <a href="#contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold no-underline hover:opacity-90 transition-opacity hover:shadow-lg">
              📷 Envoyer mes photos
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default GallerySection;
