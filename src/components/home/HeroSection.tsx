import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, Shield, ChevronRight } from "lucide-react";
import CountUp from "@/components/CountUp";

const HeroSection = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [urgencySlots, setUrgencySlots] = useState(3);

  useEffect(() => {
    // Simulate urgency — random slots between 2-5
    setUrgencySlots(Math.floor(Math.random() * 4) + 2);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/pic.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(105,12%,20%,0.92)] via-[hsl(105,12%,30%,0.85)] to-[hsl(105,12%,40%,0.80)]" />
      
      {/* Decorative particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Urgency badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent/90 text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg"
            >
              <Clock size={16} />
              <span>🔥 Plus que {urgencySlots} créneaux disponibles ce mois</span>
            </motion.div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-white drop-shadow-lg">
              Décapage Laser{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
                Écologique
              </span>{" "}
              à Dormans
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
              Volets, portails, meubles, jantes — je redonne vie à vos surfaces
              <strong className="text-white"> sans produits chimiques</strong>, sans ponçage, sans poussière.
              Résultat garanti.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-white text-[hsl(var(--vert-fonce))] px-8 py-4 rounded-full font-extrabold text-lg shadow-xl hover:shadow-2xl transition-shadow no-underline animate-pulse-glow"
              >
                📞 Devis gratuit sous 24h
                <ChevronRight size={20} />
              </motion.a>
              <motion.a
                href="tel:+33761466823"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors no-underline"
              >
                Appeler maintenant
              </motion.a>
            </div>

            {/* Social proof stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-white font-bold text-sm">
                  <CountUp end={4} suffix=".9" /> / 5
                </span>
                <span className="text-white/70 text-sm">
                  (<CountUp end={47} /> avis)
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin size={16} />
                <span>Dormans & 30 km</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Shield size={16} />
                <span>Artisan déclaré</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Before/After slider */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
          >
            <div className="relative aspect-[4/3] select-none">
              <img
                src="/images/avant-radiateur.png"
                alt="Radiateur en fonte avant décapage"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
              >
                <img
                  src="/images/apres-radiateur.png"
                  alt="Radiateur après décapage laser"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Labels */}
              <span className="absolute top-4 left-4 bg-red-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                Avant
              </span>
              <span className="absolute top-4 right-4 bg-green-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                Après
              </span>

              {/* Slider line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <span className="text-foreground font-bold text-sm">⟷</span>
                </div>
              </div>

              <input
                type="range"
                min={0}
                max={100}
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-10"
                aria-label="Comparer avant/après"
              />
            </div>
            <div className="bg-white/95 backdrop-blur text-center py-3 text-sm font-bold text-foreground">
              👆 Glissez pour comparer le résultat
            </div>
          </motion.div>
        </div>

        {/* Trust badges row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: "🌱", label: "100% Écologique", sub: "Zéro chimie" },
            { icon: "⚡", label: "Intervention 24h", sub: "Réponse rapide" },
            { icon: "💰", label: "Devis gratuit", sub: "Sans engagement" },
            { icon: "🏆", label: "47 avis ★4.9", sub: "Clients satisfaits" },
          ].map((badge) => (
            <div key={badge.label} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 text-center border border-white/10 hover:bg-white/15 transition-colors">
              <div className="text-2xl mb-1">{badge.icon}</div>
              <div className="text-white font-bold text-sm">{badge.label}</div>
              <div className="text-white/60 text-xs">{badge.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
