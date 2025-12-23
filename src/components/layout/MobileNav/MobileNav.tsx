"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { furnitureCategories } from "@/config/furniture-categories.config";
import { supportCategories } from "@/config/support-categories.config";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const trigger = document.querySelector("[data-mobile-nav-trigger]");
    if (!trigger) return;

    const openNav = () => setOpen(true);
    trigger.addEventListener("click", openNav);

    return () => {
      trigger.removeEventListener("click", openNav);
    };
  }, []);

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`mobile-nav__overlay ${open ? "is-visible" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* DRAWER */}
      <aside
        className={`mobile-nav__drawer ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="mobile-nav__close"
          aria-label="Închide meniul"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

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
                  className={`mobile-nav__link ${isActive ? "is-active" : ""}`}
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
            const href = c.href;
            const isActive = pathname === href;

            return (
              <li key={c.id}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`mobile-nav__link ${isActive ? "is-active" : ""}`}
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
