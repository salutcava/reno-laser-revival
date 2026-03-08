import { Link } from "react-router-dom";
import { allDepartments } from "@/data/seoLocations";
import Logo from "./Logo";

const Footer = () => (
  <footer className="bg-[hsl(var(--gris-anth))] text-white py-12 px-5">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-primary font-extrabold text-xl mb-4">🔧 RenovLaser</h3>
          <p className="text-gray-300 text-sm leading-relaxed">Décapage laser écologique à domicile</p>
          <p className="text-gray-300 text-sm">Artisan local — Dormans et Île-de-France</p>
          <p className="text-gray-300 text-sm">SIREN : 944 775 337</p>
        </div>
        <div>
          <h3 className="text-primary font-extrabold text-xl mb-4">Coordonnées</h3>
          <p className="text-gray-300 text-sm mb-2">📞 <a href="tel:+33761466823" className="text-gray-300 hover:text-white hover:underline">07 61 46 68 23</a></p>
          <p className="text-gray-300 text-sm mb-2">✉️ <a href="mailto:contact@renovlaser.fr" className="text-gray-300 hover:text-white hover:underline">contact@renovlaser.fr</a></p>
          <p className="text-gray-300 text-sm">📍 Dormans (51700), France</p>
        </div>
        <div>
          <h3 className="text-primary font-extrabold text-xl mb-4">Zones d'intervention</h3>
          <div className="flex flex-col gap-1.5">
            {allDepartments.slice(0, 6).map((d) => (
              <Link key={d.slug} to={`/decapage-laser/${d.slug}`} className="text-gray-300 text-sm hover:text-white hover:underline no-underline">
                Décapage laser {d.name} ({d.code})
              </Link>
            ))}
            <Link to="/zones-intervention" className="text-primary text-sm font-semibold hover:underline no-underline mt-1">
              Toutes les zones →
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-primary font-extrabold text-xl mb-4">Liens utiles</h3>
          <div className="flex flex-col gap-2">
            <Link to="/qui-sommes-nous" className="text-gray-300 text-sm hover:text-white hover:underline no-underline">Qui sommes-nous ?</Link>
            <Link to="/laser-renovation" className="text-gray-300 text-sm hover:text-white hover:underline no-underline">Laser Rénovation</Link>
            <Link to="/renovation-decapage" className="text-gray-300 text-sm hover:text-white hover:underline no-underline">Rénovation & Décapage</Link>
            <Link to="/zones-intervention" className="text-gray-300 text-sm hover:text-white hover:underline no-underline">Zones d'intervention</Link>
            <Link to="/mentions-legales" className="text-gray-300 text-sm hover:text-white hover:underline no-underline">Mentions légales</Link>
            <Link to="/cgu" className="text-gray-300 text-sm hover:text-white hover:underline no-underline">CGU</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 pt-5 text-center text-sm text-gray-400 leading-relaxed">
        © RenovLaser 2025 — SIREN 944 775 337 — Tous droits réservés.<br />
        <Link to="/mentions-legales" className="text-gray-400 underline">Mentions légales</Link> • <Link to="/cgu" className="text-gray-400 underline">CGU</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
