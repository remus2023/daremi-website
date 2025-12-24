"use client";

import { useEffect, useState } from "react";
import { useOfferModal } from "./OfferModalContext";

export default function OfferModal() {
  const { isOpen, closeOffer } = useOfferModal();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOffer();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      setIsSuccess(false);
    };
  }, [isOpen, closeOffer]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div
      className="offer-modal"
      role="dialog"
      aria-modal="true"
      onClick={closeOffer}   // overlay click
    >
      <div
        className="offer-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="offer-modal__close"
          aria-label="Închide"
          onClick={closeOffer}
        >
          ← Înapoi
        </button>

        {!isSuccess && (
          <>
            <h2>Cere ofertă personalizată</h2>
            <p>Completezi rapid. Te contactăm în cel mai scurt timp.</p>

            <form className="offer-modal__form" onSubmit={handleSubmit}>
              <select required>
                <option value="">Tip mobilier</option>
                <option>Bucătărie</option>
                <option>Living</option>
                <option>Dormitor</option>
                <option>Baie</option>
                <option>Hol</option>
                <option>Altul</option>
              </select>

              <input type="text" placeholder="Localitate" required />
              <input type="tel" placeholder="Telefon / WhatsApp" required />

              <button type="submit">Trimite cererea</button>
            </form>
          </>
        )}

        {isSuccess && (
          <div className="offer-modal__success">
            <div className="offer-modal__success-icon">✓</div>
            <h3>Cererea a fost trimisă</h3>
            <p>Te vom contacta în cel mai scurt timp.</p>

            <button
              type="button"
              className="offer-modal__success-close"
              onClick={closeOffer}
            >
              Închide
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
