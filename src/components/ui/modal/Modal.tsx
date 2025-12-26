"use client";

import { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalProps } from "./modal.types";

export default function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;

    // 1) lock scroll (folosim ce ai deja în _globals.scss)
    html.classList.add("body--locked");
    body.classList.add("body--locked");

    // 2) compensare scrollbar ca să NU sară layout-ul centrat
    const scrollbarWidth = window.innerWidth - html.clientWidth;
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      html.classList.remove("body--locked");
      body.classList.remove("body--locked");
      body.style.paddingRight = "";
    };
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && onClose()}>
      <Dialog.Portal>{children}</Dialog.Portal>
    </Dialog.Root>
  );
}
