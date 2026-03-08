import { useState } from "react";

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
    <section id="simulateur" className="py-12 bg-muted/30">
      <div className="container mx-auto max-w-2xl px-5">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">💰 Simulateur de tarif</h2>
        <p className="text-center text-muted-foreground mb-6">Obtenez une estimation instantanée pour votre projet</p>
        <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold text-sm mb-1">🔧 Type d'intervention</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                  className="w-full border border-input rounded-lg px-3 py-2.5 bg-background text-foreground"
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
                <label className="block font-semibold text-sm mb-1">📊 Quantité</label>
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  required
                  className="w-full border border-input rounded-lg px-3 py-2.5 bg-background text-foreground"
                />
              </div>
              <div>
                <label className="block font-semibold text-sm mb-1">⚡ Complexité</label>
                <select
                  value={complexity}
                  onChange={(e) => setComplexity(Number(e.target.value))}
                  className="w-full border border-input rounded-lg px-3 py-2.5 bg-background text-foreground"
                >
                  <option value={1}>Standard</option>
                  <option value={1.2}>Complexe (+20%)</option>
                  <option value={1.4}>Très complexe (+40%)</option>
                </select>
              </div>
            </div>
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-extrabold text-lg hover:opacity-90 transition-opacity">
              🧮 Calculer le tarif
            </button>
            {result && (
              <div className="bg-[hsl(var(--success)/0.1)] text-[hsl(var(--success))] font-bold text-center py-3 rounded-lg text-lg">
                {result}
              </div>
            )}
            <p className="text-center text-muted-foreground text-sm italic">
              ℹ️ Estimation indicative, hors déplacement. Prix définitif après photos et test local.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SimulatorSection;
