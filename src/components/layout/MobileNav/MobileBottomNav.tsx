"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import MobileContact from "@/components/ui/MobileContact/MobileContact";

type Props = {
  onOfferClick: () => void;
  isContactOpen: boolean;
  onToggleContact: () => void;
  onCloseContact: () => void;
};

export default function MobileBottomNav({
  onOfferClick,
  isContactOpen,
  onToggleContact,
  onCloseContact,
}: Props) {
  const contactWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isContactOpen) return;

    const handleOutside = (e: PointerEvent) => {
      if (!contactWrapRef.current) return;
      const target = e.target as Node;
      if (!contactWrapRef.current.contains(target)) {
        onCloseContact();
      }
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, [isContactOpen, onCloseContact]);

  return (
    <nav className="mobile-bottom-nav" aria-label="Navigare mobil">
      <Link href="/" className="mobile-bottom-nav__item">
        <span className="mobile-bottom-nav__icon">🏠</span>
        <span className="mobile-bottom-nav__label">Home</span>
      </Link>

      <Link href="/portofoliu" className="mobile-bottom-nav__item">
        <span className="mobile-bottom-nav__icon">🗂</span>
        <span className="mobile-bottom-nav__label">Portofoliu</span>
      </Link>

      <button
        type="button"
        className="mobile-bottom-nav__item mobile-bottom-nav__item--cta"
        onClick={onOfferClick}
      >
        <span className="mobile-bottom-nav__icon">📝</span>
        <span className="mobile-bottom-nav__label">Cere ofertă</span>
      </button>

      {/* CONTACT (ancoră pentru popup) */}
      <div
        ref={contactWrapRef}
        className="mobile-bottom-nav__item mobile-bottom-nav__contact"
        role="button"
        tabIndex={0}
        onClick={onToggleContact}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onToggleContact();
        }}
      >
        <span className="mobile-bottom-nav__icon">☎</span>
        <span className="mobile-bottom-nav__label">Contact</span>

        {/* Popup-ul este COPIL => se poate ancora perfect de Contact */}
        <MobileContact open={isContactOpen} />
      </div>
    </nav>
  );
}
