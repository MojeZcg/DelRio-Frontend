import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const getMonserrat = Montserrat({
  variable: "--font-monserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Del Río Internet",
    template: "%s | Del Río Internet",
  },
  description:
    "Del Río Internet es un proveedor de servicios de Internet en Mendoza, Argentina. Ofrecemos soluciones de conectividad de alta calidad para hogares y empresas, con Internet rápido, confiable y asequible, respaldado por soporte técnico local y un fuerte compromiso con la satisfacción del cliente.",
  keywords: [
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
  openGraph: {
    type: "website",
    locale: "es_AR",
    title: "Del Río Internet",
    description:
      "Proveedor de Internet por fibra óptica e inalámbrico en Mendoza. Conexión rápida, estable y con soporte local.",
    url: "https://delriointernet.com.ar",
  },
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
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

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
