import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function EmpresasPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-24 text-white">
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
        <h2 className="mb-6 text-lg font-light text-gray-200 md:text-xl">
          Conectividad dedicada, soporte prioritario y máxima estabilidad para
          tu negocio.
        </h2>

        <Link
          href="/contacto"
          className="group mt-4 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-(--delrio-light) to-(--delrio-medium) px-8 py-3 font-semibold text-white shadow-md transition-all hover:from-blue-700 hover:to-blue-900 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
        >
          Contactar asesor comercial
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>

      <section className="z-10 mx-auto mt-16 w-full px-6 py-20 text-gray-100">
        <h3 className="mb-16 text-center text-4xl font-semibold text-white">
          Soluciones de Conectividad para Empresas
        </h3>

        {/* Business - Conectividad Simétrica */}
        <div className="relative mb-20 flex flex-col items-center text-center">
          <div className="flex w-full justify-center gap-10">
            <div className="max-w-3xl rounded-2xl bg-white/10 p-10 shadow-lg backdrop-blur-md transition hover:bg-white/15">
              <h4 className="mb-6 text-3xl font-bold text-blue-400">
                Business — Conectividad Simétrica
              </h4>
              <p className="mb-8 text-base leading-relaxed text-gray-300">
                Ideal para empresas que necesitan un servicio estable, rápido y
                balanceado entre subida y bajada, con soporte ágil y una gestión
                comercial flexible. Diseñado para garantizar continuidad
                operativa sin interrupciones.
              </p>

              <div className="space-y-6 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-6 w-6 text-green-400" />
                  <div>
                    <h5 className="text-lg font-semibold text-white">
                      Velocidades simétricas garantizadas
                    </h5>
                    <p className="text-sm text-gray-400">
                      Mantené el mismo rendimiento tanto en carga como en
                      descarga, sin reservas ocultas ni limitaciones de ancho de
                      banda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-6 w-6 text-green-400" />
                  <div>
                    <h5 className="text-lg font-semibold text-white">
                      Soporte técnico permanente
                    </h5>
                    <p className="text-sm text-gray-400">
                      Atención directa y resolución de incidencias en menos de
                      24 horas hábiles, con seguimiento personalizado de cada
                      caso.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-6 w-6 text-green-400" />
                  <div>
                    <h5 className="text-lg font-semibold text-white">
                      Instalación profesional
                    </h5>
                    <p className="text-sm text-gray-400">
                      Incluye equipos ONU Wi-Fi 6 y cableado preconectorizado
                      para una conexión más limpia, estable y lista para alto
                      rendimiento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-6 w-6 text-green-400" />
                  <div>
                    <h5 className="text-lg font-semibold text-white">
                      Facturación flexible
                    </h5>
                    <p className="text-sm text-gray-400">
                      Adaptá tus condiciones comerciales con facturación
                      electrónica y opciones ajustadas a las necesidades del
                      negocio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-6 w-6 text-green-400" />
                  <div>
                    <h5 className="text-lg font-semibold text-white">
                      Atención prioritaria
                    </h5>
                    <p className="text-sm text-gray-400">
                      Canales exclusivos de contacto comercial y técnico para
                      asegurar respuestas inmediatas ante cualquier necesidad.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/contacto"
                className="mt-10 inline-block min-w-md rounded-xl bg-blue-500 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-(--delrio-dark) focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
              >
                Consultar planes
              </Link>
            </div>

            {/* Business Full - Conectividad Dedicada */}
            <div className="relative flex flex-col items-center text-center">
              <div className="max-w-3xl rounded-2xl bg-white/10 p-10 shadow-lg backdrop-blur-md transition hover:bg-white/15">
                <h4 className="mb-6 text-3xl font-bold text-blue-700 text-shadow-sm">
                  Business Full — Conectividad Dedicada
                </h4>
                <p className="mb-8 text-base leading-relaxed text-gray-300">
                  Diseñado para empresas que requieren disponibilidad total y
                  máxima velocidad. Ideal para oficinas con alto tráfico de
                  datos, servicios en la nube o sistemas críticos que no pueden
                  detenerse.
                </p>

                <div className="space-y-6 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-6 w-6 text-green-400" />
                    <div>
                      <h5 className="text-lg font-semibold text-white">
                        Ancho de banda exclusivo
                      </h5>
                      <p className="text-sm text-gray-400">
                        Cada empresa dispone de una conexión totalmente
                        dedicada, garantizando disponibilidad continua 24/7 y
                        rendimiento constante.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-6 w-6 text-green-400" />
                    <div>
                      <h5 className="text-lg font-semibold text-white">
                        Instalación con equipamiento profesional
                      </h5>
                      <p className="text-sm text-gray-400">
                        Se provee una ONU Bridge y fibra fusionada directamente,
                        asegurando la mínima pérdida de señal y una
                        infraestructura preparada para escalar.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-6 w-6 text-green-400" />
                    <div>
                      <h5 className="text-lg font-semibold text-white">
                        Monitoreo y soporte proactivo
                      </h5>
                      <p className="text-sm text-gray-400">
                        Nuestro equipo técnico supervisa tu conexión en tiempo
                        real para detectar y resolver posibles incidencias antes
                        de que afecten tu servicio.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-6 w-6 text-green-400" />
                    <div>
                      <h5 className="text-lg font-semibold text-white">
                        Contratos personalizados
                      </h5>
                      <p className="text-sm text-gray-400">
                        Ofrecemos acuerdos adaptados a cada cliente corporativo,
                        con términos técnicos y comerciales según sus objetivos
                        y tamaño.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-6 w-6 text-green-400" />
                    <div>
                      <h5 className="text-lg font-semibold text-white">
                        Atención ejecutiva exclusiva
                      </h5>
                      <p className="text-sm text-gray-400">
                        Cada cuenta cuenta con un ejecutivo asignado, disponible
                        para atención prioritaria, coordinación técnica y
                        seguimiento de proyectos.
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contacto"
                  className="mt-10 inline-block min-w-md rounded-xl bg-blue-700 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-(--delrio-dark) focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
                >
                  Consultar planes
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Separator className="mx-auto my-20 max-w-7xl bg-white/20" />

        <p className="mx-auto mt-16 max-w-2xl text-center text-sm text-gray-400">
          Todos nuestros servicios están diseñados para acompañar el crecimiento
          de tu empresa, garantizando conectividad estable, atención prioritaria
          y un compromiso real con tu operación diaria.
        </p>
      </section>
    </main>
  );
}
