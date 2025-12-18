import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { generateMetadata } from "@/lib/seo";
import { contactos } from "@/lib/contacto";

export const metadata = generateMetadata({
  title: "DelRio Internet | Tu mejor opción en Internet para Empresas",
  description:
    "Conectá tu Empresa con Internet DelRio: SLA garantizado, soporte confiable e instalación profesional.",
  url: "https://delriointernet.com.ar/empresas",
  keywords: [
    "delrio",
    "delrio internet",
    "internet",
    "fibra óptica",
    "50 Mbps",
    "100 Mbps",
    "300 Mbps",
    "internet dedicado",
    "planes de internet",
    "internet empresas",
    "planes de internet empresas",
    "proveedores de internet",
  ],
});

const planesBusiness = [
  {
    title: "Velocidades simétricas garantizadas",
    desc: "Mantené el mismo rendimiento tanto en carga como en descarga, sin reservas ocultas.",
  },
  {
    title: "Soporte técnico permanente",
    desc: "Atención directa y resolución de incidencias en menos de 24 horas hábiles, con seguimiento personalizado de cada caso.",
  },
  {
    title: "Instalación profesional",
    desc: "Incluye equipos ONU Wi-Fi 6 y cableado preconectorizado para una conexión más limpia y estable.",
  },
  {
    title: "Facturación flexible",
    desc: "Adaptá tus condiciones comerciales con facturación electrónica y opciones ajustadas a tu negocio.",
  },
  {
    title: "Atención prioritaria",
    desc: "Canales exclusivos de contacto comercial y técnico para respuestas inmediatas ante cualquier necesidad.",
  },
];

const planesFull = [
  {
    title: "Ancho de banda exclusivo",
    desc: "Cada empresa dispone de una conexión totalmente dedicada, garantizando disponibilidad continua 24/7 y rendimiento constante.",
  },
  {
    title: "Instalación con equipamiento profesional",
    desc: "Se provee una ONU Bridge y fibra fusionada directamente, asegurando mínima pérdida de señal y escalabilidad.",
  },
  {
    title: "Monitoreo y soporte proactivo",
    desc: "Supervisamos tu conexión en tiempo real para detectar y resolver incidencias antes de que afecten tu servicio.",
  },
  {
    title: "Contratos personalizados",
    desc: "Ofrecemos acuerdos adaptados a cada cliente corporativo según sus objetivos y tamaño.",
  },
  {
    title: "Atención ejecutiva exclusiva",
    desc: "Cada cuenta tiene un ejecutivo asignado para atención prioritaria y coordinación técnica.",
  },
];

export default function EmpresasPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black/50 pt-24 text-white md:bg-transparent">
      {/* 🌆 Fondo fijo con overlay */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/empresa.webp"
          alt="Fondo empresarial"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* 🧭 Contenido principal */}
      <section className="z-10 flex flex-col items-center justify-center px-6 pt-52 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Internet para Empresas
        </h1>
        <h2 className="mb-6 text-lg font-light text-white md:text-xl">
          Conectividad dedicada, soporte prioritario y máxima estabilidad para
          tu negocio.
        </h2>

        <Link
          href={`${contactos.comercial.whatsapp}?text=${encodeURIComponent("Hola! Quiero consultar sobre los planes de internet para empresas.")}`}
          className="group mt-4 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-(--delrio-light) to-(--delrio-medium) px-8 py-3 font-semibold text-white shadow-md transition-all hover:from-blue-700 hover:to-blue-900 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
        >
          Contactar asesor comercial
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>

      <section className="z-10 mx-auto mt-16 w-full px-4 py-16 text-gray-100 sm:px-6">
        <h3 className="mb-12 text-center text-3xl font-semibold text-white lg:text-4xl">
          Soluciones de Conectividad para Empresas
        </h3>

        {/* === Contenedor principal responsive === */}
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch xl:gap-10">
          {/* === PLAN BUSINESS === */}
          <div className="flex max-w-2xl flex-col rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-md transition hover:bg-white/15 sm:p-10">
            <h4 className="mb-4 text-center text-2xl font-bold text-blue-400 sm:text-3xl lg:text-left">
              Business — Conectividad para empresas
            </h4>
            <p className="mb-8 text-center text-sm leading-relaxed text-gray-300 sm:text-base lg:text-left">
              Ideal para empresas que necesitan un servicio estable, rápido y
              balanceado entre subida y bajada, con soporte ágil y una gestión
              comercial flexible.
            </p>

            {/* Contenido que crece */}
            <div className="flex-1 space-y-8.5 text-left">
              {planesBusiness.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="mt-2 h-6 w-6 shrink-0 text-green-400" />
                  <div>
                    <h5 className="text-base font-semibold text-white sm:text-lg">
                      {item.title}
                    </h5>
                    <p className="text-xs text-gray-200">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón pegado abajo */}
            <div className="mt-auto flex justify-center">
              <Link
                href={`${contactos.comercial.whatsapp}?text=${encodeURIComponent("Hola! Quiero consultar sobre los planes de internet para empresas.")}`}
                className="mt-10 inline-block w-full rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white shadow-md transition-all duration-200 hover:bg-(--delrio-medium) focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black focus:outline-none sm:w-auto xl:min-w-lg"
              >
                Consultar planes
              </Link>
            </div>
          </div>

          {/* === PLAN BUSINESS FULL === */}
          <div className="flex max-w-2xl flex-col rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-md transition hover:bg-white/15 sm:p-10">
            <h4 className="mb-4 text-center text-2xl font-bold text-blue-700 sm:text-3xl lg:text-left">
              Business Full — Conectividad Dedicada
            </h4>
            <p className="mb-8 text-center text-sm leading-relaxed text-gray-300 sm:text-base lg:text-left">
              Diseñado para empresas que requieren disponibilidad total y máxima
              velocidad. Ideal para oficinas con alto tráfico de datos o
              servicios críticos.
            </p>

            <div className="flex-1 space-y-8 text-left">
              {planesFull.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="mt-2 h-6 w-6 shrink-0 text-green-400" />
                  <div>
                    <h5 className="text-base font-semibold text-white sm:text-lg">
                      {item.title}
                    </h5>
                    <p className="text-xs text-gray-200">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón pegado abajo */}
            <div className="mt-auto flex justify-center">
              <Link
                href={`${contactos.comercial.whatsapp}?text=${encodeURIComponent("Hola! Quiero consultar sobre los planes de internet para empresas.")}`}
                className="mt-10 inline-block w-full rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white shadow-md transition-all duration-200 hover:bg-(--delrio-medium) focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black focus:outline-none sm:w-auto xl:min-w-lg"
              >
                Consultar planes
              </Link>
            </div>
          </div>
        </div>

        {/* === Divider === */}
        <Separator className="mx-auto my-16 max-w-6xl bg-white/20" />

        <p className="mx-auto mt-10 max-w-5xl text-center text-sm text-gray-100 sm:text-base">
          Todos nuestros servicios están diseñados para acompañar el crecimiento
          de tu empresa, garantizando conectividad estable, atención prioritaria
          y un compromiso real con tu operación diaria.
        </p>
      </section>
    </main>
  );
}
