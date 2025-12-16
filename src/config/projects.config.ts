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
