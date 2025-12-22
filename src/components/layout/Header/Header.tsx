"use client";

import { useEffect, useRef } from "react";
import MainNav from "../MainNav/MainNav";

/* UI atoms */
import Logo from "@/components/ui/atoms/Logo";
import Button from "@/components/ui/atoms/Button/Button";
import UserIcon from "@/components/ui/atoms/UserIcon";
import MobileNav from "../MobileNav/MobileNav";

/* Local components */
import HeaderSearch from "../../ui/atoms/HeaderSearch";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const updateHeight = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerRef.current!.offsetHeight}px`
      );
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="site-header site-header--fixed"
      >
        <div className="site-header__top">
          <div className="container site-header__top-inner">
            <div className="site-header__brand">
              <Logo className="site-header__logo" />
            </div>

            <div className="site-header__search">
              <HeaderSearch />
            </div>

            <div className="site-header__actions">
              <div className="site-header__phone">
                <span className="site-header__phone-label">Comenzi:</span>
                <a href="tel:+40123456789" className="site-header__phone-number">
                  0123 456 789
                </a>
              </div>

              <Button href="/cerere-oferta" className="site-header__cta">
                Cere ofertă
              </Button>
            </div>

            <UserIcon isAuthenticated={false} />

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
      
      </header>
  <MobileNav />
      {/* Spacer dinamic */}
      <div className="site-header-spacer" />
    </>
  );
}
