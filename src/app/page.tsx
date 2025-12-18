import HeroImage from "@/components/mainpage/HeroImage";
import PricingCardsEmpresas from "@/components/mainpage/PricingCardEmpresas";
import PricingCards from "@/components/mainpage/PricingCardHogar";
import Image from "next/image";
import Link from "next/link";

import { generateMetadata } from "@/lib/seo";
import { contactos } from "@/lib/contacto";

export const metadata = generateMetadata({
  title: "DelRio Internet | Conectate con el mundo",
  description:
    "Conectate al mundo con Internet DelRio: planes simétricos, WiFi 6, soporte confiable e instalación profesional.",
  url: "https://delriointernet.com.ar/",
  keywords: [
    "internet",
    "fibra óptica",
    "internet hogar",
    "internet empresas",
    "planes de internet hogar",
    "planes de internet empresas",
    "proveedores de internet",
    "delrio",
    "delrio internet",
    "planes de internet",
  ],
});

export default function Home() {
  const comercial = process.env.COMERCIAL;

  return (
    <main className="overflow-x-hidden pt-24">
      {/* === HERO === */}
      <div className="fixed inset-0 -z-10">
        {/* Fondo principal */}
        <Image
          src="/bg.webp"
          alt="Fondo principal DelRio"
          fill
          className="object-cover will-change-transform"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Texto + Imagen lateral */}
      <div className="min-h-xl flex h-150 w-full flex-col items-center justify-center md:flex-row xl:gap-20 2xl:gap-32">
        <div className="flex max-w-xl flex-col items-center gap-14 text-center text-white md:items-start">
          <div className="flex flex-col items-center gap-3 md:items-start md:text-left">
            <h1 className="text-5xl leading-tight font-bold">
              Tu{" "}
              <span className="bg-linear-to-r from-(--delrio-light) via-(--delrio-medium) to-(--delrio-dark) bg-clip-text text-transparent">
                conexión
              </span>{" "}
              al mundo, más humana que nunca.
            </h1>
            <p className="max-w-sm text-sm text-gray-200 md:text-lg lg:max-w-full">
              Conectamos tu hogar con la velocidad y estabilidad que merecés.
            </p>
          </div>

          <Link
            target="_blank"
            href={`${contactos.comercial.whatsapp}?text=${encodeURIComponent("Hola! Quiero consultar sobre la disponibilidad de sus servicios en mi zona.")}`}
            className="flex h-12 items-center rounded-lg bg-linear-to-r from-(--delrio-medium) to-(--delrio-dark) px-6 text-base font-medium ring-2 transition-all duration-500 hover:bg-[#5846e8] hover:shadow-lg hover:shadow-white/30 md:px-32"
          >
            Comprueba la disponibilidad{" "}
            <span className="hidden pl-1 md:inline"> en tu zona</span>
          </Link>
        </div>

        {/* Imagen ilustrativa lateral */}
        <HeroImage />
      </div>

      {/* === PLANES HOGAR === */}
      <section
        id="planes"
        className="-z-10 flex scroll-mt-24 flex-col items-center justify-center bg-white text-black"
      >
        <h2 className="pt-10 pb-14 text-center text-3xl font-semibold">
          Conocé nuestros planes diseñados para ti
        </h2>

        <PricingCards />

        <p className="max-w-sm pt-10 pb-12 text-center text-xs text-gray-800 md:max-w-2xl md:text-sm xl:max-w-7xl">
          Hasta{" "}
          <span className="bg-linear-to-r from-(--delrio-light) via-(--delrio-medium) to-(--delrio-dark) bg-clip-text text-transparent">
            300 Mbps
          </span>{" "}
          con WiFi 6, conexión estable y soporte prioritario. Accedé a series,
          películas y descuentos exclusivos, con cámaras de seguridad en
          comodato e IP fija para mayor control. Las velocidades indicadas son
          máximas teóricas. Se garantiza un mínimo del 60 % del ancho de banda
          contratado, sujeto a disponibilidad técnica y condiciones de red.
        </p>
      </section>

      {/* === DIFERENCIADORES === */}
      <section className="bg-linear-to-r from-(--delrio-medium) to-(--delrio-dark) py-20 text-center text-white">
        <h3 className="mb-10 text-3xl font-semibold">
          ¿Por qué elegir DelRio?
        </h3>
        <div className="flex flex-wrap justify-center gap-10 text-lg">
          <div className="max-w-xs">
            <p className="font-bold">Atención Personalizada</p>
            <p className="text-white/80">
              Soporte humano y asistencia técnica directa, sin bots ni esperas.
            </p>
          </div>
          <div className="max-w-xs">
            <p className="font-bold">Infraestructura Propia</p>
            <p className="text-white/80">
              Control total de red para garantizar estabilidad y rendimiento.
            </p>
          </div>
          <div className="max-w-xs">
            <p className="font-bold">Soporte Humano</p>
            <p className="text-white/80">
              Soporte técnico rápido y eficiente con personal capacitado.
            </p>
          </div>
        </div>
      </section>

      {/* === PLANES EMPRESAS === */}
      <section
        id="planesempresas"
        className="flex scroll-mt-24 flex-col items-center justify-center bg-white text-black"
      >
        <h3 className="py-12 text-center text-3xl font-semibold">
          Planes para empresas que impulsan tu negocio
        </h3>

        <PricingCardsEmpresas />

        <p className="max-w-2xl py-10 text-center text-sm lg:max-w-4xl">
          Soluciones de internet empresarial desde{" "}
          <span className="bg-linear-to-r from-(--delrio-light) via-(--delrio-medium) to-(--delrio-dark) bg-clip-text text-transparent">
            300 Mbps
          </span>{" "}
          con instalación profesional, ademas con beneficios full podes optar a
          soporte técnico prioritario y IP fija. Ideal para mantener tu negocio
          siempre conectado y eficiente.
        </p>
      </section>

      <section className="flex flex-col items-center bg-linear-to-t from-(--delrio-medium) to-(--delrio-dark) py-20 text-center text-white backdrop-blur-md">
        <h4 className="mb-4 max-w-sm text-lg font-semibold md:text-2xl lg:max-w-full">
          Más que una conexión, impulsamos tu manera de vivir el mundo digital.
        </h4>
      </section>

      {/* === SOBRE NOSOTROS === */}
      <section id="sobre-nosotros" className="bg-gray-50 text-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="pb-6 text-center text-4xl font-bold">
            Sobre <span className="text-(--delrio-light)">Nosotros</span>
          </h2>

          <div className="space-y-12">
            <div className="text-center">
              <p className="mx-auto max-w-4xl text-lg leading-relaxed">
                En <strong>DelRio Internet</strong> unimos tecnología y cercanía
                para que cada hogar mendocino disfrute de una conexión estable,
                rápida y confiable. Nacimos en <strong>Luján de Cuyo</strong> y,
                desde hace más de seis años, conectamos familias, empresas y
                personas con atención personalizada y soporte real.
              </p>
            </div>

            <div className="mt-10 grid gap-12 md:grid-cols-3 lg:gap-16">
              <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
                <h3 className="mb-3 text-2xl font-semibold text-(--delrio-light)">
                  Visión
                </h3>
                <p>
                  Ser la empresa de conectividad referente en{" "}
                  <strong>Mendoza</strong>, reconocida por la calidad de su
                  servicio, la innovación constante y la cercanía con sus
                  clientes.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
                <h3 className="mb-3 text-2xl font-semibold text-(--delrio-light)">
                  Valores
                </h3>
                <ul className="list-inside list-disc space-y-1 text-gray-700">
                  <li>Atención humana mas cercana que nunca</li>
                  <li>Calidad y confiabilidad en cada conexión</li>
                  <li>Soporte rápido y eficiente</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
                <h3 className="mb-3 text-2xl font-semibold text-(--delrio-light)">
                  Misión
                </h3>
                <p>
                  Brindar internet de alta calidad con un trato personalizado,
                  asegurando conexiones estables, rápidas y confiables para cada
                  hogar mendocino.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === NUEVO CIERRE VISUAL === */}
        <div className="flex flex-col items-center justify-center bg-linear-to-b from-(--delrio-medium) to-(--delrio-dark) py-16 text-center text-white">
          <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
            Conectamos personas, lugares y oportunidades.
          </h3>
          <p className="mb-6 px-10 text-white md:p-0">
            En cada rincón de Mendoza, llevamos más que internet: llevamos
            conexión, confianza.
          </p>
          <Link
            target="_blank"
            href={`${contactos.comercial.whatsapp}?text=${encodeURIComponent("Hola! Quiero hablar con ustedes sobre sus planes de internet")}`}
            className="inline-block rounded-lg bg-white px-8 py-3 font-medium text-(--delrio-medium) transition hover:bg-blue-100"
          >
            Hablemos de tu conexión
          </Link>
        </div>
      </section>
    </main>
  );
}
