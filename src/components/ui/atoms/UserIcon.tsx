"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type UserIconProps = {
  isAuthenticated?: boolean;
  userName?: string;
  className?: string;
};

export default function UserIcon({ isAuthenticated = false, userName, className }: UserIconProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  /* Close dropdown on click outside (ONLY when NOT authenticated) */
  useEffect(() => {
    if (isAuthenticated || !open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, isAuthenticated]);

  /* =====================
     AUTHENTICATED USER
  ===================== */
  if (isAuthenticated) {
    return (
      <Link href="/account" className={`user-icon user-icon--logged ${className ?? ""}`}>
        <span className="user-icon__trigger">👤</span>
        <span className="user-icon__name">{userName}</span>
      </Link>
    );
  }

  /* =====================
     NOT AUTHENTICATED
  ===================== */
  return (
    <div ref={ref} className={`user-icon ${className ?? ""}`} onMouseEnter={() => setOpen(true)}>
      <button
        type="button"
        className="user-icon__trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        👤
      </button>

      {open && (
        <div className="user-icon__menu">
          <Link href="/login" className="user-icon__item" onClick={() => setOpen(false)}>
            Autentificare
          </Link>
          <Link href="/register" className="user-icon__item" onClick={() => setOpen(false)}>
            Creează cont
          </Link>
        </div>
      )}
    </div>
  );
}
