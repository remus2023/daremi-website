import Link from "next/link";
import Image from "next/image";
import MainNav from "./MainNav";

export default function Header() {
  return (
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

      <MainNav />
    </header>
  );
}
