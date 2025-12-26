"use client";

import { useState } from "react";

type Props = {
  onClose: () => void;
};

export default function OfferModalContent({ onClose }: Props) {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="offer-modal__success">
        <div className="offer-modal__success-icon">✓</div>
        <h3>Cererea a fost trimisă</h3>
        <p>Te vom contacta în cel mai scurt timp.</p>

        <button
          type="button"
          className="offer-modal__success-close"
          onClick={onClose}
        >
          Închide
        </button>
      </div>
    );
  }

  return (
    <div className="offer-modal">
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
    </div>
  );
}
