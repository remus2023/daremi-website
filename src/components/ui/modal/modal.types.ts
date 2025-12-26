export type ModalVariant =
  | "center"
  | "fullscreen"
  | "bottom-sheet"
  | "top"
  | "side-right"
  | "side-left";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export type ModalContentProps = {
  children: React.ReactNode;
  variant?: ModalVariant;
  /** opțional, doar dacă vrei să suprascrii aria title */
  title?: string;
};