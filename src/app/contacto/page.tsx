import ContactImage from "@/components/contactpage/ContactImage";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import ContactForm from "@/components/contactpage/ContactForm";
import { FileCog, BadgeDollarSign, Wrench, Phone } from "lucide-react";
import { contactos } from "@/lib/contacto";
import FijoCopy from "@/components/FijoCopy";

export const metadata = {
  title: " Conectate con nosotros | DelRio Internet",
  description:
    "¿Tienes dudas o necesitas asesoría? En Internet DelRio estamos para ayudarte. Contáctanos y recibe atención personalizada, soporte confiable y toda la información que necesitas para elegir el plan ideal.”",
  url: "https://delriointernet.com.ar/contacto",
  keywords: [
    "contratar internet en Mendoza",
    "contratar internet en Pedriel",
    "contacto proveedor de internet Mendoza",
    "soporte técnico internet Mendoza",
    "atención al cliente internet Mendoza",
  ],
  alternates: {
    canonical: "https://delriointernet.com.ar/contacto",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "DelRio Internet", url: "https://delriointernet.com.ar" }],
  publisher: "DelRio Internet",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-linear-to-tl from-slate-950 via-slate-900 to-(--delrio-dark) pt-22 text-white">
      <div className="px-6 py-10 2xl:py-14">
        <div className="flex items-center justify-center gap-24">
          <div className="relative z-10 w-full max-w-xl text-center">
            <h1 className="mb-3 bg-clip-text text-5xl font-bold text-white">
              Contactanos
            </h1>
            <p className="mb-4 text-sm text-gray-300">
              Estamos para ayudarte. Completá el formulario para un contacto mas
              personalizado.
            </p>

            <ContactForm />
          </div>
          <ContactImage />
        </div>
        <Separator className="mt-14 mb-10" />

        {/* Contacto directo */}
        <div className="text-center text-gray-300">
          <div className="mb-1 flex items-center justify-center gap-2">
            <FileCog className="h-4 w-4 text-[#6d8cff]" />
            <div>
              <strong>Administración:</strong>{" "}
              <Link
                title="Contacto Administración DelRio Internet"
                target="_blank"
                rel="noopener noreferrer"
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
                title="Contacto Comercial DelRio Internet"
                target="_blank"
                rel="noopener noreferrer"
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
                title="Soporte tecnico DelRio Internet"
                target="_blank"
                rel="noopener noreferrer"
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
            <div className="flex gap-2">
              <strong>Telefono Fijo:</strong>
              <span className="text-[#6d8cff]">
                {" "}
                <FijoCopy />
              </span>
            </div>
          </div>
          <p className="mt-4">
            ✉️ <strong>Correo:</strong>{" "}
            <Link
              title="Mail Administración DelRio Internet"
              target="_blank"
              rel="noopener noreferrer"
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

        <section className="mx-auto mt-24 max-w-7xl rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">
            ¿Qué podés resolver desde esta página de contacto?
          </h2>
          <ul className="list-disc pl-10">
            <li className="mb-4 text-sm leading-relaxed text-gray-300 md:text-base">
              Esta sección está pensada para ayudarte a resolver de forma rápida
              cualquier consulta relacionada con nuestros servicios de internet
              para hogar y empresas en Mendoza. Si todavía no sos cliente, podés
              escribirnos para validar cobertura en tu zona, conocer qué plan se
              adapta mejor a tu uso diario y entender cómo es el proceso de
              instalación. Nuestro equipo comercial te guía paso a paso para que
              tomes una decisión informada, con datos claros sobre velocidad,
              estabilidad, equipamiento y tiempos estimados de activación.
            </li>
            <li className="mb-4 text-sm leading-relaxed text-gray-300 md:text-base">
              Si ya sos cliente, también podés usar este canal para solicitar
              soporte técnico, resolver dudas de facturación, consultar medios
              de pago o gestionar cambios de titularidad y actualización de
              datos. Priorizamos una atención humana, directa y sin derivaciones
              innecesarias: cada área responde sobre su especialidad para darte
              una solución concreta en el menor tiempo posible. Además, cuando
              el caso lo requiere, hacemos seguimiento hasta confirmar que el
              servicio quedó funcionando correctamente.
            </li>
            <li className="text-sm leading-relaxed text-gray-300 md:text-base">
              Para acelerar la atención, te recomendamos incluir en tu mensaje
              el domicilio de instalación, un número de contacto y una breve
              descripción de tu consulta. Si se trata de una incidencia técnica,
              sumar detalles como luces del equipo, horarios en los que ocurre
              la falla o dispositivos afectados nos permite diagnosticar mejor
              desde el primer contacto. Nuestro objetivo es simple: que tengas
              una conexión estable, acompañamiento real y respuestas claras cada
              vez que necesites comunicarte con DelRio Internet.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
