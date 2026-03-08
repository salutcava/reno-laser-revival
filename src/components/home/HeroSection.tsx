const HeroSection = () => (
  <section className="relative bg-cover bg-center text-white text-center py-20 px-5 overflow-hidden" style={{ backgroundImage: "linear-gradient(135deg, rgba(138,154,124,0.85), rgba(94,108,83,0.85)), url('/images/pic.png')" }}>
    <div className="relative z-10 container mx-auto max-w-4xl">
      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5 text-white">
        Laser Rénovation & Décapage Laser Écologique à Dormans
      </h1>
      <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
        Spécialiste en <strong>laser rénovation</strong> et <strong>rénovation décapage</strong>,
        j'interviens à domicile pour tous vos projets de décapage laser écologique.
        Je redonne vie à vos volets, portails, meubles et pièces métal sans abîmer les surfaces.
        Méthode propre, sans produits chimiques, sans ponçage, sans poussière.
      </p>
      <a
        href="#contact"
        className="inline-block bg-white text-primary px-8 py-4 rounded-full font-extrabold text-lg shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all no-underline"
      >
        📞 Demander un devis gratuit
      </a>
    </div>
  </section>
);

export default HeroSection;
