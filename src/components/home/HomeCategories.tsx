import Link from "next/link";
import Image from "next/image";

import { furnitureCategories } from "@/config/furniture-categories.config";
import { supportCategories } from "@/config/support-categories.config";

export default function HomeCategories() {
  return (
    <section className="home-categories">
      <div className="container">
        <header className="home-categories__header">
          <h2 className="home-categories__title">Mobilă la comandă pentru fiecare spațiu</h2>
          <p className="home-categories__subtitle">
            Soluții personalizate, realizate pe dimensiunile casei tale
          </p>
        </header>

        {/* Furniture categories */}
        <div className="home-categories__grid home-categories__grid--furniture">
          {furnitureCategories.map((category) => (
            <Link
              key={category.id}
              href={`/mobila-la-comanda/${category.slug}`}
              className="home-categories__card"
            >
              <h3 className="home-categories__name">{category.name}</h3>
              <div className="home-categories__image">
                <Image src={category.image.src_category} alt={category.image.alt} fill />
              </div>

              <div className="home-categories__content">
                {category.seo.description && (
                  <p className="home-categories__description">{category.seo.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
