"use client";

import { homeBenefits } from "@/config/home-benefits.config";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export default function HomeBenefitsDesktop({
  activeIndex,
  setActiveIndex,
}: Props) {
  return (
    <section className="home-benefits home-benefits--desktop">
      <div className="container">
        <header className="home-benefits__header">
          <h2 className="home-benefits__title">
            De ce să alegi mobilier la comandă Daremi
          </h2>
          <p className="home-benefits__subtitle">
            Proiectare corectă, execuție precisă și rezultate care se văd
          </p>
        </header>

        <div className="home-benefits__master">
          <div className="home-benefits__master-card">
            {homeBenefits.map((benefit, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={benefit.id}
                  className="home-benefits__master-layer"
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : 250,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  {benefit.image && (
                    <div className="home-benefits__master-media">
                      <Image
                        src={benefit.image}
                        alt=""
                        width={900}
                        height={420}
                      />
                    </div>
                  )}

                  <div className="home-benefits__master-content">
                    <h3 className="home-benefits__master-title">
                      {benefit.title}
                    </h3>
                    <p className="home-benefits__master-text">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="home-benefits__list">
          {homeBenefits.map((benefit, index) => (
            <button
              key={benefit.id}
              className={`home-benefits__item ${
                index === activeIndex ? "is-active" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {benefit.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
