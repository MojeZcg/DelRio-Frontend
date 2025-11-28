import ContactImage from "@/components/contactpage/ContactImage";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import ContactForm from "@/components/contactpage/ContactForm";
import { FileCog, BadgeDollarSign, Wrench } from "lucide-react";
import formatearNumero from "@/components/utils/NumberFormater";

export default function ContactPage() {
  const administracion = process.env.ADMINISTRACION;
  const comercial = process.env.COMERCIAL;
  const soporte = process.env.SOPORTE;
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-linear-to-tl from-slate-950 via-slate-900 to-(--delrio-dark) pt-24 text-white">
      <div className="px-6 py-10 2xl:pt-10 2xl:pb-14">
        <div className="flex items-center justify-center gap-24">
          <div className="relative z-10 w-full max-w-xl text-center">
            <h1 className="mb-4 bg-clip-text text-5xl font-bold text-white">
              Contactanos
            </h1>
            <p className="mb-10 text-sm text-gray-300">
              Estamos para ayudarte. Completá el formulario o escribinos a
              nuestros canales directos.
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
                href={`https://wa.me/${administracion}?text=Hola%21%20Quiero%20contratar%20el%20servicio%20de%20internet`}
                className="text-[#6d8cff] hover:underline"
              >
                {formatearNumero(administracion ?? "")}
              </Link>
            </div>
          </div>

          <div className="mb-1 flex items-center justify-center gap-2">
            <BadgeDollarSign className="h-4 w-4 text-[#6d8cff]" />
            <div>
              <strong>Comercial:</strong>{" "}
              <Link
                target="_blank"
                href={`https://wa.me/${comercial}?text=Hola%21%20Quiero%20contratar%20el%20servicio%20de%20internet`}
                className="text-[#6d8cff] hover:underline"
              >
                {formatearNumero(comercial ?? "")}
              </Link>
            </div>
          </div>

          <div className="mb-1 flex items-center justify-center gap-2">
            <Wrench className="h-4 w-4 text-[#6d8cff]" />
            <div>
              <strong>Soporte Técnico:</strong>{" "}
              <Link
                target="_blank"
                href={`https://wa.me/${soporte}?text=Hola%21%20Quiero%20contratar%20el%20servicio%20de%20internet`}
                className="text-[#6d8cff] hover:underline"
              >
                {formatearNumero(soporte ?? "")}
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
              administracion@delriointernet.com.ar
            </Link>
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Horario de atención: Lunes a Viernes de 8:30 a 18:00 y Sábados de
            9:00 a 13:00
          </p>
        </div>
      </div>
    </main>
  );
}
