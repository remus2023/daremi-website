"use client";

import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import { ModalContentProps } from "./modal.types";

export default function ModalContent({
  children,
  variant = "center",
  title = "Dialog",
}: ModalContentProps) {
  return (
    <>
      <Dialog.Overlay className="ui-modal__overlay" />
      <Dialog.Content className={clsx("ui-modal", `ui-modal--${variant}`)}>
        <Dialog.Title className="ui-modal__sr-title">{title}</Dialog.Title>

        <Dialog.Close className="ui-modal__close" aria-label="Close">
          ×
        </Dialog.Close>

        {children}
      </Dialog.Content>
    </>
  );
}
