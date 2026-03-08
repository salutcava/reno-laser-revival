const Logo = ({ className = "h-10 w-auto" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="RenovLaser"
  >
    {/* Badge shape */}
    <rect x="1" y="1" width="198" height="50" rx="8" stroke="currentColor" strokeWidth="2" className="text-primary" />
    <rect x="4" y="4" width="192" height="44" rx="6" stroke="currentColor" strokeWidth="0.75" className="text-primary/40" />

    {/* Laser beam accent */}
    <line x1="14" y1="26" x2="38" y2="26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary" />
    <circle cx="38" cy="26" r="3" className="fill-primary opacity-80" />
    <circle cx="38" cy="26" r="6" className="fill-primary opacity-20" />

    {/* Text: Renov */}
    <text x="48" y="32" fontFamily="'Montserrat', system-ui, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.5" className="fill-foreground">
      Renov
    </text>

    {/* Text: Laser */}
    <text x="117" y="32" fontFamily="'Montserrat', system-ui, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.5" className="fill-primary">
      Laser
    </text>

    {/* Small tagline */}
    <text x="100" y="46" fontFamily="'Montserrat', system-ui, sans-serif" fontWeight="600" fontSize="6" letterSpacing="2.5" textAnchor="middle" className="fill-muted-foreground uppercase">
      Décapage écologique
    </text>
  </svg>
);

export default Logo;
