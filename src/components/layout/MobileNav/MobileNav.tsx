"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { furnitureCategories } from "@/config/furniture-categories.config";
import { supportCategories } from "@/config/support-categories.config";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLElement | null>(null);

  /* trigger burger */
  useEffect(() => {
    const trigger = document.querySelector("[data-mobile-nav-trigger]");
    if (!trigger) return;

    const openNav = () => setOpen(true);
    trigger.addEventListener("click", openNav);

    return () => {
      trigger.removeEventListener("click", openNav);
    };
  }, []);

  /* 🔒 HARD SCROLL LOCK + ESC CLOSE */
  useEffect(() => {
    const preventScroll = (e: Event) => e.preventDefault();

    const preventKeys = (e: KeyboardEvent) => {
      if (
        ["ArrowUp", "ArrowDown", "Space", "PageUp", "PageDown"].includes(e.code)
      ) {
        e.preventDefault();
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.documentElement.classList.add("body--locked");
      document.body.classList.add("body--locked");

      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      window.addEventListener("keydown", preventKeys);
    } else {
      document.documentElement.classList.remove("body--locked");
      document.body.classList.remove("body--locked");

      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeys);
    }

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeys);
      document.documentElement.classList.remove("body--locked");
      document.body.classList.remove("body--locked");
    };
  }, [open]);

  /* ♿ FOCUS TRAP */
  useEffect(() => {
    if (!open || !drawerRef.current) return;

    const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", trap);

    
    return () => {
      document.removeEventListener("keydown", trap);
    };
  }, [open]);

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`mobile-nav__overlay ${open ? "is-visible" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* DRAWER */}
      <aside
        ref={drawerRef}
        className={`mobile-nav__drawer ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        {/* MINI HEADER */}
        <div className="mobile-nav__header">
          <span className="mobile-nav__brand">Daremi</span>
          <button
            type="button"
            className="mobile-nav__close"
            aria-label="Închide meniul"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* MOBILĂ */}
        <ul className="mobile-nav__list">
          {furnitureCategories.map((c) => {
            const href = `/mobila-la-comanda/${c.slug}`;
            const isActive = pathname === href;

            return (
              <li key={c.id}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`mobile-nav__link ${
                    isActive ? "is-active" : ""
                  }`}
                >
                  <Image
                    src={c.image.src_menu}
                    alt={c.name}
                    width={20}
                    height={20}
                  />
                  <span>{c.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* MATERIALE & FERONERIE */}
        <ul className="mobile-nav__list">
          {supportCategories.map((c) => {
            const href = `/materiale-si-feronerie/${c.slug}`;
            const isActive = pathname === href;

            return (
              <li key={c.id}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`mobile-nav__link ${
                    isActive ? "is-active" : ""
                  }`}
                >
                  <Image
                    src={c.image.src}
                    alt={c.name}
                    width={20}
                    height={20}
                  />
                  <span>{c.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
