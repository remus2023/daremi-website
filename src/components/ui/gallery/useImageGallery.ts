"use client";

import { useCallback, useState } from "react";

type UseImageGalleryOptions = {
  images: string[];
  initialIndex?: number;
};

export function useImageGallery({
  images,
  initialIndex = 0,
}: UseImageGalleryOptions) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  /**
   * Deschide lightbox-ul pe indexul curent
   * sau pe un index furnizat explicit
   */
  const openLightbox = useCallback(
    (index?: number) => {
      if (typeof index === "number") {
        setActiveIndex(index);
      }
      setIsLightboxOpen(true);
    },
    []
  );

  /**
   * Închide lightbox-ul
   */
  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  /**
   * Setează imaginea activă
   * Folosit de gallery (Embla) și de lightbox
   */
  const changeIndex = useCallback(
    (index: number) => {
      if (index < 0 || index >= images.length) return;
      setActiveIndex(index);
    },
    [images.length]
  );

  return {
    images,
    activeIndex,
    isLightboxOpen,

    changeIndex,
    openLightbox,
    closeLightbox,
  };
}
