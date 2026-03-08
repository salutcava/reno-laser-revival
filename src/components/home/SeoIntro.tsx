import { Link } from "react-router-dom";

const SeoIntro = () => (
  <section className="py-10 bg-muted/50">
    <div className="container mx-auto max-w-3xl text-center px-5">
      <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">
        Rénovation Laser : Votre Spécialiste du Décapage Écologique
      </h2>
      <p className="text-lg leading-relaxed text-muted-foreground mb-4">
        RenovLaser combine <strong>laser rénovation</strong> et <strong>décapage laser</strong>{" "}
        pour redonner vie à vos volets, portails, meubles et façades. Notre expertise en{" "}
        <strong>rénovation décapage</strong> couvre tous les matériaux : bois, métal, pierre et véhicules.
      </p>
      <p className="text-lg leading-relaxed text-muted-foreground mb-6">
        La <strong>rénovation par laser</strong> offre une alternative écologique aux méthodes traditionnelles.
        Le <strong>décapage laser</strong> préserve vos matériaux sans produits chimiques, sans ponçage abrasif
        et sans poussière.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link to="/laser-renovation" className="inline-block border-2 border-primary text-primary px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-colors no-underline">
          En savoir plus sur la Laser Rénovation →
        </Link>
        <Link to="/renovation-decapage" className="inline-block border-2 border-primary text-primary px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-colors no-underline">
          Découvrir la Rénovation Décapage →
        </Link>
      </div>
    </div>
  </section>
);

export default SeoIntro;
