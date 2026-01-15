import ContactImage from "@/components/contactpage/ContactImage";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import ContactForm from "@/components/contactpage/ContactForm";
import { FileCog, BadgeDollarSign, Wrench, Phone } from "lucide-react";

import { generateMetadata } from "@/lib/seo";
import { contactos } from "@/lib/contacto";

export const metadata = generateMetadata({
  title: "DelRio Internet | Conectate con nosotros",
  description:
    "Conectá tu hogar con Internet DelRio: planes simétricos, WiFi 6, soporte confiable e instalación profesional.",
  url: "https://delriointernet.com.ar/contacto",
  keywords: [
    "delrio",
    "delrio internet",
    "internet",
    "fibra óptica",
    "internet dedicado",
    "planes de internet",
    "internet empresas",
    "planes de internet empresas",
    "proveedores de internet",
    "internet hogar",
    "planes de internet hogar",
    "50 Mbps",
    "100 Mbps",
    "300 Mbps",
  ],
});

export default function ContactPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-linear-to-tl from-slate-950 via-slate-900 to-(--delrio-dark) pt-24 text-white">
      <div className="px-6 py-10 2xl:pt-10 2xl:pb-14">
        <div className="flex items-center justify-center gap-24">
          <div className="relative z-10 w-full max-w-xl text-center">
            <h1 className="mb-4 bg-clip-text text-5xl font-bold text-white">
              Contactanos
            </h1>
            <p className="mb-10 text-sm text-gray-300">
              Estamos para ayudarte. Completá el formulario para un contacto mas
              personalizado.
            </p>

            <ContactForm />
          </div>
          <ContactImage />
        </div>
        <Separator className="my-14" />

        {/* Contacto directo */}
        <div className="text-center text-gray-300">
          <div className="mb-1 flex items-center justify-center gap-2">
            <FileCog className="h-4 w-4 text-[#6d8cff]" />
            <div>
              <strong>Administración:</strong>{" "}
              <Link
                target="_blank"
                href={`${contactos.administracion.whatsapp}?text=${encodeURIComponent("Hola! Quiero contratar el servicio de internet.")}`}
                className="text-[#6d8cff] hover:underline"
              >
                {contactos.administracion.numero}
              </Link>
            </div>
          </div>

          <div className="mb-1 flex items-center justify-center gap-2">
            <BadgeDollarSign className="h-4 w-4 text-[#6d8cff]" />
            <div>
              <strong>Comercial:</strong>{" "}
              <Link
                target="_blank"
                href={`${contactos.comercial.whatsapp}?text=${encodeURIComponent("Hola! Quiero recibir información sobre los planes de internet para mi hogar o empresa.")}`}
                className="text-[#6d8cff] hover:underline"
              >
                {contactos.comercial.numero}
              </Link>
            </div>
          </div>

          <div className="mb-1 flex items-center justify-center gap-2">
            <Wrench className="h-4 w-4 text-[#6d8cff]" />
            <div>
              <strong>Soporte Técnico:</strong>{" "}
              <Link
                target="_blank"
                href={`${contactos.soporte.whatsapp}?text=${encodeURIComponent(
                  "Hola! Necesito asistencia técnica con mi servicio de internet.",
                )}`}
                className="text-[#6d8cff] hover:underline"
              >
                {contactos.soporte.numero}
              </Link>
            </div>
          </div>
          <div className="mb-1 flex items-center justify-center gap-2">
            <Phone className="h-4 w-4 text-[#6d8cff]" />
            <div>
              <strong>Telefono Fijo:</strong>{" "}
              <Link
                target="_blank"
                href={`tel:${contactos.fisico.telefono}`}
                className="text-[#6d8cff] hover:underline"
              >
                {contactos.fisico.telefono}
              </Link>
            </div>
          </div>
          <p className="mt-4">
            ✉️ <strong>Correo:</strong>{" "}
            <Link
              target="_blank"
              href="mailto:administracion@delriointernet.com.ar"
              className="text-[#6d8cff] hover:underline"
            >
              {contactos.emails.administracion}
            </Link>
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Horario de atención: {contactos.fisico.horario}
          </p>
        </div>
      </div>
    </main>
  );
}
