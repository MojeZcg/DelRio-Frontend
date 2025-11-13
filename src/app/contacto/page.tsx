import ContactImage from "@/components/contactpage/ContactImage";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-linear-to-tl from-slate-950 via-slate-900 to-(--delrio-dark) pt-24 text-white">
      <div className="px-6 py-10 lg:p-0">
        <div className="flex items-center justify-center gap-24">
          <div className="relative z-10 w-full max-w-xl text-center">
            <h1 className="mb-4 bg-clip-text text-5xl font-bold text-white">
              Contactanos
            </h1>
            <p className="mb-10 text-sm text-gray-300">
              Estamos para ayudarte. Completá el formulario o escribinos a
              nuestros canales directos.
            </p>

            <form
              action="mailto:contacto@delriointernet.com"
              method="post"
              encType="text/plain"
              className="mx-auto flex w-full max-w-3xl flex-col gap-4 text-left"
            >
              <div>
                <Label
                  htmlFor="nombre"
                  className="mb-1 block text-sm font-medium text-gray-200"
                >
                  Nombre
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  className="bg-white/10 text-gray-100 placeholder-gray-400"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-200"
                >
                  Correo electrónico
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="nombre@correo.com"
                  className="bg-white/10 text-gray-100 placeholder-gray-400"
                />
              </div>

              <div>
                <Label
                  htmlFor="mensaje"
                  className="mb-1 block text-sm font-medium text-gray-200"
                >
                  Mensaje
                </Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  placeholder="Contanos cómo podemos ayudarte..."
                  className="min-h-42 bg-white/10 text-gray-100 placeholder-gray-400"
                  rows={12}
                />
              </div>

              <Button
                type="submit"
                className="mt-2 h-12 w-full bg-linear-to-r from-(--delrio-light) via-(--delrio-medium) to-(--delrio-dark) text-base font-semibold text-white shadow-md ring shadow-white/20 transition-all duration-300 hover:opacity-70"
              >
                Enviar mensaje
              </Button>
            </form>
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
