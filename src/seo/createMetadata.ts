import type { Metadata } from "next";

type CreateMetadataProps = {
  title: string;
  description: string;
  url: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  url,
  image = "https://www.daremi.ro/og/home.jpg",
}: CreateMetadataProps): Metadata {
  return {
    title,
    description,

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "website",
      locale: "ro_RO",
      url,
      siteName: "Daremi",
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}