// src/config/support-categories.config.ts

export type SupportCategoryConfig = {
  id: string;
  name: string;
  slug: string;

  image: {
    src: string;
    alt: string;
  };
  href: string;

  seo: {
    title: string;
    description: string;
  };

  variant?: "materials" | "hardware";
};

export const supportCategories: SupportCategoryConfig[] = [
  {
    id: "materiale",
    name: "MATERIALE",
    slug: "materiale",

    image: {
      src: "/images/categories/materials.png",
      alt: "Materiale premium pentru mobilier la comandă",
    },
    href: "/materiale",
    seo: {
      title: "Materiale premium pentru mobilă la comandă",
      description:
        "PAL, MDF, furnir, sticlă și alte materiale de calitate superioară folosite în proiectele Daremi.",
    },

    variant: "materials",
  },

  {
    id: "feronerie",
    name: "FERONERIE",
    slug: "feronerie",

    image: {
      src: "/images/categories/hardware_cut.png",
      alt: "Feronerie de calitate pentru mobilier la comandă",
    },
    href: "/feronerie",
    seo: {
      title: "Feronerie profesională pentru mobilier",
      description:
        "Balamale, glisiere și sisteme de feronerie de la producători consacrați, pentru durabilitate maximă.",
    },

    variant: "hardware",
  },
];
