const FloatingCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex gap-0 shadow-lg">
    <a
      href="tel:+33761466823"
      className="flex-1 bg-primary text-primary-foreground text-center py-4 font-extrabold text-base no-underline"
    >
      📞 Appeler
    </a>
    <a
      href="#contact"
      className="flex-1 bg-[hsl(var(--vert-fonce))] text-white text-center py-4 font-extrabold text-base no-underline"
    >
      📝 Devis gratuit
    </a>
  </div>
);

export default FloatingCTA;
