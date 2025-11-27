import Link from "next/link";

import { Check } from "lucide-react";

import PricingCards from "@/components/mainpage/PricingCardHogar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function PricingCardsHogar() {
  return (
    <section id="planes" className="w-full scroll-mt-24 bg-gray-50 pt-10 pb-12">
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
    { text: "WiFi 6 con mejor cobertura y rendimiento" },
  ];

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white bg-linear-to-br from-(--delrio-medium) to-(--delrio-dark) pt-24">
      <section className="w-full bg-transparent py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold md:text-5xl">
            Internet Hogar DelRio
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Conectá tu hogar con velocidades simétricas,{" "}
            <HoverCard>
              <HoverCardTrigger className="inline text-yellow-200">
                WiFi 6
              </HoverCardTrigger>
              <HoverCardContent className="max-w-[260px] text-sm leading-snug">
                Sujeto a{" "}
                <strong>disponibilidad técnica y condiciones de red.</strong>
              </HoverCardContent>
            </HoverCard>{" "}
            y soporte confiable. Elegí el plan que mejor se adapte a vos.
          </p>
          <Link
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
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
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

      <footer className="pb-8 text-center text-xs text-gray-200">
        * Las velocidades indicadas son máximas teóricas. Se garantiza un mínimo
        del 60 % del ancho de banda contratado, sujeto a disponibilidad técnica
        y condiciones de red.
      </footer>
    </main>
  );
}
