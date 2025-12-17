"use client";

import { useEffect, useState } from "react";

export default function SkeletonDemo() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000); // 2 secunde vizibil
    return () => clearTimeout(t);
  }, []);

  const shimmerStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
    transform: "translateX(-100%)",
    animation: "shimmer 1.3s infinite",
  };

  const skeletonBase: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    background: "#e5e7eb",
    borderRadius: 10,
  };

  return (
    <>
      {/* keyframes inline */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

      <section
        style={{
          padding: 48,
          background: "#f9fafb",
          minHeight: "100vh",
        }}
      >
        <h2 style={{ marginBottom: 24 }}>Skeleton demo (inline styles)</h2>

        {loading ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: 16,
                }}
              >
                {/* media */}
                <div
                  style={{
                    ...skeletonBase,
                    height: 140,
                    marginBottom: 16,
                  }}
                >
                  <div style={shimmerStyle} />
                </div>

                {/* line 1 */}
                <div
                  style={{
                    ...skeletonBase,
                    height: 14,
                    marginBottom: 10,
                  }}
                >
                  <div style={shimmerStyle} />
                </div>

                {/* line 2 */}
                <div
                  style={{
                    ...skeletonBase,
                    height: 14,
                    width: "65%",
                  }}
                >
                  <div style={shimmerStyle} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: 16,
                }}
              >
                <div
                  style={{
                    height: 140,
                    borderRadius: 10,
                    background: "#d1d5db",
                    marginBottom: 16,
                  }}
                />
                <h3 style={{ marginBottom: 8 }}>Card {i + 1}</h3>
                <p style={{ color: "#4b5563" }}>Conținut real după skeleton.</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
