"use client";

import { useEffect, useCallback, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type ImageGalleryProps = {
  images: string[];
  activeIndex: number;
  changeIndex: (index: number) => void;
  openLightbox: (index?: number) => void;
};

// 🔹 helper preload
function preloadImage(src: string) {
  const img = new window.Image();
  img.src = src;
}

export function ImageGallery({
  images,
  activeIndex,
  changeIndex,
  openLightbox,
}: ImageGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Guard: prevenim "click after drag"
  const pointerDownPosRef = useRef<{ x: number; y: number } | null>(null);
  const didDragRef = useRef(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();

      changeIndex(index);
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());

      // ✅ PRELOAD INTELIGENT: next + prev
      if (images[index + 1]) preloadImage(images[index + 1]);
      if (images[index - 1]) preloadImage(images[index - 1]);
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, changeIndex, images]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(activeIndex);
  }, [emblaApi, activeIndex]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const handleThumbClick = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    pointerDownPosRef.current = { x: e.clientX, y: e.clientY };
    didDragRef.current = false;
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const start = pointerDownPosRef.current;
    if (!start) return;

    const dx = Math.abs(e.clientX - start.x);
    const dy = Math.abs(e.clientY - start.y);

    if (dx > 6 || dy > 6) {
      didDragRef.current = true;
    }
  }, []);

  const onPointerUpOrCancel = useCallback(() => {
    pointerDownPosRef.current = null;
  }, []);

  const handleOpen = useCallback(() => {
    if (didDragRef.current) return;
    openLightbox(activeIndex);
  }, [openLightbox, activeIndex]);

  return (
    <div className="image-gallery">
      {/* Arrows (desktop only via CSS) */}
      {canScrollPrev && (
        <button
          type="button"
          className="image-gallery__arrow image-gallery__arrow--prev"
          onClick={scrollPrev}
          aria-label="Previous image"
        >
          ‹
        </button>
      )}

      {canScrollNext && (
        <button
          type="button"
          className="image-gallery__arrow image-gallery__arrow--next"
          onClick={scrollNext}
          aria-label="Next image"
        >
          ›
        </button>
      )}

      <div className="image-gallery__viewport" ref={emblaRef}>
        <div className="image-gallery__container">
          {images.map((src, index) => (
            <div
              className="image-gallery__slide"
              key={index}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUpOrCancel}
              onPointerCancel={onPointerUpOrCancel}
              onClick={handleOpen}
            >
              <Image
                src={src}
                alt=""
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 70vw"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <div className="image-gallery__thumbs">
          {images.map((src, index) => (
            <button
              key={index}
              type="button"
              className={`image-gallery__thumb ${
                index === activeIndex ? "is-active" : ""
              }`}
              onClick={() => handleThumbClick(index)}
            >
              <Image src={src} alt="" width={72} height={72} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
