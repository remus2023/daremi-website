import Image from "next/image";

export default function HomeHero() {
  return (
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
            <div className="hero__content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ratione hic labore,
              architecto porro a qui officiis maxime. Non repellendus, voluptatibus quibusdam totam
              exercitationem fugiat provident quas? Sequi, dolorum officiis.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
