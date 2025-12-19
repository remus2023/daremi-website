import HomeHero from "@/components/home/HeroHero/HomeHero";
import HomeCategories from "@/components/home/HomeCategories/HomeCategories";
import HomeBenefits from "@/components/home/HomeBenefits/HomeBenefits";
import HomeProjects from "@/components/home/HomeProjects/HomeProjects";
import HomeCTA from "@/components/home/HomeCTA/HomeCTA";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SkeletonDemo from "@/components/ui/SkeletonDemo";


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
      <SkeletonDemo />
    </>
  );
}
