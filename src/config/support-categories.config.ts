// src/config/support-categories.config.ts

export type SupportCategoryConfig = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  contentVariant?: "materials" | "hardware";
};

export const supportCategories: SupportCategoryConfig[] = [
  {
    id: "materiale",
    name: "Materiale",
    slug: "materiale",
    description:
      "PAL, MDF, furnir, sticlă și alte materiale premium folosite în proiectele noastre.",
    contentVariant: "materials",
  },
  {
    id: "feronerie",
    name: "Feronerie",
    slug: "feronerie",
    description: "Balamale, glisiere și sisteme de feronerie de la producători consacrați.",
    contentVariant: "hardware",
  },
];
