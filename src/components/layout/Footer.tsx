"use client";

import { ArrowUpRightIcon, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { contactos } from "@/lib/contacto";
import toast from "react-hot-toast";

export default function Footer() {
  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
      e.preventDefault();

      // Intentar copiar al portapapeles
      const copyToClipboard = (text: string) => {
        // Método 1: Clipboard API (solo funciona en HTTPS o localhost)
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard
            .writeText(text)
            .then(() => {
              toast.success("Número copiado al portapapeles");
            })
            .catch(() => {
              fallbackCopy(text);
            });
        } else {
          // Método 2: Fallback con textarea temporal
          fallbackCopy(text);
        }
      };

      const fallbackCopy = (text: string) => {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();

        try {
          const successful = document.execCommand("copy");
          if (successful) {
            toast.success("Número copiado en el portapapeles", {
              style: {
                borderRadius: "10px",
                background: "#282828",
                color: "#fff",
              },
            });
          } else {
            toast.error("No se pudo copiar. Número: " + text);
          }
        } catch (err) {
          toast.error("No se pudo copiar. Número: " + text);
          console.error("Error copiando al portapapeles:", err);
        }

        document.body.removeChild(textarea);
      };

      copyToClipboard(contactos.fisico.telefono);
    }
  };

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
                  href={`tel:${contactos.fisico.telefono}`}
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>{contactos.fisico.telefono}</span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={`mailto:${contactos.emails.administracion}`}
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>{contactos.emails.administracion}</span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={contactos.fisico.maps}
                  className="flex items-start gap-2"
                >
                  <MapPin className="mt-0.5 h-4 w-4 text-blue-400" />
                  <span>{contactos.fisico.direccion}</span>
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
