import { furnitureCategories } from "@/config/furniture-categories.config";
import { supportCategories } from "@/config/support-categories.config";
import Link from "next/link";
import Image from "next/image";

export default function MainNav() {
  return (
    <div className="site-header__nav">
      <div className="container">
        <nav aria-label="Main navigation">
          <ul className="site-header__menu">
            {furnitureCategories.map((category) => (
              <li key={category.id} className="site-header__item site-header__item--furniture">
                <Link href={`/mobila-la-comanda/${category.slug}`} className="site-header__link">
                  <span className="site-header__icon">
                    <Image
                      src={category.image.src_menu}
                      alt={category.name}
                      width={36}
                      height={36}
                    />
                  </span>

                  <span className="site-header__label">{category.name}</span>
                </Link>
              </li>
            ))}

            {supportCategories.map((category) => (
              <li key={category.id} className="site-header__item site-header__item--support">
                <Link href={`/mobila-la-comanda/${category.slug}`} className="site-header__link">
                  <span className="site-header__category-icon">
                    <Image src={category.image.src} alt={category.name} width={36} height={36} />
                  </span>

                  <span className="site-header__label">{category.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
