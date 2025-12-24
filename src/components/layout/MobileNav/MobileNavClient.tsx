"use client";

import { useState } from "react";
import MobileBottomNav from "./MobileBottomNav";
import OfferModal from "./OfferModal";
import { useOfferModal } from "./OfferModalContext";

export default function MobileNavClient() {
  const { openOffer } = useOfferModal();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <MobileBottomNav
        onOfferClick={openOffer}
        isContactOpen={isContactOpen}
        onToggleContact={() => setIsContactOpen((v) => !v)}
        onCloseContact={() => setIsContactOpen(false)}
      />

      <OfferModal />
    </>
  );
}
