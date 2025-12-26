"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type OfferModalContextType = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const OfferModalContext = createContext<OfferModalContextType | null>(null);

export function OfferModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <OfferModalContext.Provider value={{ open, setOpen }}>
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
