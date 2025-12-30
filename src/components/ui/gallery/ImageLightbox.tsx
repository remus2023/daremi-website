"use client";

import { useEffect, useRef } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

type ImageLightboxProps = {
  images: string[];
  activeIndex: number;
  isLightboxOpen: boolean;
  changeIndex: (index: number) => void;
  closeLightbox: () => void;
};

export function ImageLightbox({
  images,
  activeIndex,
  isLightboxOpen,
  changeIndex,
  closeLightbox,
}: ImageLightboxProps) {
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const lightbox = new PhotoSwipeLightbox({
      dataSource: images.map((src) => ({
        src,
        width: 2000,
        height: 1400,
      })),
      closeOnVerticalDrag: true,
      showHideAnimationType: "fade",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.on("change", () => {
      const currIndex = lightbox.pswp?.currIndex;
      if (typeof currIndex === "number") {
        changeIndex(currIndex);
      }
    });

    lightbox.on("close", () => {
      closeLightbox();
    });

    lightbox.init();

    /* 🔴 CHEIA LIPSĂ – DESCHIDEREA EFECTIVĂ */
    lightbox.loadAndOpen(activeIndex);

    lightboxRef.current = lightbox;

    return () => {
      lightbox.destroy();
      lightboxRef.current = null;
    };
  }, [
    images,
    activeIndex,
    isLightboxOpen,
    changeIndex,
    closeLightbox,
  ]);

  return null;
}
