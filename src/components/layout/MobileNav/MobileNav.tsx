"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { furnitureCategories } from "@/config/furniture-categories.config";
import { supportCategories } from "@/config/support-categories.config";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

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
      />

      {/* DRAWER */}
      <aside className={`mobile-nav__drawer ${open ? "is-open" : ""}`}>
        <button
          type="button"
          className="mobile-nav__close"
          aria-label="Închide meniul"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <ul className="mobile-nav__list">
          {furnitureCategories.map((c) => (
            <li key={c.id}>
              <Link
                href={`/mobila-la-comanda/${c.slug}`}
                onClick={() => setOpen(false)}
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="mobile-nav__list">
          {supportCategories.map((c) => (
            <li key={c.id}>
              <Link href="#" onClick={() => setOpen(false)}>
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
