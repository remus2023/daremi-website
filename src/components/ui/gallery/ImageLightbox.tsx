"use client";

import { useEffect, useRef, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

type ImageLightboxProps = {
  images: string[];
  activeIndex: number;
  isLightboxOpen: boolean;
  changeIndex: (index: number) => void;
  closeLightbox: () => void;
};

type LightboxImage = {
  src: string;
  width: number;
  height: number;
};

export function ImageLightbox({
  images,
  activeIndex,
  isLightboxOpen,
  changeIndex,
  closeLightbox,
}: ImageLightboxProps) {
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);
  const [items, setItems] = useState<LightboxImage[]>([]);

  // 1️⃣ Citim dimensiunile reale ale imaginilor
  useEffect(() => {
    let cancelled = false;

    Promise.all(
      images.map(
        (src) =>
          new Promise<LightboxImage>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () =>
              resolve({
                src,
                width: img.naturalWidth,
                height: img.naturalHeight,
              });
          })
      )
    ).then((result) => {
      if (!cancelled) setItems(result);
    });

    return () => {
      cancelled = true;
    };
  }, [images]);

  // 2️⃣ Inițializăm PhotoSwipe DOAR după ce avem dimensiuni corecte
  useEffect(() => {
    if (!items.length) return;

    if (lightboxRef.current) {
      lightboxRef.current.destroy();
      lightboxRef.current = null;
    }

    const lightbox = new PhotoSwipeLightbox({
      dataSource: items,
      closeOnVerticalDrag: true,
      bgOpacity: 0.8,
      imageClickAction: false,   // tap pe imagine → NU close
      tapAction: false,          // tap generic → NU face nimic
      bgClickAction: false,    // tap pe fundal → close
      showHideAnimationType: "fade",
      pswpModule: () => import("photoswipe"),
    });

    (lightbox as any).on("change", () => {
      const currIndex = lightbox.pswp?.currIndex;
      if (typeof currIndex === "number") {
        changeIndex(currIndex);
      }
    });

    (lightbox as any).on("close", () => {
      closeLightbox();
    });

    lightbox.init();
    lightboxRef.current = lightbox;

    return () => {
      lightbox.destroy();
      lightboxRef.current = null;
    };
  }, [items, changeIndex, closeLightbox]);

  // 3️⃣ Deschidem fără recalculări
  useEffect(() => {
    if (!lightboxRef.current || !items.length) return;

    if (isLightboxOpen) {
      lightboxRef.current.loadAndOpen(activeIndex);
    }
  }, [isLightboxOpen, activeIndex, items.length]);

  return null;
}
