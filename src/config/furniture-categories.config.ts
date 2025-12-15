// src/config/furniture-categories.config.ts

export type FurnitureCategoryConfig = {
  id: string;
  name: string;
  slug: string;
  image: {
    src: string;
    alt: string;
  };
  seo: {
    title: string;
    description: string;
  };
  variant?: "default" | "featured";
};

export const furnitureCategories: FurnitureCategoryConfig[] = [
  {
    id: "bucatarie",
    name: "Bucătărie",
    slug: "bucatarie",
    image: {
      src: "/images/categories/bucatarie.webp",
      alt: "Mobilă de bucătărie la comandă",
    },
    seo: {
      title: "Mobilă bucătărie la comandă | Daremi",
      description: "Bucătării realizate la comandă, adaptate perfect spațiului și stilului tău.",
    },
    variant: "featured",
  },
  {
    id: "living",
    name: "Living",
    slug: "living",
    image: {
      src: "/images/categories/living.webp",
      alt: "Mobilă de living la comandă",
    },
    seo: {
      title: "Mobilă living la comandă | Daremi",
      description: "Mobilă de living personalizată, modernă și funcțională.",
    },
  },
  {
    id: "dormitor",
    name: "Dormitor",
    slug: "dormitor",
    image: {
      src: "/images/categories/dormitor.webp",
      alt: "Mobilă de dormitor la comandă",
    },
    seo: {
      title: "Mobilă dormitor la comandă | Daremi",
      description: "Mobilier de dormitor realizat la comandă pentru confort și eleganță.",
    },
  },
  {
    id: "baie",
    name: "Baie",
    slug: "baie",
    image: {
      src: "/images/categories/baie.webp",
      alt: "Mobilă de baie la comandă",
    },
    seo: {
      title: "Mobilă baie la comandă | Daremi",
      description: "Mobilă de baie personalizată, rezistentă și elegantă.",
    },
  },
  {
    id: "hol",
    name: "Hol",
    slug: "hol",
    image: {
      src: "/images/categories/hol.webp",
      alt: "Mobilă de hol la comandă",
    },
    seo: {
      title: "Mobilă hol la comandă | Daremi",
      description: "Mobilă de hol realizată la comandă pentru organizare și design.",
    },
  },
];
