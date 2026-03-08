import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Prestations", href: "/#prestations" },
    { label: "Simulateur", href: "/#simulateur" },
    { label: "Zones d'intervention", href: "/zones-intervention" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 gap-4 flex-wrap">
          <Link to="/" className="flex items-center gap-2 text-primary font-extrabold text-2xl no-underline hover:opacity-85">
            <span aria-hidden="true">🔧</span>
            <span>RenovLaser</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5" aria-label="Navigation principale">
            {navItems.map((item) =>
              item.href.startsWith("/#") ? (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="font-bold text-sm px-3 py-2 rounded-md hover:bg-muted transition-colors text-foreground"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="font-bold text-sm px-3 py-2 rounded-md hover:bg-muted transition-colors text-foreground no-underline"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+33761466823" className="flex items-center gap-1 text-primary font-semibold text-sm no-underline hover:opacity-80" aria-label="Téléphoner au 07 61 46 68 23">
              <Phone size={16} /> 07 61 46 68 23
            </a>
            <a href="mailto:contact@renovlaser.fr" className="flex items-center gap-1 text-primary font-semibold text-sm no-underline hover:opacity-80" aria-label="Envoyer un email">
              <Mail size={16} /> Email
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden border-2 border-primary rounded-lg px-3 py-2 font-extrabold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMenuOpen(false)} />
          <aside className="fixed top-0 right-0 w-72 h-full bg-card shadow-xl z-50 p-6 flex flex-col gap-4">
            <div className="flex justify-between items-center mb-4">
              <strong className="text-lg">Menu</strong>
              <button onClick={() => setMenuOpen(false)} aria-label="Fermer le menu" className="text-foreground">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-2" aria-label="Navigation mobile">
              {navItems.map((item) =>
                item.href.startsWith("/#") ? (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left font-bold py-3 px-4 rounded-lg hover:bg-muted transition-colors text-foreground"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-bold py-3 px-4 rounded-lg hover:bg-muted transition-colors text-foreground no-underline"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <a href="tel:+33761466823" className="flex items-center gap-2 text-primary font-semibold no-underline">
                <Phone size={16} /> 07 61 46 68 23
              </a>
              <a href="mailto:contact@renovlaser.fr" className="flex items-center gap-2 text-primary font-semibold no-underline">
                <Mail size={16} /> contact@renovlaser.fr
              </a>
            </div>
          </aside>
        </>
      )}
    </header>
  );
};

export default Header;
