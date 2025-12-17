import { homeBenefits } from "@/config/home-benefits.config";

export default function HomeBenefits() {
  return (
    <section className="home-benefits">
      <div className="container">
        <header className="home-benefits__header">
          <h2 className="home-benefits__title">De ce să alegi mobilier la comandă Daremi</h2>
          <p className="home-benefits__subtitle">
            Proiectare corectă, execuție precisă și rezultate care se văd
          </p>
        </header>

        <div className="home-benefits__list">
          {homeBenefits.map((benefit) => (
            <div key={benefit.id} className="home-benefits__item" data-variant={benefit.variant}>
              <h3 className="home-benefits__item-title">{benefit.title}</h3>
              <p className="home-benefits__item-text">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
