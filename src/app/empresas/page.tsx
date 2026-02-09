import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  FlaskConical,
  Info,
  LifeBuoy,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { contactos } from "@/lib/contacto";
import EmpresasCarousel from "@/components/mainpage/EmpresasCarousel";

export const metadata = {
  title: "Internet para Empresas | DelRio Internet",
  description:
    "Impulsa tu negocio con Internet DelRio: soluciones de conectividad empresarial con alta velocidad simétrica, máxima estabilidad, WiFi 6 y soporte técnico especializado para que tu empresa nunca se detenga.",
  url: "https://delriointernet.com.ar/empresas",
  keywords: [
    "internet empresarial en Mendoza",
    "internet para empresas en Pedriel",
    "fibra óptica empresarial Mendoza",
    "internet dedicado Mendoza",
    "internet simétrico empresas Mendoza",
  ],
  alternates: {
    canonical: "https://delriointernet.com.ar/empresas",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "DelRio Internet", url: "https://delriointernet.com.ar" }],
  publisher: "DelRio Internet",
};

const planesBusiness = [
  {
    title: "Velocidades simétricas garantizadas",
    desc: "Mantené el mismo rendimiento tanto en carga como en descargas.",
  },
  {
    title: "Soporte técnico permanente",
    desc: "Atención directa y resolución de incidencias en un máximo de 24 horas hábiles, con seguimiento personalizado de cada caso.",
  },
  {
    title: "Instalación profesional",
    desc: "Incluye equipos ONU Wi-Fi 5, fusion de fibra, roseta y patchcord para una conexión más limpia y estable.",
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
    title: "Ancho de banda Dedicado",
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
    title: "Contratos de Servicio personalizados",
    desc: "Ofrecemos SLA adaptados a cada cliente corporativo según los objetivos y necesidades de su empresa.",
  },
  {
    title: "Atención ejecutiva exclusiva",
    desc: "Cada cuenta tiene un ejecutivo asignado para atención prioritaria y coordinación técnica.",
  },
];

export default function EmpresasPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black/50 pt-22 text-white md:bg-transparent">
      {/* 🌆 Fondo fijo con overlay */}
      <div className="fixed inset-0 -z-10">
        <Image
          title="Fondo Empresarial DelRio Internet"
          src="/empresa.webp"
          alt="Fondo empresarial"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* 🧭 Contenido principal */}
      <section className="relative z-10 w-full px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto grid max-w-336 gap-12 py-6 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Columna izquierda - Contenido */}
          <div className="text-center lg:text-left">
            <div className="mb-2 inline-block rounded-full bg-blue-500/20 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-semibold text-blue-300">
                Soluciones Corporativas
              </span>
            </div>

            <h1 className="mb-4 text-[34px] leading-tight font-black text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Conectividad{" "}
              <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Empresarial
              </span>{" "}
              de Alto Rendimiento
            </h1>

            <p className="mb-6 text-sm leading-relaxed text-gray-300 md:text-lg lg:text-sm">
              Impulsamos el crecimiento de tu empresa con infraestructura de red
              dedicada, velocidades simétricas garantizadas y soporte técnico
              disponible las 24 horas.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <Link
                target="_blank"
                href={`${contactos.comercial.whatsapp}?text=${encodeURIComponent("Hola! Necesito información sobre los planes empresariales.")}`}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 bg-linear-to-r from-blue-600 to-blue-700 px-8 py-4 font-bold text-white shadow-2xl shadow-blue-500/30 transition-all hover:scale-105 hover:from-blue-500 hover:to-blue-600 hover:shadow-blue-400/40 focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:outline-none sm:w-auto"
                title="Solicitar Cotización Planes Empresariales DelRio Internet"
              >
                Solicitar Cotización
                <ArrowRight
                  size={22}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                title="Contactar Asesor Planes Empresariales DelRio Internet"
                target="_blank"
                href={`${contactos.comercial.whatsapp}?text=${encodeURIComponent("Hola! Quiero hablar con un asesor comercial.")}`}
                className="group inline-flex w-full items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:outline-none sm:w-auto"
              >
                Contactar Asesor
              </Link>
            </div>
          </div>

          {/* Columna derecha - Beneficios clave */}
          <div className="grid gap-4 sm:grid-cols-2">
            <h2 className="sr-only">Beneficios clave</h2>
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-blue-400/50 hover:bg-white/10">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-blue-600 shadow-lg">
                <Zap size={26} className="text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                Velocidad Simétrica
              </h3>
              <p className="text-sm text-gray-400">
                Mismo rendimiento en subida y bajada garantizado
              </p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-blue-400/50 hover:bg-white/10">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-green-500 to-emerald-600 shadow-lg">
                <ShieldCheck size={26} className="text-white" />
              </div>
              <h3 className="mb-2 flex flex-row items-center gap-1.5 text-lg font-bold text-white">
                SLA Garantizado
                <HoverCard>
                  <HoverCardTrigger>
                    <Info size={14} className="" />
                  </HoverCardTrigger>
                  <HoverCardContent className="w-70">
                    <p className="p-1 text-sm">
                      Solo para servicios Dedicados, nuestro acuerdo de nivel de
                      servicio (SLA) asegura un tiempo de actividad del 99.7%
                      con compensación contractual en caso de incumplimiento.
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </h3>
              <p className="text-sm text-gray-400">
                99.7% uptime con compensación contractual
              </p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-blue-400/50 hover:bg-white/10">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-blue-700 shadow-lg">
                <LifeBuoy size={26} className="text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                Soporte 24/7
              </h3>
              <p className="text-sm text-gray-400">
                Atención prioritaria sin esperas ni bots
              </p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-blue-400/50 hover:bg-white/10">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-orange-500 to-red-600 shadow-lg">
                <FlaskConical size={26} className="text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                Instalación Rápida
              </h3>
              <p className="text-sm text-gray-400">
                Equipamiento profesional en menos de 72hs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === EMPRESAS CAROUSEL === */}
      <section className="relative z-10 w-full overflow-hidden border-y border-b border-white/30 bg-linear-to-b from-black/40 to-transparent py-16 backdrop-blur-lg md:py-12">
        <div className="mx-auto max-w-400 px-4">
          <div className="mb-12 text-center md:mb-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-6 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400"></span>
              <span className="text-sm font-bold tracking-wider text-blue-300 uppercase">
                Casos de Éxito
              </span>
            </div>
            <h2 className="mx-auto mb-4 max-w-4xl text-3xl font-black text-white md:text-4xl lg:text-5xl">
              Empresas Líderes que Confían en Nuestra Red
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-400 md:text-lg">
              Más de 100 empresas mendocinas impulsan su transformación digital
              con nuestra infraestructura
            </p>
          </div>

          <EmpresasCarousel />
        </div>
      </section>

      {/* === PLANES EMPRESARIALES === */}
      <section className="relative z-10 w-full bg-linear-to-b from-transparent to-black/30 px-4 py-20 sm:px-6 md:py-16">
        <div className="mx-auto max-w-screen">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500/20 to-blue-700/20 px-6 py-2 backdrop-blur-sm">
              <span className="text-sm font-bold tracking-wider text-blue-300">
                PLANES CORPORATIVOS
              </span>
            </div>
            <h2 className="mb-5 text-3xl font-black text-white md:text-4xl lg:text-5xl">
              Planes Diseñados para tu{" "}
              <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Crecimiento
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-base text-gray-400 md:text-lg">
              Soluciones escalables con infraestructura dedicada, monitoreo
              continuo y atención ejecutiva personalizada
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {/* === PLAN BUSINESS === */}
            <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-blue-950/50 to-blue-900/30 p-8 backdrop-blur-md transition-all hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 md:p-10">
              {/* Badge */}
              <div className="mb-6 flex w-34 flex-row items-center justify-center gap-2 rounded-full bg-linear-to-r from-blue-500/20 to-blue-700/20 py-1.5 backdrop-blur-sm">
                <Check size={16} className="text-blue-300" />
                <span className="text-xs font-bold tracking-wider text-blue-300 uppercase">
                  Estándar
                </span>
              </div>

              <h3 className="mb-3 text-3xl font-black text-white md:text-4xl">
                Empresarial
              </h3>
              <p className="mb-8 text-base leading-relaxed text-gray-300">
                Conectividad balanceada y versátil para PyMEs en crecimiento.
                Velocidades simétricas con soporte ágil incluido.
              </p>

              {/* Features List */}
              <div className="mb-8 flex-1 space-y-4">
                {planesBusiness.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg bg-white/5 p-3 backdrop-blur-sm transition hover:bg-white/10"
                  >
                    <Check size={24} className="text-green-500" />
                    <div>
                      <h4 className="mb-1 text-sm font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                target="_blank"
                href={`${contactos.comercial.whatsapp}?text=${encodeURIComponent("Hola! Me gustaria consultar sobre el plan Empresarial.")}`}
                className="group/btn mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-blue-700 px-6 py-4 font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:from-blue-500 hover:to-blue-600 hover:shadow-xl hover:shadow-blue-400/40 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none"
                title="Solicitar Cotización Plan Empresarial DelRio Internet"
              >
                Solicitar Cotización
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover/btn:translate-x-1"
                />
              </Link>
            </div>

            {/* === PLAN BUSINESS FULL === */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-blue-950/50 to-blue-900/30 p-8 backdrop-blur-md transition-all hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 md:p-10">
              {/* Premium Badge */}
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-linear-to-r from-yellow-500/20 to-orange-500/20 px-4 py-1.5 backdrop-blur-sm">
                <Star size={16} className="text-yellow-300" />
                <span className="text-xs font-bold tracking-wider text-yellow-300 uppercase">
                  Dedicado
                </span>
              </div>

              <h3 className="mb-3 text-3xl font-black text-white md:text-4xl">
                Empresarial Dedicado
              </h3>
              <p className="mb-8 text-base leading-relaxed text-gray-300">
                Conectividad dedicada con máxima prioridad con SLA Empresarial.
              </p>

              {/* Features List */}
              <div className="mb-10 space-y-4">
                {planesFull.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg bg-white/5 p-3 backdrop-blur-sm transition hover:bg-white/10"
                  >
                    <Check size={24} className="text-green-500" />
                    <div>
                      <h4 className="mb-1 text-sm font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                target="_blank"
                href={`${contactos.comercial.whatsapp}?text=${encodeURIComponent("Hola! Me gustaria consultar sobre el plan Empresarial Full (Dedicado).")}`}
                className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-blue-800 px-6 py-4 font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:from-blue-500 hover:to-blue-700 hover:shadow-xl hover:shadow-blue-400/40 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none"
                title="Solicitar Cotización Plan Empresarial DelRio Internet"
              >
                Solicitar Cotización
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover/btn:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400">
              ¿Necesitas una solución personalizada?{" "}
              <Link
                title="Contactar con nuestro equipo comercial"
                target="_blank"
                href={`${contactos.comercial.whatsapp}?text=${encodeURIComponent("Hola! Necesito un plan empresarial personalizado.")}`}
                className="font-semibold text-blue-500 underline decoration-blue-400/30 underline-offset-4 transition hover:text-blue-300 hover:decoration-blue-300/50"
              >
                Contacta con nuestro equipo comercial
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
