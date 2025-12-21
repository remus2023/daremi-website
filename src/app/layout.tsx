import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "@/styles/main.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

/* =========================
   FONT GLOBAL
========================= */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-primary",
});

/* =========================
   METADATA GLOBALĂ (FALLBACK)
========================= */
export const metadata: Metadata = {
  title: {
    default: "Daremi",
    template: "%s | Daremi",
  },
  description: "Mobilă la comandă – design premium, realizată pe măsură.",
  applicationName: "Daremi",
  authors: [{ name: "Daremi" }],
  generator: "Next.js",
  category: "furniture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={spaceGrotesk.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
