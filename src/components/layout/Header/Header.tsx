"use client";

import { useEffect, useState } from "react";
import MainNav from "../MainNav/MainNav";

/* UI atoms */
import Logo from "@/components/ui/atoms/Logo";
import Button from "@/components/ui/atoms/Button/Button";
import UserIcon from "@/components/ui/atoms/UserIcon";

/* Local components */
import HeaderSearch from "../../ui/atoms/HeaderSearch";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
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

            {/* User */}
            <UserIcon isAuthenticated={false} />
          </div>
        </div>
      </div>

      <MainNav />
    </header>
  );
}
