import { useState } from "react";

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
  const [mode, setMode] = useState<"two" | "compare">("two");
  const [sliderValues, setSliderValues] = useState<number[]>(pairs.map(() => 50));

  return (
    <section id="galerie" className="py-12 bg-muted/30">
      <div className="container mx-auto px-5">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Avant / Après</h2>

        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setMode("two")}
            className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${mode === "two" ? "bg-primary text-primary-foreground" : "bg-card text-foreground border border-input"}`}
          >
            Deux photos
          </button>
          <button
            onClick={() => setMode("compare")}
            className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${mode === "compare" ? "bg-primary text-primary-foreground" : "bg-card text-foreground border border-input"}`}
          >
            Comparateur
          </button>
        </div>

        {mode === "two" ? (
          <div className="space-y-6">
            {pairs.map((pair) => (
              <div key={pair.label} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <figure className="text-center">
                  <img src={pair.before} alt={pair.altBefore} className="rounded-xl w-full" loading="lazy" />
                  <figcaption className="mt-2 font-bold text-muted-foreground text-sm">AVANT — {pair.label}</figcaption>
                </figure>
                <figure className="text-center">
                  <img src={pair.after} alt={pair.altAfter} className="rounded-xl w-full" loading="lazy" />
                  <figcaption className="mt-2 font-bold text-muted-foreground text-sm">APRÈS — {pair.label}</figcaption>
                </figure>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {pairs.map((pair, idx) => (
              <div key={pair.label} className="relative overflow-hidden rounded-xl select-none">
                <img src={pair.before} alt={pair.altBefore} className="w-full block" />
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 0 0 ${sliderValues[idx]}%)` }}
                >
                  <img src={pair.after} alt={pair.altAfter} className="w-full block" />
                </div>
                <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded">AVANT</span>
                <span className="absolute top-3 right-3 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded">APRÈS</span>
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
                  className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize"
                  aria-label="Glisser pour comparer avant/après"
                />
                <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none" style={{ left: `${sliderValues[idx]}%` }} />
              </div>
            ))}
          </div>
        )}

        <p className="text-center text-muted-foreground text-sm mt-4 italic">
          Astuce : envoyez vos photos par le formulaire plus bas ou via WhatsApp pour un devis précis.
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
