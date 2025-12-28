"use client";

import { useEffect, useRef, useState } from "react";
import { furnitureCategories } from "@/config/furniture-categories.config";
import { supportCategories } from "@/config/support-categories.config";
import Link from "next/link";
import Image from "next/image";

type FurnitureCategory = (typeof furnitureCategories)[number];

export default function MainNav() {
  const [activeCategory, setActiveCategory] = useState<FurnitureCategory | null>(null);
  const [renderedCategory, setRenderedCategory] = useState<FurnitureCategory | null>(null);

  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const switchTimer = useRef<NodeJS.Timeout | null>(null);

  const openCategory = (category: FurnitureCategory) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setRenderedCategory((prev) => prev ?? category);
    setActiveCategory(category);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);

    closeTimer.current = setTimeout(() => {
      setActiveCategory(null);
      setRenderedCategory(null);
    }, 180);
  };

  useEffect(() => {
    if (!activeCategory) return;

    if (switchTimer.current) clearTimeout(switchTimer.current);

    switchTimer.current = setTimeout(() => {
      setRenderedCategory(activeCategory);
    }, 120);

    return () => {
      if (switchTimer.current) clearTimeout(switchTimer.current);
    };
  }, [activeCategory]);

  return (
    <div className="main-nav">
      <div className="container">
        <nav className="main-nav__inner" aria-label="Main navigation">
          <ul
            className="main-nav__menu main-nav__menu--furniture"
            onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)}
            onMouseLeave={scheduleClose}
          >
            {furnitureCategories.map((category) => {
              const isActive = activeCategory?.id === category.id;

              return (
                <li
                  key={category.id}
                  className={`main-nav__item ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => openCategory(category)}
                >
                  <Link
                    href={`/mobila-la-comanda/${category.slug}`}
                    className="main-nav__link"
                  >
                    <span className="main-nav__icon">
                      <Image
                        src={category.image.src_menu}
                        alt={category.name}
                        width={36}
                        height={36}
                      />
                    </span>
                    <span className="main-nav__label">{category.name}</span>
                  </Link>
                </li>
              );
            })}

            {renderedCategory && (
              <li
                className="main-nav__dropdown is-open"
                onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)}
                onMouseLeave={scheduleClose}
              >
                <div className="main-nav__dropdown-shell">
                  <div className="main-nav__dropdown-inner">
                    <div className="main-nav__dropdown-projects">
                      <ul>
                        <li><Link href="#">Proiect 1</Link></li>
                        <li><Link href="#">Proiect 2</Link></li>
                        <li><Link href="#">Proiect 3</Link></li>
                      </ul>
                    </div>

                    <div className="main-nav__dropdown-content">
                      <h3>{renderedCategory.name} </h3>
                      <Image src={renderedCategory.image.src_text} alt="" width={774} height={150} />
                      <p>Mobilier realizat la comandă, adaptat perfect spațiului tău.</p>
                    </div>

                    <div className="main-nav__dropdown-image" aria-hidden>
                      <Image
                        src={renderedCategory.image.src_category}
                        alt=""
                        width={300}
                        height={220}
                      />
                    </div>
                  </div>
                </div>
              </li>
            )}
          </ul>

          <ul className="main-nav__menu main-nav__menu--support">
            {supportCategories.map((category) => (
              <li key={category.id} className="main-nav__item--support">
                <Link href="#" className="main-nav__link">
                  <span className="main-nav__icon">
                    <Image
                      src={category.image.src}
                      alt={category.name}
                      width={36}
                      height={36}
                    />
                  </span>

                  <span className="main-nav__label">{category.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
