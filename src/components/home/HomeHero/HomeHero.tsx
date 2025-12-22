import Image from "next/image";
import Button from "@/components/ui/atoms/Button/Button";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="container">
        <div className="home-hero__grid">
          {/* CONTENT */}
          <div className="home-hero__content">
            <h1 className="home-hero__title">
              Mobilă la comandă premium, realizată pe măsura ta
            </h1>

            <p className="home-hero__description">
              Proiectăm și realizăm mobilier la comandă pentru bucătării, livinguri,
              dormitoare și spații comerciale, cu accent pe design personalizat,
              materiale premium și execuție impecabilă.
            </p>

            <p className="home-hero__benefits">
              Design personalizat • Materiale premium • Montaj profesionist
            </p>

            <div className="home-hero__actions">
              <Button href="/cerere-oferta" variant="primary" size="lg">
                Proiect gratuit
              </Button>

              <Button href="/proiecte" variant="ghost" size="lg">
                Vezi proiecte
              </Button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="home-hero__media">
            <Image
              src="/images/hero/home_hero-banner.webp"
              alt="Mobilă de bucătărie la comandă, design modern"
              width={1200}
              height={800}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
