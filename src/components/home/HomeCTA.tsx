import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="home-cta">
      <div className="container">
        <div className="home-cta__inner">
          <h2 className="home-cta__title">Hai să proiectăm mobilierul tău</h2>

          <p className="home-cta__text">
            Spune-ne ce îți dorești și îți oferim consultanță gratuită, randări 3D și soluții
            personalizate pentru spațiul tău.
          </p>

          <div className="home-cta__actions">
            <Link href="/contact" className="home-cta__button home-cta__button--primary">
              Cere ofertă personalizată
            </Link>

            <a href="tel:+40700000000" className="home-cta__button home-cta__button--secondary">
              Sună-ne acum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
