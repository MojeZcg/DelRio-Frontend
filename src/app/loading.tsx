// app/loading.tsx

import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Internet Hogar DelRio | Recargando...",
  description:
    "Conectá tu hogar con Internet DelRio: planes simétricos, WiFi 6, soporte confiable e instalación profesional.",
  url: "https://delriointernet.com.ar/",
  keywords: [
    "internet",
    "fibra óptica",
    "delrio",
    "delrio internet",
    "50 Mbps",
    "100 Mbps",
    "300 Mbps",
    "internet hogar",
    "proveedores de internet",
    "planes de internet",
  ],
});

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#070714]">
      <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-solid border-white"></div>
    </div>
  );
}
