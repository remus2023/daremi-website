"use client";

import clsx from "clsx";

type Props = {
  open: boolean;
};

export default function MobileContact({ open }: Props) {
  return (
    <div className={clsx("mobile-contact-popup", { "is-open": open })}>
      <a href="tel:+40123456789">📞 Telefon</a>
      <a href="https://wa.me/40123456789" target="_blank" rel="noreferrer">
        💬 WhatsApp
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        📘 Facebook
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        📸 Instagram
      </a>
    </div>
  );
}
