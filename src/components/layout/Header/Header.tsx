"use client";

import { useEffect, useState } from "react";
import MainNav from "../MainNav/MainNav";

/* UI atoms */
import Logo from "@/components/ui/atoms/Logo";
import Button from "@/components/ui/atoms/Button/Button";
import UserIcon from "@/components/ui/atoms/UserIcon";
import MobileNav from "../MobileNav/MobileNav";

/* Local components */
import HeaderSearch from "../../ui/atoms/HeaderSearch";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${isSticky ? "is-sticky" : ""}`}>
      {/* TOP BAR */}
      <div className="site-header__top">
        <div className="container site-header__top-inner">
          {/* Logo */}
          <div className="site-header__brand">
            <Logo className="site-header__logo" />
          </div>

          {/* Search */}
          <div className="site-header__search">
            <HeaderSearch />
          </div>

          {/* Actions */}
          <div className="site-header__actions">
            <div className="site-header__phone">
              <span className="site-header__phone-label">Comenzi:</span>
              <a href="tel:+40123456789" className="site-header__phone-number">
                0123 456 789
              </a>
            </div>

            {/* CTA */}
            <Button href="/cerere-oferta" className="site-header__cta">
              Cere ofertă
            </Button>
          </div>

          {/* UserIcon – MUTAT, independent */}
          <UserIcon isAuthenticated={false} />

          {/* Burger – ULTIMUL ELEMENT */}
          <button
            type="button"
            className="site-header__burger"
            aria-label="Deschide meniul"
            data-mobile-nav-trigger
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <MainNav />
      <MobileNav />
    </header>
  );
}
