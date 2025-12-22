import { createMetadata } from "@/seo/createMetadata";

import HomeHero from "@/components/home/HomeHero/HomeHero";
import HomeCategories from "@/components/home/HomeCategories/HomeCategories";
import HomeBenefits from "@/components/home/HomeBenefits/HomeBenefits";
import HomeProjects from "@/components/home/HomeProjects/HomeProjects";
import HomeCTA from "@/components/home/HomeCTA/HomeCTA";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export const metadata = createMetadata({
  title: "Mobilă la comandă | Daremi",
  description:
    "Mobilă la comandă premium pentru bucătărie, living, dormitor și baie. Design modern, materiale de calitate, soluții personalizate Daremi.",
  url: "https://www.daremi.ro/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <RevealOnScroll>
        <HomeCategories />
      </RevealOnScroll>

      <RevealOnScroll>
        <HomeBenefits />
      </RevealOnScroll>

      <RevealOnScroll>
        <HomeProjects />
      </RevealOnScroll>

      <RevealOnScroll>
        <HomeCTA />
      </RevealOnScroll>
      {/* <SkeletonDemo /> */}

    </>
  );
}
