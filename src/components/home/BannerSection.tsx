import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

const BannerSection = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2, duration: 0.5 }}
    className="bg-[hsl(var(--gris-anth))] text-white py-5 px-5"
  >
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
      <div className="flex items-center gap-2">
        <span className="text-3xl font-extrabold text-primary">
          <CountUp end={200} suffix="+" />
        </span>
        <span className="text-sm text-white/80">projets réalisés</span>
      </div>
      <div className="hidden md:block w-px h-8 bg-white/20" />
      <div className="flex items-center gap-2">
        <span className="text-3xl font-extrabold text-primary">
          <CountUp end={30} suffix=" km" />
        </span>
        <span className="text-sm text-white/80">rayon d'intervention</span>
      </div>
      <div className="hidden md:block w-px h-8 bg-white/20" />
      <div className="flex items-center gap-2">
        <span className="text-3xl font-extrabold text-primary">
          24h
        </span>
        <span className="text-sm text-white/80">délai de réponse</span>
      </div>
      <div className="hidden md:block w-px h-8 bg-white/20" />
      <div className="flex items-center gap-2">
        <span className="text-3xl font-extrabold text-accent">
          <CountUp end={100} suffix="%" />
        </span>
        <span className="text-sm text-white/80">écologique</span>
      </div>
    </div>
  </motion.div>
);

export default BannerSection;
