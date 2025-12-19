import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          {/* LEFT – TEXT (2/5) */}
          <div className="hero__content">
            <h1 className="hero__title">Mobilă la comandă premium</h1>

            <p className="hero__description">
              Proiectăm și realizăm mobilier personalizat pentru bucătării,
              livinguri, dormitoare și spații comerciale. Design modern,
              materiale de calitate și execuție impecabilă.
            </p>
          </div>

          {/* RIGHT – IMAGE (3/5) */}
          <div className="hero__media">
            <Image
              src="/images/hero/home_hero-banner.webp"
              alt="Mobilă la comandă Daremi"
              fill
              priority
              className="hero__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
