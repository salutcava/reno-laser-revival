import { useState } from "react";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const TARIFS: Record<string, { base: number; label: string; unit: string }> = {
  volet: { base: 40, label: "Volets bois", unit: "volet(s)" },
  porte: { base: 80, label: "Porte bois", unit: "porte(s)" },
  portail: { base: 150, label: "Portail métal", unit: "portail(s)" },
  jante: { base: 50, label: "Jante", unit: "jante(s)" },
  pierre: { base: 20, label: "Pierre", unit: "m²" },
  agri: { base: 80, label: "Outils agricoles", unit: "heure(s)" },
};

const SimulatorSection = () => {
  const [type, setType] = useState("");
  const [qty, setQty] = useState(1);
  const [complexity, setComplexity] = useState(1);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!type || !TARIFS[type]) return;
    const t = TARIFS[type];
    const min = Math.round(t.base * qty * complexity);
    const max = Math.round(min * 1.3);
    setResult(`💰 Estimation : ${min}€ – ${max}€ pour ${qty} ${t.unit}`);
  };

  return (
    <section id="simulateur" className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-2xl px-5">
        <AnimateOnScroll>
          <div className="text-center mb-8">
            <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
              💰 Gratuit & instantané
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-2">Simulateur de tarif</h2>
            <p className="text-muted-foreground">Obtenez une estimation en 10 secondes</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <motion.div
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.12)" }}
            className="bg-card rounded-2xl shadow-xl p-6 md:p-8 border border-border/50"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold text-sm mb-1.5">🔧 Type d'intervention</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                    className="w-full border border-input rounded-xl px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none"
                  >
                    <option value="">Sélectionnez…</option>
                    <option value="volet">🪵 Volets bois (unité)</option>
                    <option value="porte">🚪 Porte bois (unité)</option>
                    <option value="portail">🔩 Portail métal (unité)</option>
                    <option value="jante">⚙️ Jante (unité)</option>
                    <option value="pierre">🏛️ Pierre (m²)</option>
                    <option value="agri">🚜 Outils agricoles (heures)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-sm mb-1.5">📊 Quantité</label>
                  <input
                    type="number"
                    min={1}
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                    required
                    className="w-full border border-input rounded-xl px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-sm mb-1.5">⚡ Complexité</label>
                  <select
                    value={complexity}
                    onChange={(e) => setComplexity(Number(e.target.value))}
                    className="w-full border border-input rounded-xl px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none"
                  >
                    <option value={1}>Standard</option>
                    <option value={1.2}>Complexe (+20%)</option>
                    <option value={1.4}>Très complexe (+40%)</option>
                  </select>
                </div>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-extrabold text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                🧮 Calculer mon tarif
              </motion.button>
              {result && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[hsl(142,72%,37%,0.1)] text-[hsl(142,72%,29%)] font-bold text-center py-4 rounded-xl text-lg border border-[hsl(142,72%,37%,0.2)]"
                >
                  {result}
                  <p className="text-sm font-normal mt-1 opacity-80">
                    <a href="#contact" className="underline font-semibold">Obtenir un devis précis →</a>
                  </p>
                </motion.div>
              )}
              <p className="text-center text-muted-foreground text-xs italic">
                ℹ️ Estimation indicative, hors déplacement. Prix définitif après photos et test local.
              </p>
            </form>
          </motion.div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default SimulatorSection;
