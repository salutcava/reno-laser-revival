import AnimateOnScroll from "@/components/AnimateOnScroll";

interface SeoCTAProps {
  title: string;
  subtitle?: string;
}

const SeoCTA = ({ title, subtitle = "Devis gratuit sous 24h — Intervention rapide — Sans engagement" }: SeoCTAProps) => (
  <section className="py-16 bg-primary/5">
    <div className="container mx-auto max-w-3xl px-5 text-center">
      <AnimateOnScroll>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4">{title}</h2>
        <p className="text-muted-foreground mb-8">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+33761466823"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg no-underline hover:opacity-90 transition-opacity shadow-lg"
          >
            📞 07 61 46 68 23
          </a>
          <a
            href="https://wa.me/33761466823"
            target="_blank"
            rel="noopener"
            className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg no-underline hover:opacity-90 transition-opacity shadow-lg"
          >
            💬 WhatsApp
          </a>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default SeoCTA;
