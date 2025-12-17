"use client";

import { useEffect, useState } from "react";
import Skeleton from "@/components/ui/Skeleton";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import HomeCategories from "@/components/home/HomeCategories/HomeCategories";

export default function HomeCategoriesWithSkeleton() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
    }, 800); // skeleton vizibil ~0.8s

    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div style={{ display: "flex", gap: 8 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} style={{ height: 220, flex: 1 }} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <RevealOnScroll>
      <HomeCategories />
    </RevealOnScroll>
  );
}
