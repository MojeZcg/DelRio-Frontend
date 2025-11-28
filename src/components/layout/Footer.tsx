import { ArrowUpRightIcon, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import formatearNumero from "@/components/utils/NumberFormater";

export default function Footer() {
  const administracion = process.env.ADMINISTRACION;

  return (
    <footer className="border-t border-gray-700 bg-black text-gray-300">
      <div className="mx-auto w-full px-12 pt-10 pb-6">
        {/* === TOP SECTION === */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + descripción */}
          <div>
            <Image
              src="/logoTransparentWhite.webp"
              alt="DelRio Internet Logo"
              width={160}
              height={80}
              className="mb-4 select-none"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              Conectamos hogares y empresas con internet de alta velocidad,
              atención humana y un compromiso real con el servicio.
            </p>
          </div>

          {/* Navegación principal */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">
              Navegación
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="underline-offset-2 transition-colors hover:text-white hover:underline"
                >
                  Hogar
                </Link>
              </li>
              <li>
                <Link
                  href="/empresas"
                  className="underline-offset-2 transition-colors hover:text-white hover:underline"
                >
                  Empresas
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="underline-offset-2 transition-colors hover:text-white hover:underline"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="https://delriointernet.portaldeinternet.me/users/login"
                  rel="noopener noreferrer"
                  className="underline-offset-2 transition-colors hover:text-white hover:underline"
                >
                  Portal de Clientes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">Contacto</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  target="_blank"
                  href={`https://wa.me/${administracion}`}
                  className="flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>{formatearNumero(administracion ?? "")}</span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="mailto:info@delriointernet.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>administracion@delriointernet.com.ar</span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://maps.app.goo.gl/zyJBfKs266V1ZdqZ9"
                  className="flex items-start gap-2"
                >
                  <MapPin className="mt-0.5 h-4 w-4 text-blue-400" />
                  <span>Quintana 1180, M5507 Perdriel, Mendoza</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Acceso rápido / términos */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">
              Información legal
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  target="_blank"
                  href="/terminos-condiciones.pdf"
                  className="inline-flex items-center gap-1 underline-offset-2 transition-colors hover:text-white hover:underline"
                >
                  Términos y Condiciones
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </Link>
              </li>
              <li>
                <Link
                  href={`https://wa.me/${administracion}?text=Hola%21%20Quiero%20dar%20de%20baja%20mi%20servicio`}
                  className="inline-flex items-center gap-1 underline-offset-2 transition-colors hover:text-white hover:underline"
                >
                  Dar de baja
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* === BOTTOM SECTION === */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-gray-700 pt-4 text-start text-xs text-gray-400 sm:flex-row md:gap-0">
          <p className="text-center">
            &copy; {new Date().getFullYear()} DelRio Internet. Todos los
            derechos reservados.
          </p>
          <p className="text-xs text-gray-400">
            Desarrollado por{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/montenegrowalter/"
              className="text-white"
            >
              Walter J. Montenegro
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
