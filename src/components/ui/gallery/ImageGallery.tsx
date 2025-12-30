"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type ImageGalleryProps = {
  images: string[];
  activeIndex: number;
  changeIndex: (index: number) => void;
  openLightbox: (index?: number) => void;
};

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

  /**
   * Sync: Embla → state
   */
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      changeIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, changeIndex]);

  /**
   * Sync: state → Embla
   */
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

      {/* Main gallery */}
      <div className="image-gallery__viewport" ref={emblaRef}>
        <div className="image-gallery__container">
          {images.map((src, index) => (
            <div
              className="image-gallery__slide"
              key={index}
              onClick={() => openLightbox(activeIndex)}
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

      {/* Thumbnails */}
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
