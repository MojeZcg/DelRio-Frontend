import Link from "next/link";

import { Check } from "lucide-react";

import PricingCards from "@/components/mainpage/PricingCardHogar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const metadata = {
  title: "Internet para tu hogar | DelRio Internet",
  description:
    "Disfruta en tu hogar de una conexión estable y veloz con Internet DelRio: planes simétricos ideales para streaming, videollamadas y gaming, con WiFi 6, soporte confiable e instalación profesional.",
  url: "https://delriointernet.com.ar/hogar",
  keywords: [
    "internet residencial en Pedriel",
    "internet residencial en Mendoza",
    "internet para el hogar en Mendoza",
    "fibra óptica hogar Mendoza",
    "wifi para casa en Mendoza",
  ],
  alternates: {
    canonical: "https://delriointernet.com.ar/hogar",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "DelRio Internet", url: "https://delriointernet.com.ar" }],
  publisher: "DelRio Internet",
};

function PricingCardsHogar() {
  return (
    <section className="w-full bg-gray-50 pt-10 pb-12">
      <div className="mx-auto">
        <h2 className="mb-14 text-center text-3xl font-bold text-gray-800">
          Planes Hogar
        </h2>

        <PricingCards />
      </div>
    </section>
  );
}

// 🧱 PAGE EXPORT
export default function InternetHogarPage() {
  const benefits = [
    { text: "Velocidades simétricas en todos los planes" },
    { text: "Soporte remoto con resolución rápida" },
    { text: "Instalación profesional incluida" },
    { text: "Wifi 6* con mejor cobertura y rendimiento" },
  ];

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white bg-linear-to-br from-(--delrio-medium) to-(--delrio-dark) pt-22">
      <section className="w-full bg-transparent py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold md:text-5xl">
            Internet Hogar DelRio
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Conectá tu hogar con velocidades simétricas,{" "}
            <HoverCard>
              <HoverCardTrigger className="inline text-yellow-200">
                WiFi 6*
              </HoverCardTrigger>
              <HoverCardContent className="max-w-72 text-sm leading-snug">
                Sujeto a{" "}
                <span className="font-semibold">
                  disponibilidad técnica y condiciones de red.
                </span>
              </HoverCardContent>
            </HoverCard>{" "}
            y soporte confiable. Elegí el plan que mejor se adapte a vos.
          </p>
          <Link
            title="Ver planes de Internet Hogar DelRio"
            href="#planes"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-blue-800 shadow-md transition-all hover:bg-blue-100"
          >
            Ver planes
          </Link>
        </div>
      </section>

      <PricingCardsHogar />

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-50">
            Beneficios del servicio DelRio Hogar
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-8 rounded-lg bg-gray-50 p-4 shadow-sm xl:justify-between"
              >
                <Check size={36} className="text-green-500" />
                <span className="text-sm font-medium text-gray-700">
                  {b.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8 text-center text-xs text-gray-300">
        <p className="">
          * La disponibilidad de la tecnologia WiFi 6 depende del equipo del
          cliente. Recomendamos verificar la compatibilidad de tus dispositivos
          para aprovechar esta tecnología.
        </p>
      </section>
    </main>
  );
}
