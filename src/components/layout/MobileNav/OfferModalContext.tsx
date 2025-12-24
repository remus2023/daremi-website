"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type OfferModalContextType = {
  isOpen: boolean;
  openOffer: () => void;
  closeOffer: () => void;
};

const OfferModalContext = createContext<OfferModalContextType | null>(null);

export function OfferModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openOffer = () => setIsOpen(true);
  const closeOffer = () => setIsOpen(false);

  return (
    <OfferModalContext.Provider value={{ isOpen, openOffer, closeOffer }}>
      {children}
    </OfferModalContext.Provider>
  );
}

export function useOfferModal() {
  const context = useContext(OfferModalContext);
  if (!context) {
    throw new Error("useOfferModal must be used within OfferModalProvider");
  }
  return context;
}
