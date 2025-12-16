import Image from "next/image";
import HomeCategories from "@/components/home/HomeCategories";
import HomeBenefits from "@/components/home/HomeBenefits";
import HomeCTA from "@/components/home/HomeCTA";
import HomeProjects from "@/components/home/HomeProjects";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__media">
            <Image
              src="/images/hero/home_hero-banner.webp"
              alt="Mobilă la comandă Daremi"
              fill
              priority
              className="hero__image"
            />

            <div className="hero__inner">
              <div className="hero__content">aaa</div>
            </div>
          </div>
        </div>
      </section>

      <HomeCategories />
      <HomeBenefits />
      <HomeProjects />
      <HomeCTA />
    </>
  );
}
