import HomeHero from "@/components/home/HomeHero";
import HomeCategories from "@/components/home/HomeCategories";
import HomeBenefits from "@/components/home/HomeBenefits";
import HomeCTA from "@/components/home/HomeCTA";
import HomeProjects from "@/components/home/HomeProjects";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeCategories />
      <HomeBenefits />
      <HomeProjects />
      <HomeCTA />
    </>
  );
}
