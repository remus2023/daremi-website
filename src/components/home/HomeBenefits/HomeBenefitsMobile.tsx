"use client";

import { homeBenefits } from "@/config/home-benefits.config";
import Image from "next/image";

type Props = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export default function HomeBenefitsMobile({
  activeIndex,
  setActiveIndex,
}: Props) {
  return (
    <section className="home-benefits home-benefits--mobile">
      <div className="container">
        <header className="home-benefits__header">
          <h2 className="home-benefits__title">
            De ce să alegi mobilier la comandă Daremi
          </h2>
          <p className="home-benefits__subtitle">
            Proiectare corectă, execuție precisă și rezultate care se văd
          </p>
        </header>

        <div className="home-benefits__mobile-list">
          {homeBenefits.map((benefit, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={benefit.id}
                className={`home-benefits__mobile-item ${
                  isOpen ? "is-open" : ""
                }`}
              >
                <button
                  className="home-benefits__mobile-header"
                  onClick={() => setActiveIndex(index)}
                >
                  {benefit.title}
                </button>

                <div className="home-benefits__mobile-content">
                  {benefit.image && (
                    <Image
                      src={benefit.image}
                      alt=""
                      width={600}
                      height={360}
                    />
                  )}
                  <p>{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
