"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export default function MobileContact() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

  return (
    <div ref={ref} className={clsx("mobile-contact", { "is-open": open })}>
      <button
        type="button"
        className="mobile-contact__toggle"
        aria-label="Contact"
        onClick={() => setOpen((v) => !v)}
      >
        ☎
      </button>

      <div className="mobile-contact__panel">
        <a href="tel:+40123456789" className="mobile-contact__item">
          <span className="mobile-contact__icon">📞</span>
          <span className="mobile-contact__label">Telefon</span>
        </a>

        <a
          href="https://wa.me/40123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-contact__item"
        >
          <span className="mobile-contact__icon">💬</span>
          <span className="mobile-contact__label">WhatsApp</span>
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-contact__item"
        >
          <span className="mobile-contact__icon">📘</span>
          <span className="mobile-contact__label">Facebook</span>
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-contact__item"
        >
          <span className="mobile-contact__icon">📸</span>
          <span className="mobile-contact__label">Instagram</span>
        </a>

        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-contact__item"
        >
          <span className="mobile-contact__icon">🎵</span>
          <span className="mobile-contact__label">TikTok</span>
        </a>
      </div>
    </div>
  );
}
