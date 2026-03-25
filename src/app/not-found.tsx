import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  LifeBuoy,
  MapPin,
  MessageCircleWarning,
  Phone,
} from "lucide-react";

import { contactos } from "@/lib/contacto";

const accesos = [
  {
    title: "Volver al inicio",
    description:
      "Regresa a la portada principal y retoma la navegación desde un punto seguro.",
    href: "/",
  },
  {
    title: "Servicios para hogar",
    description:
      "Útil si estabas buscando planes, cobertura o información comercial para clientes residenciales.",
    href: "/hogar",
  },
  {
    title: "Soluciones para empresas",
    description:
      "Acceso rápido a conectividad dedicada y propuestas para operaciones, oficinas o comercios.",
    href: "/empresas",
  },
  {
    title: "Ir a contacto",
    description:
      "Si necesitas derivar la consulta o confirmar información, usa la página de contacto.",
    href: "/contacto",
  },
];

export default function NotFound() {
  const whatsappHref = `${contactos.soporte.whatsapp}?text=${encodeURIComponent(
    "Hola, encontré una página 404 en el sitio de Del Río Internet y necesito ayuda para ubicar la información correcta.",
  )}`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06111f] px-6 pt-32 pb-18 text-white md:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(22,97,236,0.28),transparent_0%,transparent_42%),linear-gradient(135deg,#040b14_0%,#0c1d39_45%,#101937_100%)]" />
      <div className="absolute inset-x-0 top-20 -z-10 mx-auto h-72 w-72 rounded-full bg-[#1661ec]/20 blur-3xl" />

      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-blue-100 backdrop-blur-sm">
            <MessageCircleWarning className="h-4 w-4" />
            Error 404 · Ruta no disponible
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.32em] text-cyan-200 uppercase">
              Página no encontrada
            </p>
            <h1 className="max-w-3xl text-4xl leading-tight font-semibold text-white md:text-6xl">
              Esta dirección no lleva a una página válida.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
              Si llegaste desde un acceso interno, un mensaje compartido o un
              marcador viejo, probablemente el enlace cambió. Desde acá puedes
              volver a una sección útil o pedir ayuda al equipo para encontrar
              la información correcta.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-(--delrio-light) to-(--delrio-dark) px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
            >
              <LifeBuoy className="h-4 w-4" />
              Reportar enlace roto
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {accesos.map((acceso) => (
              <Link
                key={acceso.href}
                href={acceso.href}
                className="group rounded-2xl border border-white/10 bg-white/6 p-5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      {acceso.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {acceso.description}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-200 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <aside className="rounded-4xl border border-white/10 bg-white/8 p-6 shadow-2xl shadow-black/25 backdrop-blur-md md:p-8">
          <div className="rounded-3xl border border-cyan-300/20 bg-linear-to-br from-cyan-300/10 to-transparent p-6">
            <p className="text-sm font-semibold tracking-[0.26em] text-cyan-200 uppercase">
              Asistencia rápida
            </p>
            <div className="mt-4 space-y-5">
              <div>
                <p className="text-5xl font-semibold text-white">404</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  No encontramos esta ruta, pero sí podemos ayudarte a redirigir
                  la consulta sin perder tiempo.
                </p>
              </div>

              <div className="space-y-3 rounded-2xl border border-white/10 bg-[#081324] p-4">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-cyan-200" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Soporte técnico
                    </p>
                    <p className="text-sm text-slate-300">
                      {contactos.soporte.numero}
                    </p>
                    <p className="text-xs text-slate-400">
                      Ideal si el enlace venía desde una tarea o un mensaje
                      interno.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-cyan-200" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Atención presencial
                    </p>
                    <p className="text-sm text-slate-300">
                      {contactos.fisico.direccion}
                    </p>
                    <p className="text-xs text-slate-400">
                      {contactos.fisico.horario}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-50">
                Si esta URL debería existir, conviene reportarla. Así el equipo
                puede corregir el acceso y evitar que otros trabajadores lleguen
                al mismo punto muerto.
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
