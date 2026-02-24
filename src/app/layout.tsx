import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Adicionales from "@/components/layout/Adicionales";

const getMonserrat = Montserrat({
  variable: "--font-monserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://delriointernet.com.ar"),
  title: "Del Río Internet",
  description:
    "Del Río Internet es un proveedor de servicios de Internet en Mendoza, Argentina. Ofrecemos soluciones de conectividad de alta calidad para hogares y empresas, con Internet rápido, confiable y asequible, respaldado por soporte técnico local y un fuerte compromiso con la satisfacción del cliente.",
  keywords: [
    "Internet",
    "Internet Mendoza",
    "Del Río Internet",
    "ISP Mendoza",
    "internet Mendoza",
    "fibra óptica Mendoza",
    "internet hogar",
    "internet empresas",
    "proveedor de internet",
    "internet rural Mendoza",
    "internet alta velocidad",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Del Río Internet" }],
  publisher: "Del Río Internet",
  openGraph: {
    type: "website",
    locale: "es_AR",
    title: "Del Río Internet",
    description:
      "Proveedor de Internet por fibra óptica e inalámbrico en Mendoza. Conexión rápida, estable y con soporte local.",
    url: "https://delriointernet.com.ar",
    siteName: "Del Río Internet",
    images: [
      {
        url: "/og-default.png",
        width: 1536,
        height: 1024,
        alt: "Del Río Internet",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className={`${getMonserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />

        <Adicionales />
      </body>
    </html>
  );
}
