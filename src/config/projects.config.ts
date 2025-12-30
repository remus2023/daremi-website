export type ProjectConfig = {
  id: string;
  title: string;
  category: "bucatarie" | "living" | "dormitor" | "baie" | "hol";
  image: {
    src: string;
    alt: string;
  };
  seo: {
    title: string;
    description: string;
  };
  visibility: {
    home?: boolean;
  };
  order?: number;
};
export const projects: ProjectConfig[] = [
  {
    id: "bucatarie-moderna",
    title: "Bucătărie modernă la comandă",
    category: "bucatarie",
    image: {
      src: "/images/projects/bucatarie-01.jpg",
      alt: "Bucătărie modernă la comandă",
    },
    seo: {
      title: "Bucătărie modernă la comandă",
      description: "Proiect de bucătărie realizat la comandă.",
    },
    visibility: { home: true },
    order: 1,
  },
  {
    id: "living-contemporan",
    title: "Living contemporan",
    category: "living",
    image: {
      src: "/images/projects/living-01.jpg",
      alt: "Mobilă de living contemporană",
    },
    seo: {
      title: "Living la comandă",
      description: "Mobilă de living realizată la comandă.",
    },
    visibility: { home: true },
    order: 2,
  },
  {
    id: "dormitor-elegant",
    title: "Dormitor elegant",
    category: "dormitor",
    image: {
      src: "/images/projects/dormitor-01.jpg",
      alt: "Mobilă de dormitor elegantă",
    },
    seo: {
      title: "Dormitor la comandă",
      description: "Dormitor realizat la comandă.",
    },
    visibility: { home: true },
    order: 3, //
  },
];

// config/projects.config.ts

export type ProjectCategoryKey =
  | "bucatarie"
  | "living"
  | "dormitor"
  | "baie"
  | "hol"
  | "complet";

export type ProjectCategory = {
  key: ProjectCategoryKey;
  title: string;
  slug: string;
  intro: string;
  serviceHref: string;
};

export type Project = {
  id: string;
  category: ProjectCategoryKey;
  title: string;
  location: string;
  image: string;
  tags: string[];
};

export type CategoryTestimonial = {
  category: ProjectCategoryKey;
  text: string;
  author: string;
};

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    key: "bucatarie",
    title: "Bucătării",
    slug: "bucatarii",
    intro: "Funcționalitate zilnică, finisaje premium, soluții inteligente.",
    serviceHref: "/mobila-la-comanda/bucatarie",
  },
  {
    key: "living",
    title: "Living",
    slug: "living",
    intro: "Spații de zi echilibrate, design curat și depozitare eficientă.",
    serviceHref: "/mobila-la-comanda/living",
  },
  {
    key: "dormitor",
    title: "Dormitor",
    slug: "dormitor",
    intro: "Confort, liniște vizuală și soluții personalizate.",
    serviceHref: "/mobila-la-comanda/dormitor",
  },
  {
    key: "baie",
    title: "Baie",
    slug: "baie",
    intro: "Mobilier rezistent la umiditate, detalii precise.",
    serviceHref: "/mobila-la-comanda/baie",
  },
  {
    key: "hol",
    title: "Hol / Dressing",
    slug: "hol",
    intro: "Primul impact contează. Organizare inteligentă.",
    serviceHref: "/mobila-la-comanda/hol",
  },
  {
    key: "complet",
    title: "Proiecte complete",
    slug: "proiecte-complete",
    intro: "Apartamente și case mobilate integral.",
    serviceHref: "/mobila-la-comanda",
  },
];

export const PROJECTS: Project[] = [
  // Bucătării
  {
    id: "b1",
    category: "bucatarie",
    title: "Bucătărie modernă",
    location: "București",
    image: "/images/projects/bucatarii-1.jpg",
    tags: ["MDF vopsit", "Blum", "PAL Egger"],
  },
  {
    id: "b2",
    category: "bucatarie",
    title: "Bucătărie open-space",
    location: "Ilfov",
    image: "/images/projects/bucatarii-2.jpg",
    tags: ["MDF", "Soft-close"],
  },
  {
    id: "b3",
    category: "bucatarie",
    title: "Bucătărie compactă",
    location: "Cluj",
    image: "/images/projects/bucatarii-3.jpg",
    tags: ["PAL Egger", "Blum"],
  },
    {
    id: "b4",
    category: "bucatarie",
    title: "Bucătărie compactă",
    location: "Cluj",
    image: "/images/projects/bucatarii-3.jpg",
    tags: ["PAL Egger", "Blum"],
  },

  // Living
  {
    id: "l1",
    category: "living",
    title: "Living contemporan",
    location: "București",
    image: "/images/projects/living-1.webp",
    tags: ["MDF", "Iluminare LED"],
  },
  {
    id: "l2",
    category: "living",
    title: "Living minimalist",
    location: "Brașov",
    image: "/images/projects/living-2.webp",
    tags: ["PAL Egger", "Push-to-open"],
  },

  // Dormitor
  {
    id: "d1",
    category: "dormitor",
    title: "Dormitor matrimonial",
    location: "București",
    image: "/images/projects/dormitor-1.jpg",
    tags: ["MDF", "Depozitare integrată"],
  },
  {
    id: "d2",
    category: "dormitor",
    title: "Dormitor tineret",
    location: "Iași",
    image: "/images/projects/dormitor-2.jpg",
    tags: ["PAL Egger"],
  },

  // Baie
  {
    id: "ba1",
    category: "baie",
    title: "Mobilier baie modern",
    location: "Constanța",
    image: "/projects/baie-1.jpg",
    tags: ["Rezistent umiditate"],
  },
  {
    id: "ba2",
    category: "baie",
    title: "Baie compactă",
    location: "Timișoara",
    image: "/projects/baie-2.jpg",
    tags: ["MDF"],
  },

  // Hol
  {
    id: "h1",
    category: "hol",
    title: "Hol cu dressing",
    location: "București",
    image: "/projects/hol-1.jpg",
    tags: ["PAL Egger"],
  },
  {
    id: "h2",
    category: "hol",
    title: "Pantofar personalizat",
    location: "Sibiu",
    image: "/projects/hol-2.jpg",
    tags: ["MDF"],
  },

  // Proiecte complete
  {
    id: "c1",
    category: "complet",
    title: "Apartament complet mobilat",
    location: "București",
    image: "/projects/complet-1.jpg",
    tags: ["Design unitar"],
  },
  {
    id: "c2",
    category: "complet",
    title: "Casă unifamilială",
    location: "Ilfov",
    image: "/projects/complet-2.jpg",
    tags: ["Execuție completă"],
  },
];

export const CATEGORY_TESTIMONIALS: CategoryTestimonial[] = [
  {
    category: "bucatarie",
    text:
      "Execuție impecabilă și montaj curat. Totul exact cum am discutat.",
    author: "Client, București",
  },
  {
    category: "living",
    text:
      "Mobilierul se integrează perfect în spațiu. Recomand cu încredere.",
    author: "Client, Brașov",
  },
  {
    category: "dormitor",
    text:
      "Atenție la detalii și soluții foarte bine gândite.",
    author: "Client, Iași",
  },
  {
    category: "baie",
    text:
      "Calitate foarte bună, materiale potrivite pentru baie.",
    author: "Client, Constanța",
  },
  {
    category: "hol",
    text:
      "Depozitare exact cum aveam nevoie, fără compromisuri.",
    author: "Client, Sibiu",
  },
  {
    category: "complet",
    text:
      "Un proiect cap-coadă, coordonat profesionist.",
    author: "Client, Ilfov",
  },
];
