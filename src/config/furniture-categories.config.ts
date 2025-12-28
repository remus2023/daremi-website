export type FurnitureCategoryConfig = {
  id: string;
  name: string;
  slug: string;

  image: {
    src_menu: string;
    src_category: string;
    src_text?: string;
    alt: string;
  };

  seo: {
    title: string;
    description: string;
    h1?: string;
    keywords?: string[];
    canonical?: string;
  };

  /** Vizual / business */
  variant?: "default" | "featured";

  /** Analytics / tracking (future-proof) */
  trackingTag?: string;
};

export const furnitureCategories: FurnitureCategoryConfig[] = [
  {
    id: "bucatarie",
    name: "BUCATARIE",
    slug: "bucatarie",

    image: {
      src_menu: "/images/categories/bucatarie_cut.png",
      src_category: "/images/categories/bucatarie-cat2.png",
      src_text: "/images/categories/bucatarie-text2.png",
      alt: "Mobilă de bucătărie la comandă",
    },

    seo: {
      title: "Mobilă bucătărie la comandă | Daremi",
      description: "Bucătării realizate la comandă, adaptate perfect spațiului și stilului tău.",
      h1: "Mobilă de bucătărie la comandă",
      keywords: [
        "mobilă bucătărie la comandă",
        "bucătării la comandă",
        "mobilier bucătărie personalizat",
        "mobilă bucătărie modernă",
        "mobilă bucătărie Daremi",
      ],
    },

    variant: "featured",
    trackingTag: "category_bucatarie",
  },

  {
    id: "living",
    name: "LIVING",
    slug: "living",

    image: {
      src_menu: "/images/categories/living.png",
      src_category: "/images/categories/living-cat.png",
      alt: "Mobilă de living la comandă",
    },

    seo: {
      title: "Mobilă living la comandă | Daremi",
      description: "Mobilă de living personalizată, modernă și funcțională.",
      h1: "Mobilă de living la comandă",
      keywords: [
        "mobilă living la comandă",
        "mobilier living personalizat",
        "mobilă living modernă",
        "mobilă living Daremi",
      ],
    },

    trackingTag: "category_living",
  },

  {
    id: "dormitor",
    name: "DORMITOR",
    slug: "dormitor",

    image: {
      src_menu: "/images/categories/dormitor_cut.png",
      src_category: "/images/categories/dormitor-cat2.png",
      alt: "Mobilă de dormitor la comandă",
    },

    seo: {
      title: "Mobilă dormitor la comandă | Daremi",
      description: "Mobilier de dormitor realizat la comandă pentru confort și eleganță.",
      h1: "Mobilă de dormitor la comandă",
      keywords: [
        "mobilă dormitor la comandă",
        "mobilier dormitor personalizat",
        "mobilă dormitor modernă",
        "mobilă dormitor Daremi",
      ],
    },

    trackingTag: "category_dormitor",
  },

  {
    id: "baie",
    name: "BAIE",
    slug: "baie",

    image: {
      src_menu: "/images/categories/baie.png",
      src_category: "/images/categories/baie-cat.png",
      alt: "Mobilă de baie la comandă",
    },

    seo: {
      title: "Mobilă baie la comandă | Daremi",
      description: "Mobilă de baie personalizată, rezistentă și elegantă.",
      h1: "Mobilă de baie la comandă",
      keywords: [
        "mobilă baie la comandă",
        "mobilier baie personalizat",
        "mobilă baie modernă",
        "mobilă baie Daremi",
      ],
    },

    trackingTag: "category_baie",
  },

  {
    id: "hol",
    name: "HOL",
    slug: "hol",

    image: {
      src_menu: "/images/categories/hol_cut.png",
      src_category: "/images/categories/hol-cat.png",
      alt: "Mobilă de hol la comandă",
    },

    seo: {
      title: "Mobilă hol la comandă | Daremi",
      description: "Mobilă de hol realizată la comandă pentru organizare și design.",
      h1: "Mobilă de hol la comandă",
      keywords: [
        "mobilă hol la comandă",
        "mobilier hol personalizat",
        "mobilă hol modernă",
        "mobilă hol Daremi",
      ],
    },

    trackingTag: "category_hol",
  },
];
