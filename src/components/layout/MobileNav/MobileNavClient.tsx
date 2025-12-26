"use client";

import { useState } from "react";

import MobileBottomNav from "./MobileBottomNav";
import { useOfferModal } from "./OfferModalContext";

/* MODAL UNIVERSAL (Radix wrapper) */
import Modal from "@/components/ui/modal/Modal";
import ModalContent from "@/components/ui/modal/ModalContent";

/* OFFER CONTENT */
import OfferModalContent from "../../features/offer/OfferModalContent";

export default function MobileNavClient() {
  const { open, setOpen } = useOfferModal();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <MobileBottomNav
        onOfferClick={() => setOpen(true)}
        isContactOpen={isContactOpen}
        onToggleContact={() => setIsContactOpen((v) => !v)}
        onCloseContact={() => setIsContactOpen(false)}
      />

      {/* OFFER MODAL – RADIX */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalContent variant="center">
          <OfferModalContent onClose={() => setOpen(false)} />
        </ModalContent>
      </Modal>
    </>
  );
}
