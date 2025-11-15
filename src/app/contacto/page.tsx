import ContactImage from "@/components/contactpage/ContactImage";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import ContactForm from "@/components/contactpage/ContactForm";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-linear-to-tl from-slate-950 via-slate-900 to-(--delrio-dark) pt-24 text-white">
      <div className="px-6 py-10 2xl:py-6">
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
          <p className="mb-1">
            📞 <strong>Teléfono:</strong>{" "}
            <a
              href="https://wa.me/+5492604001234"
              className="text-[#6d8cff] hover:underline"
            >
              +54 9 260 400 1234
            </a>
          </p>
          <p>
            ✉️ <strong>Correo:</strong>{" "}
            <Link
              href="mailto:contacto@delriointernet.com"
              className="text-[#6d8cff] hover:underline"
            >
              contacto@delriointernet.com
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
