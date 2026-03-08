export interface SeoCity {
  slug: string;
  name: string;
  departmentSlug: string;
  population?: string;
  description: string;
  landmarks: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface SeoDepartment {
  slug: string;
  name: string;
  code: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  cities: SeoCity[];
}

export const seoDepartments: SeoDepartment[] = [
  {
    slug: "paris",
    name: "Paris",
    code: "75",
    description: "RenovLaser intervient dans tout Paris pour vos travaux de décapage laser. Meubles anciens, portails en fer forgé, volets parisiens, rampes d'escalier — notre technologie laser respecte le patrimoine haussmannien tout en éliminant peintures et rouille sans produit chimique.",
    metaTitle: "Décapage Laser Paris (75) | RenovLaser — Devis Gratuit",
    metaDescription: "Décapage laser écologique à Paris. Rénovation volets, portails, meubles sans chimie. Artisan spécialisé, devis gratuit sous 24h.",
    cities: [
      {
        slug: "paris-centre",
        name: "Paris Centre",
        departmentSlug: "paris",
        population: "100 000+",
        description: "Décapage laser au cœur de Paris. Idéal pour les immeubles haussmanniens, les portes d'entrée anciennes et le mobilier de collection. Notre laser intervient sans poussière, parfait pour les appartements parisiens.",
        landmarks: ["Le Marais", "Saint-Germain-des-Prés", "Île de la Cité"],
        metaTitle: "Décapage Laser Paris Centre | RenovLaser — Sans Chimie",
        metaDescription: "Décapage laser à Paris Centre. Rénovation de portes, volets et meubles anciens sans produit chimique. Devis gratuit.",
      },
      {
        slug: "paris-nord",
        name: "Paris Nord (18e, 19e, 20e)",
        departmentSlug: "paris",
        population: "600 000+",
        description: "Intervention de décapage laser dans le nord et l'est parisien. Montmartre, Belleville, Ménilmontant — nous restaurons vos éléments en métal et en bois dans le respect de l'architecture locale.",
        landmarks: ["Montmartre", "Buttes-Chaumont", "Père-Lachaise"],
        metaTitle: "Décapage Laser Paris Nord (18e 19e 20e) | RenovLaser",
        metaDescription: "Décapage laser Paris Nord. Artisan spécialisé rénovation bois et métal sans chimie. Intervention à domicile.",
      },
    ],
  },
  {
    slug: "hauts-de-seine",
    name: "Hauts-de-Seine",
    code: "92",
    description: "Le département des Hauts-de-Seine regorge de pavillons et résidences avec volets, portails et grilles en fer forgé. RenovLaser intervient dans tout le 92 pour un décapage laser propre, rapide et sans produit chimique.",
    metaTitle: "Décapage Laser Hauts-de-Seine (92) | RenovLaser — Devis Gratuit",
    metaDescription: "Décapage laser écologique dans les Hauts-de-Seine (92). Volets, portails, meubles. Artisan laser, devis gratuit sous 24h.",
    cities: [
      {
        slug: "boulogne-billancourt",
        name: "Boulogne-Billancourt",
        departmentSlug: "hauts-de-seine",
        population: "120 000",
        description: "Décapage laser à Boulogne-Billancourt. Première ville des Hauts-de-Seine, Boulogne possède un riche patrimoine architectural. Nos interventions concernent aussi bien les pavillons résidentiels que les immeubles Art Déco.",
        landmarks: ["Île Seguin", "Parc de Saint-Cloud", "Centre-ville historique"],
        metaTitle: "Décapage Laser Boulogne-Billancourt | RenovLaser",
        metaDescription: "Décapage laser à Boulogne-Billancourt (92). Rénovation volets, portails, meubles. Sans chimie, devis gratuit.",
      },
      {
        slug: "nanterre",
        name: "Nanterre",
        departmentSlug: "hauts-de-seine",
        population: "96 000",
        description: "Intervention décapage laser à Nanterre et ses environs. Préfecture des Hauts-de-Seine, Nanterre mêle quartiers résidentiels et patrimoine industriel — deux domaines où le laser excelle.",
        landmarks: ["La Défense", "Parc André Malraux", "Vieux Nanterre"],
        metaTitle: "Décapage Laser Nanterre (92) | RenovLaser",
        metaDescription: "Décapage laser à Nanterre. Artisan spécialisé, intervention sans produit chimique. Devis gratuit sous 24h.",
      },
      {
        slug: "courbevoie",
        name: "Courbevoie",
        departmentSlug: "hauts-de-seine",
        population: "82 000",
        description: "Décapage laser à Courbevoie. Aux portes de La Défense, cette ville résidentielle compte de nombreux pavillons et immeubles anciens dont les éléments métalliques et boiseries méritent une rénovation soignée au laser.",
        landmarks: ["Bécon-les-Bruyères", "Parc de Bécon", "Quartier Marceau"],
        metaTitle: "Décapage Laser Courbevoie | RenovLaser",
        metaDescription: "Décapage laser écologique à Courbevoie. Volets, grilles, meubles rénovés sans chimie. Devis gratuit.",
      },
    ],
  },
  {
    slug: "seine-saint-denis",
    name: "Seine-Saint-Denis",
    code: "93",
    description: "RenovLaser intervient dans toute la Seine-Saint-Denis pour vos projets de décapage. Portails industriels, grilles, volets de pavillons — le laser est la solution idéale pour rénover sans polluer dans le 93.",
    metaTitle: "Décapage Laser Seine-Saint-Denis (93) | RenovLaser — Devis Gratuit",
    metaDescription: "Décapage laser en Seine-Saint-Denis (93). Rénovation écologique bois, métal, pierre. Artisan laser, devis gratuit.",
    cities: [
      {
        slug: "saint-denis",
        name: "Saint-Denis",
        departmentSlug: "seine-saint-denis",
        population: "113 000",
        description: "Décapage laser à Saint-Denis. Ville historique au patrimoine riche, Saint-Denis possède de nombreux éléments architecturaux en métal et bois qui bénéficient d'une rénovation au laser : grilles, portes, volets anciens.",
        landmarks: ["Basilique Saint-Denis", "Stade de France", "Canal Saint-Denis"],
        metaTitle: "Décapage Laser Saint-Denis (93) | RenovLaser",
        metaDescription: "Décapage laser à Saint-Denis. Rénovation sans chimie de vos volets, portails et meubles. Devis gratuit.",
      },
      {
        slug: "montreuil",
        name: "Montreuil",
        departmentSlug: "seine-saint-denis",
        population: "109 000",
        description: "Intervention laser à Montreuil. Cette ville dynamique aux portes de Paris compte de nombreux ateliers et pavillons dont les structures métalliques et boiseries gagnent à être décapées au laser.",
        landmarks: ["Murs à pêches", "Parc Montreau", "Place de la Mairie"],
        metaTitle: "Décapage Laser Montreuil (93) | RenovLaser",
        metaDescription: "Décapage laser écologique à Montreuil. Bois, métal, pierre rénovés sans produit chimique. Devis gratuit.",
      },
    ],
  },
  {
    slug: "val-de-marne",
    name: "Val-de-Marne",
    code: "94",
    description: "Dans le Val-de-Marne, les maisons individuelles et pavillons sont nombreux. RenovLaser décape au laser vos volets, portails, garde-corps et mobilier ancien — sans poussière ni produit chimique, directement chez vous.",
    metaTitle: "Décapage Laser Val-de-Marne (94) | RenovLaser — Devis Gratuit",
    metaDescription: "Décapage laser dans le Val-de-Marne (94). Volets, portails, meubles rénovés écologiquement. Devis gratuit sous 24h.",
    cities: [
      {
        slug: "creteil",
        name: "Créteil",
        departmentSlug: "val-de-marne",
        population: "92 000",
        description: "Décapage laser à Créteil, préfecture du Val-de-Marne. Entre architecture moderne et pavillons anciens, notre laser s'adapte à tous les supports pour une rénovation propre et respectueuse.",
        landmarks: ["Lac de Créteil", "Cathédrale Notre-Dame", "Université Paris-Est"],
        metaTitle: "Décapage Laser Créteil (94) | RenovLaser",
        metaDescription: "Décapage laser à Créteil. Artisan spécialisé rénovation sans chimie. Volets, portails, meubles. Devis gratuit.",
      },
      {
        slug: "vincennes",
        name: "Vincennes",
        departmentSlug: "val-de-marne",
        population: "50 000",
        description: "Décapage laser à Vincennes. Ville au patrimoine remarquable avec son château, Vincennes regorge d'éléments décoratifs en fer forgé et boiseries anciennes idéals pour le décapage laser.",
        landmarks: ["Château de Vincennes", "Bois de Vincennes", "Centre historique"],
        metaTitle: "Décapage Laser Vincennes (94) | RenovLaser",
        metaDescription: "Décapage laser écologique à Vincennes. Rénovation volets, grilles, meubles sans produit chimique. Devis gratuit.",
      },
    ],
  },
  {
    slug: "seine-et-marne",
    name: "Seine-et-Marne",
    code: "77",
    description: "La Seine-et-Marne, plus grand département d'Île-de-France, abrite un patrimoine bâti exceptionnel. RenovLaser décape au laser vos éléments en bois, métal et pierre — des châteaux aux pavillons, en passant par le mobilier de jardin.",
    metaTitle: "Décapage Laser Seine-et-Marne (77) | RenovLaser — Devis Gratuit",
    metaDescription: "Décapage laser en Seine-et-Marne (77). Rénovation écologique bois, métal, pierre. Artisan local, devis gratuit.",
    cities: [
      {
        slug: "meaux",
        name: "Meaux",
        departmentSlug: "seine-et-marne",
        population: "55 000",
        description: "Décapage laser à Meaux. Ville historique de la Brie, Meaux possède un centre ancien riche en boiseries et ferronneries. Le décapage laser est idéal pour redonner vie à ces éléments patrimoniaux.",
        landmarks: ["Cathédrale Saint-Étienne", "Musée de la Grande Guerre", "Vieux Meaux"],
        metaTitle: "Décapage Laser Meaux (77) | RenovLaser",
        metaDescription: "Décapage laser à Meaux. Bois, métal, pierre rénovés sans chimie. Artisan spécialisé, devis gratuit.",
      },
      {
        slug: "melun",
        name: "Melun",
        departmentSlug: "seine-et-marne",
        population: "41 000",
        description: "Intervention décapage laser à Melun, préfecture de Seine-et-Marne. Idéal pour les maisons de caractère et le mobilier ancien de cette ville au bord de la Seine.",
        landmarks: ["Île Saint-Étienne", "Forêt de Fontainebleau", "Centre historique"],
        metaTitle: "Décapage Laser Melun (77) | RenovLaser",
        metaDescription: "Décapage laser écologique à Melun. Volets, portails, meubles. Sans produit chimique, devis gratuit sous 24h.",
      },
      {
        slug: "fontainebleau",
        name: "Fontainebleau",
        departmentSlug: "seine-et-marne",
        population: "15 000",
        description: "Décapage laser à Fontainebleau. Ville d'art et d'histoire, Fontainebleau et ses environs regorgent de demeures de caractère avec des volets, grilles et ferronneries qui méritent un décapage soigné.",
        landmarks: ["Château de Fontainebleau", "Forêt de Fontainebleau", "Rue Grande"],
        metaTitle: "Décapage Laser Fontainebleau (77) | RenovLaser",
        metaDescription: "Décapage laser à Fontainebleau. Rénovation patrimoine bois et métal sans chimie. Devis gratuit.",
      },
    ],
  },
  {
    slug: "yvelines",
    name: "Yvelines",
    code: "78",
    description: "Les Yvelines combinent patrimoine royal et résidentiel haut de gamme. RenovLaser intervient dans tout le 78 pour décaper au laser portails, volets, garde-corps et mobilier de jardin — parfait pour les belles demeures yvelinoises.",
    metaTitle: "Décapage Laser Yvelines (78) | RenovLaser — Devis Gratuit",
    metaDescription: "Décapage laser dans les Yvelines (78). Rénovation volets, portails, meubles. Écologique et sans chimie. Devis gratuit.",
    cities: [
      {
        slug: "versailles",
        name: "Versailles",
        departmentSlug: "yvelines",
        population: "85 000",
        description: "Décapage laser à Versailles. La ville royale par excellence possède un patrimoine architectural exceptionnel. Nos interventions laser respectent les matériaux nobles des demeures versaillaises.",
        landmarks: ["Château de Versailles", "Quartier Saint-Louis", "Quartier Notre-Dame"],
        metaTitle: "Décapage Laser Versailles (78) | RenovLaser",
        metaDescription: "Décapage laser à Versailles. Rénovation respectueuse du patrimoine. Volets, grilles, meubles. Devis gratuit.",
      },
      {
        slug: "saint-germain-en-laye",
        name: "Saint-Germain-en-Laye",
        departmentSlug: "yvelines",
        population: "46 000",
        description: "Décapage laser à Saint-Germain-en-Laye. Cette ville résidentielle prisée abrite de magnifiques propriétés dont les éléments en fer forgé et bois bénéficient d'un décapage laser précis et écologique.",
        landmarks: ["Château de Saint-Germain", "Forêt de Saint-Germain", "Grande Terrasse"],
        metaTitle: "Décapage Laser Saint-Germain-en-Laye (78) | RenovLaser",
        metaDescription: "Décapage laser à Saint-Germain-en-Laye. Artisan spécialisé, rénovation sans chimie. Devis gratuit sous 24h.",
      },
    ],
  },
  {
    slug: "essonne",
    name: "Essonne",
    code: "91",
    description: "L'Essonne offre un cadre résidentiel avec de nombreux pavillons et propriétés. RenovLaser décape au laser vos volets, portails, grilles et mobilier — intervention rapide, propre et écologique dans tout le 91.",
    metaTitle: "Décapage Laser Essonne (91) | RenovLaser — Devis Gratuit",
    metaDescription: "Décapage laser en Essonne (91). Volets, portails, meubles rénovés sans chimie. Artisan laser, devis gratuit.",
    cities: [
      {
        slug: "evry-courcouronnes",
        name: "Évry-Courcouronnes",
        departmentSlug: "essonne",
        population: "69 000",
        description: "Décapage laser à Évry-Courcouronnes, préfecture de l'Essonne. Des quartiers résidentiels aux zones d'activité, le décapage laser est la solution propre pour rénover vos éléments métalliques et boiseries.",
        landmarks: ["Cathédrale de la Résurrection", "Génopole", "Parc des Coquibus"],
        metaTitle: "Décapage Laser Évry-Courcouronnes (91) | RenovLaser",
        metaDescription: "Décapage laser à Évry-Courcouronnes. Rénovation bois, métal sans chimie. Devis gratuit sous 24h.",
      },
      {
        slug: "palaiseau",
        name: "Palaiseau",
        departmentSlug: "essonne",
        population: "35 000",
        description: "Intervention décapage laser à Palaiseau. Ville du plateau de Saclay, Palaiseau possède un patrimoine résidentiel varié avec de nombreux éléments à rénover : volets, clôtures, mobilier de jardin.",
        landmarks: ["Polytechnique", "Vallée de l'Yvette", "Centre ancien"],
        metaTitle: "Décapage Laser Palaiseau (91) | RenovLaser",
        metaDescription: "Décapage laser écologique à Palaiseau. Volets, portails, meubles. Sans produit chimique. Devis gratuit.",
      },
    ],
  },
  {
    slug: "val-d-oise",
    name: "Val-d'Oise",
    code: "95",
    description: "Le Val-d'Oise allie zones résidentielles et patrimoine historique. RenovLaser propose le décapage laser dans tout le 95 : volets, portails, grilles, meubles — une méthode propre et écologique adaptée à chaque support.",
    metaTitle: "Décapage Laser Val-d'Oise (95) | RenovLaser — Devis Gratuit",
    metaDescription: "Décapage laser dans le Val-d'Oise (95). Rénovation écologique bois, métal, pierre. Devis gratuit sous 24h.",
    cities: [
      {
        slug: "cergy",
        name: "Cergy",
        departmentSlug: "val-d-oise",
        population: "66 000",
        description: "Décapage laser à Cergy. Ville nouvelle dynamique, Cergy et ses environs comptent de nombreux pavillons et résidences dont les volets, portails et garde-corps bénéficient du décapage laser.",
        landmarks: ["Axe Majeur", "Port de Cergy", "Base de loisirs"],
        metaTitle: "Décapage Laser Cergy (95) | RenovLaser",
        metaDescription: "Décapage laser à Cergy. Artisan spécialisé, rénovation sans chimie. Volets, portails, meubles. Devis gratuit.",
      },
      {
        slug: "argenteuil",
        name: "Argenteuil",
        departmentSlug: "val-d-oise",
        population: "110 000",
        description: "Décapage laser à Argenteuil. Deuxième ville d'Île-de-France en superficie, Argenteuil offre un patrimoine résidentiel varié. Le laser est parfait pour rénover les éléments métalliques et boiseries de ses maisons et immeubles.",
        landmarks: ["Butte d'Orgemont", "Bords de Seine", "Basilique Saint-Denis"],
        metaTitle: "Décapage Laser Argenteuil (95) | RenovLaser",
        metaDescription: "Décapage laser écologique à Argenteuil. Bois, métal, pierre rénovés sans produit chimique. Devis gratuit.",
      },
    ],
  },
];

// Helper functions
export const getAllCities = (): SeoCity[] =>
  seoDepartments.flatMap((d) => d.cities);

export const getDepartmentBySlug = (slug: string) =>
  seoDepartments.find((d) => d.slug === slug);

export const getCityBySlug = (slug: string) =>
  getAllCities().find((c) => c.slug === slug);
