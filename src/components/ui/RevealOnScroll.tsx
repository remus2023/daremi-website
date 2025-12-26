"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function RevealOnScroll({ children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -200px 0px",
        threshold: 0,
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      <div
        className={`reveal__inner ${
          visible ? "reveal__inner--visible" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
