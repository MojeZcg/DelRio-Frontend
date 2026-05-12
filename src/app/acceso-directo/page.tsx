import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactos } from "@/lib/contacto";

export const metadata: Metadata = {
  title: "DelRio Internet | Acceso directo de contactos",
  description:
    "Página de acceso directo para QR con todos los contactos de DelRio Internet.",
  robots: {
    index: false,
    follow: false,
  },
};

const AREAS = [
  {
    key: "administracion",
    nombre: contactos.administracion.nombre,
    numero: contactos.administracion.numero,
    whatsapp: contactos.administracion.whatsapp,
    mensaje: "Hola! Quiero consultar por administración.",
  },
  {
    key: "comercial",
    nombre: contactos.comercial.nombre,
    numero: contactos.comercial.numero,
    whatsapp: contactos.comercial.whatsapp,
    mensaje: "Hola! Quiero consultar por planes y contratación.",
  },
  {
    key: "soporte",
    nombre: contactos.soporte.nombre,
    numero: contactos.soporte.numero,
    whatsapp: contactos.soporte.whatsapp,
    mensaje: "Hola! Necesito asistencia técnica.",
  },
] as const;

function toTelHref(numero: string): string {
  return `tel:${numero.replace(/\s+/g, "")}`;
}

export default function AccesoDirectoContactosPage() {
  return (
    <div className="bg-slate-950 px-4 pt-28 pb-8 text-white md:px-8 md:pt-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1.6fr] lg:items-start">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:sticky lg:top-8">
            <p className="text-xs font-semibold tracking-wide text-cyan-300 uppercase">
              Acceso QR
            </p>
            <h1 className="mt-1 text-2xl font-bold md:text-3xl">
              Contactos directos DelRio Internet
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Elegí el área y tocá el botón para llamar o escribir por WhatsApp.
            </p>
          </section>

          <section className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {AREAS.map((area) => (
                <section
                  key={area.key}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <h2 className="text-lg font-semibold">{area.nombre}</h2>
                  <p className="mt-1 text-sm text-slate-300">{area.numero}</p>

                  <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-1">
                    <Link
                      href={toTelHref(area.numero)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
                    >
                      <Phone className="h-4 w-4" />
                      Llamar
                    </Link>

                    <Link
                      href={`${area.whatsapp}?text=${encodeURIComponent(area.mensaje)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </Link>
                  </div>
                </section>
              ))}
            </div>

            <section className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h2 className="text-lg font-semibold">Otros contactos</h2>

              <div className="mt-3 grid gap-2 text-sm md:grid-cols-2">
                <Link
                  href={`tel:${contactos.fisico.telefono}`}
                  className="flex items-center gap-2 text-cyan-300 hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  Teléfono fijo: {contactos.fisico.telefono}
                </Link>

                <Link
                  href={`mailto:${contactos.emails.administracion}`}
                  className="flex items-center gap-2 text-cyan-300 hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {contactos.emails.administracion}
                </Link>

                <Link
                  href={`mailto:${contactos.emails.soporte}`}
                  className="flex items-center gap-2 text-cyan-300 hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {contactos.emails.soporte}
                </Link>

                <Link
                  href={contactos.fisico.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-300 hover:underline md:col-span-2"
                >
                  <MapPin className="h-4 w-4" />
                  {contactos.fisico.direccion}
                </Link>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                {contactos.fisico.horario}
              </p>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
