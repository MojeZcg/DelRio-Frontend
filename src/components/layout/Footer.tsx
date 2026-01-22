"use client";

import { ArrowUpRightIcon, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { contactos } from "@/lib/contacto";
import toast from "react-hot-toast";
import FijoCopy from "../FijoCopy";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-black text-gray-300">
      <div className="mx-auto w-full px-12 pt-10 pb-6">
        {/* === TOP SECTION === */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + descripción */}
          <div>
            <Image
              title="DelRio Internet Logo"
              src="/logoTransparentWhite.webp"
              alt="DelRio Internet Logo"
              width={160}
              height={80}
              className="mb-4 select-none"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              Conectamos hogares y empresas con internet de alta calidad,
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
                  title="Inicio DelRio Internet"
                  href="/"
                  className="underline-offset-2 transition-colors hover:text-white hover:underline"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  title="Hogar DelRio Internet"
                  href="/hogar"
                  className="underline-offset-2 transition-colors hover:text-white hover:underline"
                >
                  Hogar
                </Link>
              </li>
              <li>
                <Link
                  title="Empresas DelRio Internet"
                  href="/empresas"
                  className="underline-offset-2 transition-colors hover:text-white hover:underline"
                >
                  Empresas
                </Link>
              </li>
              <li>
                <Link
                  title="Contacto DelRio Internet"
                  href="/contacto"
                  className="underline-offset-2 transition-colors hover:text-white hover:underline"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  title="Portal de Clientes DelRio Internet"
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
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <FijoCopy />
                </div>
              </li>
              <li>
                <Link
                  title="Email Administración DelRio Internet"
                  target="_blank"
                  href={`mailto:${contactos.emails.administracion}`}
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="cursor-pointer hover:text-blue-500 hover:underline">
                    {contactos.emails.administracion}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  title="Ubicación Física DelRio Internet"
                  target="_blank"
                  href={contactos.fisico.maps}
                  className="flex items-start gap-2"
                >
                  <MapPin className="mt-0.5 h-4 w-4 text-blue-400" />

                  <span className="cursor-pointer hover:text-blue-500 hover:underline">
                    {contactos.fisico.direccion}
                  </span>
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
                  title="Términos y Condiciones DelRio Internet"
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
                  title="Dar de baja DelRio internet"
                  href={`${contactos.administracion.whatsapp}?text=${encodeURIComponent("Hola! Quiero dar de baja mi servicio")}`}
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
          <p className="text-[11.5px] text-gray-400">
            Diseñada y Desarrollada por{" "}
            <Link
              title="Desarrollador de DelRio Internet Walter J. Montenegro"
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
