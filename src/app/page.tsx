import HeroImage from "@/components/mainpage/HeroImage";
import PricingCards from "@/components/mainpage/PricingCardHogar";
import Image from "next/image";
import Link from "next/link";

import { generateMetadata } from "@/lib/seo";
import { contactos } from "@/lib/contacto";
import { ArrowRight, LifeBuoy, ShieldCheck, Zap } from "lucide-react";
import EmpresasCarousel from "@/components/mainpage/EmpresasCarousel";

export const metadata = generateMetadata({
  title: "Internet por Fibra Óptica o Wireless | DelRio Internet",
  description:
    "Conéctate al mundo sin límites con Internet DelRio: planes de alta velocidad simétrica, tecnología WiFi 6, soporte técnico confiable y una instalación profesional pensada para tu comodidad.",
  url: "https://delriointernet.com.ar/",
  alternates: {
    canonical: "https://delriointernet.com.ar/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [{ name: "DelRio Internet", url: "https://delriointernet.com.ar" }],
  publisher: "DelRio Internet",
  keywords: [
    "internet en Pedriel",
    "internet en Mendoza",
    "proveedor de internet en Pedriel",
    "proveedor de internet en Mendoza",
    "internet fibra óptica Mendoza",
    "internet de alta velocidad Mendoza",
  ],
});

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-22">
      {/* === HERO === */}
      <div className="fixed inset-0 -z-10">
        {/* Fondo principal */}
        <Image
          title="Fondo principal Delrio Internet"
          src="/bg.webp"
          alt="Fondo principal DelRio"
          fill
          className="object-cover will-change-transform"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Texto + Imagen lateral */}
      <section className="min-h-xl flex h-120 w-full flex-col items-center justify-center md:flex-row lg:h-150 xl:gap-20 2xl:gap-32">
        <div className="flex max-w-xl flex-col items-center gap-10 text-center text-white md:items-start lg:gap-14">
          <div className="flex flex-col items-center gap-6 md:items-start md:text-left lg:gap-3">
            <h1 className="text-5xl leading-tight font-bold">
              Tu{" "}
              <span className="bg-linear-to-r from-(--delrio-light) via-(--delrio-medium) to-(--delrio-dark) bg-clip-text text-transparent">
                conexión
              </span>{" "}
              al mundo, más humana que nunca.
            </h1>
            <p className="max-w-sm text-sm text-white md:text-lg lg:max-w-full">
              Conectamos tu hogar con la velocidad y estabilidad que merecés.
            </p>
          </div>

          <Link
            title="Comprobar disponibilidad"
            target="_blank"
            href={`${contactos.comercial.whatsapp}?text=${encodeURIComponent("Hola! Quiero consultar sobre la disponibilidad de los servicios en mi zona.")}`}
            className="mb-10 flex h-12 items-center rounded-lg bg-linear-to-r from-(--delrio-medium) to-(--delrio-dark) px-6 text-base font-medium ring-2 transition-all duration-500 hover:bg-[#5846e8] hover:shadow-lg hover:shadow-white/30 md:px-32"
          >
            Comprueba la disponibilidad{" "}
            <span className="hidden pl-1 md:inline"> en tu zona</span>
          </Link>
        </div>

        {/* Imagen ilustrativa lateral */}
        <HeroImage />
      </section>

      {/* === PLANES HOGAR === */}
      <section
        id="planes"
        className="-z-10 flex scroll-mt-24 flex-col items-center justify-center bg-white pb-12 text-black"
      >
        <h2 className="pt-10 pb-6 text-center text-3xl font-semibold lg:pb-14">
          Conocé nuestros planes diseñados para ti
        </h2>

        <PricingCards />
      </section>

      {/* === DIFERENCIADORES === */}
      <section className="bg-linear-to-r from-(--delrio-medium) to-(--delrio-dark) py-10 text-center text-white lg:py-14">
        <h3 className="mb-6 text-3xl font-semibold">¿Por qué elegir DelRio?</h3>
        <div className="flex flex-wrap justify-center gap-6 text-base lg:gap-10">
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

      <section className="relative overflow-hidden border-y bg-linear-to-br from-slate-800 to-black py-12 text-white md:py-20">
        <div className="px-4 pb-4 md:px-6">
          <div className="text-center">
            <h4 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">
              Internet para Empresas
            </h4>
            <p className="mx-auto mb-8 max-w-3xl px-2 text-base text-blue-100 md:mb-10 md:text-lg">
              <span className="md:hidden">
                Conexiones dedicadas y soporte prioritario para tu empresa.
              </span>
              <span className="hidden md:inline">
                Potenciá tu negocio con conexiones dedicadas, velocidades
                simétricas garantizadas y soporte técnico prioritario diseñado
                para empresas que no pueden esperar.
              </span>
            </p>
          </div>

          {/* Beneficios clave */}
          <div className="mx-auto mb-12 grid max-w-7xl gap-6 px-4 md:mb-16 md:grid-cols-3 md:gap-8">
            <Link
              title="Velocidad Simétrica DelRio Internet"
              href="/empresas"
              className="group rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/15 md:p-8"
            >
              <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-950 transition group-hover:bg-blue-800 md:mb-4 md:h-16 md:w-16">
                <Zap size={26} className="md:h-7.5 md:w-7.5" />
              </div>
              <h5 className="mb-2 text-lg font-bold md:mb-3 md:text-xl">
                Velocidad Simétrica
              </h5>
              <p className="text-sm leading-relaxed text-blue-100">
                Misma velocidad de subida y bajada, ideal para
                videoconferencias, transferencias de archivos y operaciones en
                la nube.
              </p>
            </Link>

            <Link
              title="Soporte Técnico Prioritario DelRio Internet"
              href="/empresas"
              className="group rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/15 md:p-8"
            >
              <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-950 transition group-hover:bg-blue-800 md:mb-4 md:h-16 md:w-16">
                <LifeBuoy size={26} className="md:h-7.5 md:w-7.5" />
              </div>
              <h5 className="mb-2 text-lg font-bold md:mb-3 md:text-xl">
                Soporte Prioritario
              </h5>
              <p className="text-sm leading-relaxed text-blue-100">
                Atención técnica dedicada con resolución garantizada en menos de
                24 horas y canal directo de comunicación.
              </p>
            </Link>

            <Link
              title="SLA Garantizado DelRio Internet"
              href="/empresas"
              className="group rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/15 md:p-8"
            >
              <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-950 transition group-hover:bg-blue-800 md:mb-4 md:h-16 md:w-16">
                <ShieldCheck size={26} className="md:h-7.5 md:w-7.5" />
              </div>
              <h5 className="mb-2 text-lg font-bold md:mb-3 md:text-xl">
                SLA Garantizado
              </h5>
              <p className="text-sm leading-relaxed text-blue-100">
                Acuerdos de nivel de servicio con tiempo de actividad
                garantizado y compensaciones en caso de incumplimiento.
              </p>
            </Link>
          </div>

          {/* Empresas que confían */}
          <div className="mb-8 md:mb-6">
            <div className="mb-6 px-2 text-center md:mb-4 md:px-4">
              <h5 className="mb-2 text-sm font-semibold tracking-wider text-blue-400 uppercase lg:text-base">
                Empresas que confían en nosotros
              </h5>
              <p className="mx-auto max-w-3xl text-lg font-semibold text-white md:text-xl lg:text-2xl">
                Conectamos a las empresas que impulsan el desarrollo de nuestra
                región.
              </p>
            </div>
            <EmpresasCarousel />
          </div>

          {/* CTA */}
          <div className="px-4 text-center">
            <Link
              href="/empresas"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-950 shadow-lg transition-all hover:bg-blue-50 hover:shadow-2xl hover:shadow-blue-500/30 md:gap-3 md:px-10 md:py-4 md:text-base lg:text-[16.5px]"
              title="Conocé más sobre nuestros planes empresariales"
            >
              <span className="hidden sm:inline">
                Conocé más sobre nuestros planes empresariales
              </span>
              <span className="sm:hidden">Ver planes empresariales</span>
              <ArrowRight
                size={22}
                className="transition-transform group-hover:translate-x-2 md:h-7 md:w-7"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center bg-linear-to-t from-(--delrio-medium) to-(--delrio-dark) py-16 text-center text-white backdrop-blur-md">
        <h4 className="max-w-sm text-lg font-semibold md:text-2xl lg:max-w-full">
          Más que una conexión, impulsamos tu manera de vivir el mundo digital.
        </h4>
      </section>

      {/* === SOBRE NOSOTROS === */}
      <section id="sobre-nosotros" className="bg-gray-50 text-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
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

            <div className="mt-10 grid gap-6 md:grid-cols-3 lg:gap-16">
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
            title="Hablemos de tu conexión"
            target="_blank"
            href={`${contactos.comercial.whatsapp}?text=${encodeURIComponent("Hola! Me gustaria conocer sobre los planes de internet")}`}
            className="inline-block rounded-lg bg-white px-8 py-3 font-medium text-(--delrio-medium) transition hover:bg-blue-100"
          >
            Hablemos de tu conexión
          </Link>
        </div>
      </section>
    </main>
  );
}
