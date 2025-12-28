
export type HomeBenefitConfig = {
  id: string;
  title: string;
  description: string;
  variant?: "default" | "highlight";
  image?: string; // ✅ ADĂUGAT – fără impact asupra conținutului existent
};

export const homeBenefits: HomeBenefitConfig[] = [
  {
    id: "design-3d",
    title: "Proiectare 3D & randări realiste",
    description:
      "Vizualizezi mobilierul în detaliu prin randări 3D realiste, înainte de a începe producția.",
    variant: "highlight",
    image: "/images/benefits/proiectare-3d.png",
  },
  {
    id: "schite-tehnice",
    title: "Schițe tehnice precise",
    description:
      "Fiecare piesă este realizată pe baza unor schițe tehnice clare, adaptate exact spațiului tău.",
    image: "/images/benefits/schite-tehnice.png",
  },
  {
    id: "personalizare",
    title: "Personalizare completă",
    description:
      "Dimensiuni, compartimentare, culori și finisaje alese în funcție de stilul și nevoile tale.",
    image: "/images/benefits/personalizare-completa.png",
  },
  {
    id: "materiale-premium",
    title: "Materiale premium",
    description:
      "Lucrăm exclusiv cu materiale durabile și feronerie de la producători consacrați.",
    image: "/images/benefits/materiale-premium.png",
  },
  {
    id: "executie-montaj",
    title: "Execuție și montaj profesionist",
    description:
      "De la proiectare până la montajul final, tot procesul este realizat de echipa noastră.",
    image: "/images/benefits/executie-montaj.png",
  },
];
