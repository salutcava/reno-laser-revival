import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const TARIFS: Record<string, { base: number; label: string; unit: string; icon: string }> = {
  volet: { base: 40, label: "Volets bois", unit: "volet(s)", icon: "🪵" },
  porte: { base: 80, label: "Porte bois", unit: "porte(s)", icon: "🚪" },
  portail: { base: 150, label: "Portail métal", unit: "portail(s)", icon: "🔩" },
  jante: { base: 50, label: "Jante", unit: "jante(s)", icon: "⚙️" },
  pierre: { base: 20, label: "Pierre", unit: "m²", icon: "🏛️" },
  agri: { base: 80, label: "Outils agricoles", unit: "heure(s)", icon: "🚜" },
};

const SimulatorSection = () => {
  const [type, setType] = useState("");
  const [qty, setQty] = useState(1);
  const [complexity, setComplexity] = useState(1);
  const [result, setResult] = useState<{ min: number; max: number; unit: string; qty: number } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!type || !TARIFS[type]) return;
    const t = TARIFS[type];
    const min = Math.round(t.base * qty * complexity);
    const max = Math.round(min * 1.3);
    setResult({ min, max, unit: t.unit, qty });
  };

  return (
    <section id="simulateur" className="py-20 bg-gradient-to-b from-background to-muted/40 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-2xl px-5 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <motion.span
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 bg-accent/15 text-accent-foreground px-5 py-2.5 rounded-full text-sm font-bold mb-5 backdrop-blur-sm border border-accent/20"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Gratuit & instantané
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
              Estimez votre tarif
            </h2>
            <p className="text-muted-foreground text-lg">Résultat en quelques clics, sans engagement</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <motion.div
            className="bg-card/80 backdrop-blur-md rounded-3xl shadow-2xl shadow-primary/5 p-7 md:p-10 border border-border/40"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Type selection as card grid */}
              <div>
                <label className="block font-bold text-sm mb-3 text-foreground">Type d'intervention</label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {Object.entries(TARIFS).map(([key, t]) => (
                    <motion.button
                      key={key}
                      type="button"
                      onClick={() => setType(key)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex flex-col items-center gap-1 p-3 rounded-2xl border-2 transition-all text-center cursor-pointer ${
                        type === key
                          ? "border-primary bg-primary/10 shadow-md shadow-primary/10"
                          : "border-border/50 bg-background/50 hover:border-primary/30 hover:bg-muted/50"
                      }`}
                    >
                      <span className="text-2xl">{t.icon}</span>
                      <span className="text-[11px] font-semibold leading-tight text-foreground">{t.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-sm mb-2 text-foreground">Quantité</label>
                  <div className="relative">
                    <input
                      type="number"
                      min={1}
                      value={qty}
                      onChange={(e) => setQty(Number(e.target.value))}
                      required
                      className="w-full border-2 border-border/50 rounded-2xl px-4 py-3.5 bg-background/80 text-foreground font-semibold text-center text-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    />
                    {type && TARIFS[type] && (
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-medium">
                        {TARIFS[type].unit}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block font-bold text-sm mb-2 text-foreground">Complexité</label>
                  <div className="flex gap-2">
                    {[
                      { val: 1, label: "Simple" },
                      { val: 1.2, label: "+20%" },
                      { val: 1.4, label: "+40%" },
                    ].map((c) => (
                      <motion.button
                        key={c.val}
                        type="button"
                        onClick={() => setComplexity(c.val)}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 py-3.5 rounded-2xl font-bold text-sm border-2 transition-all cursor-pointer ${
                          complexity === c.val
                            ? "border-primary bg-primary/10 text-foreground"
                            : "border-border/50 bg-background/50 text-muted-foreground hover:border-primary/30"
                        }`}
                      >
                        {c.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-extrabold text-lg transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              >
                Calculer mon estimation
              </motion.button>

              <AnimatePresence>
                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-[hsl(var(--success)/0.08)] to-[hsl(var(--success)/0.03)] rounded-2xl p-6 border border-[hsl(var(--success)/0.15)]">
                      <p className="text-sm text-muted-foreground mb-1">Estimation pour {result.qty} {result.unit}</p>
                      <p className="text-3xl font-extrabold text-foreground tracking-tight">
                        {result.min}€ <span className="text-muted-foreground font-normal text-lg">—</span> {result.max}€
                      </p>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1 mt-3 text-sm font-bold text-primary hover:underline"
                      >
                        Obtenir un devis précis →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-center text-muted-foreground text-xs">
                Estimation indicative, hors déplacement. Prix définitif après diagnostic.
              </p>
            </form>
          </motion.div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default SimulatorSection;
