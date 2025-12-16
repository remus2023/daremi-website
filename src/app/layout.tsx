import { furnitureCategories } from "@/config/furniture-categories.config";
import { supportCategories } from "@/config/support-categories.config";
import Link from "next/link";
import Image from "next/image";
import "@/styles/main.scss";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <header className="site-header">
          {/* TOP BAR */}
          <div className="site-header__top">
            <div className="container site-header__top-inner">
              {/* Logo */}
              <div className="site-header__brand">
                <Link href="/" className="site-header__logo">
                  <Image src="/images/logo-daremi.png" alt="Daremi" width={160} height={80} />
                </Link>
              </div>

              {/* Search */}
              <div className="site-header__search">
                <input
                  type="text"
                  className="site-header__search-input"
                  placeholder="Caută produse..."
                />
              </div>

              {/* Actions */}
              <div className="site-header__actions">
                <div className="site-header__phone">
                  <span className="site-header__phone-label">Comenzi:</span>
                  <a href="tel:+40123456789" className="site-header__phone-number">
                    0123 456 789
                  </a>
                </div>

                <Link href="/account" className="site-header__icon">
                  👤
                </Link>
              </div>
            </div>
          </div>

          {/* MAIN NAV */}
          <div className="site-header__nav">
            <div className="container">
              <nav aria-label="Main navigation">
                <ul className="site-header__menu">
                  {furnitureCategories.map((category) => (
                    <li
                      key={category.id}
                      className="site-header__item site-header__item--furniture"
                    >
                      <Link
                        href={`/mobila-la-comanda/${category.slug}`}
                        className="site-header__link"
                      >
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
                      <Link
                        href={`/mobila-la-comanda/${category.slug}`}
                        className="site-header__link"
                      >
                        <span className="site-header__category-icon">
                          <Image
                            src={category.image.src}
                            alt={category.name}
                            width={36}
                            height={36}
                          />
                        </span>

                        <span className="site-header__label">{category.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
