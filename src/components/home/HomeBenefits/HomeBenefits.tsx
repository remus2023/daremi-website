"use client";

import { useEffect, useState } from "react";
import HomeBenefitsDesktop from "./HomeBenefitsDesktop";
import HomeBenefitsMobile from "./HomeBenefitsMobile";

const BREAKPOINT_MD = 900; // ← valoarea REALĂ din SCSS

export default function HomeBenefits() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [activeIndex, setActiveIndex] = useState(0); // 🔑 starea comună

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: 767px)`);

    const update = () => setIsMobile(mq.matches);
    update();

    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (isMobile === null) return null;

  return isMobile ? (
    <HomeBenefitsMobile
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    />
  ) : (
    <HomeBenefitsDesktop
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    />
  );
}
