import HomeHero from "@/components/home/HeroHero/HomeHero";
import HomeCategories from "@/components/home/HomeCategories/HomeCategories";
import HomeBenefits from "@/components/home/HomeBenefits/HomeBenefits";
import HomeProjects from "@/components/home/HomeProjects/HomeProjects";
import HomeCTA from "@/components/home/HomeCTA/HomeCTA";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SkeletonDemo from "@/components/ui/SkeletonDemo";
import Link from "@/components/ui/atoms/Link";

export default function HomePage() {
  return (
    <>
<Link href="/">Link default</Link>

<Link href="/" variant="muted">
  Link muted
</Link>

<Link href="/" variant="underline">
  Link underline
</Link>

<Link href="/" variant="block">
  Link block
</Link>
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
