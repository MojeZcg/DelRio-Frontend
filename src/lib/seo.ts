import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string[];
  alternates?: {
    canonical?: string;
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
  authors?: Array<{ name: string; url?: string }>;
  publisher?: string;
}

export function generateMetadata({
  title,
  description,
  url = "https://delriointernet.com.ar",
  image = "https://delriointernet.com.ar/og-default.png",
  keywords = [],
  alternates,
  robots,
  authors,
  publisher,
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords,
    ...(alternates && { alternates }),
    ...(robots && { robots }),
    ...(authors && { authors }),
    ...(publisher && { publisher }),
    openGraph: {
      title,
      description,
      url,
      siteName: "DelRio",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
