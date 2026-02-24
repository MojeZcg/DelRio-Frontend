"use client";

import { contactos } from "@/lib/contacto";
import Link from "next/link";
import toast from "react-hot-toast";

export default function FijoCopy() {
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
    <Link
      title="Contacto Fijo DelRio Internet"
      target="_blank"
      rel="noopener noreferrer"
      href={`tel:${contactos.fisico.telefono}`}
      onClick={handlePhoneClick}
      className="flex items-center gap-2 hover:text-blue-500 hover:underline"
    >
      {contactos.fisico.telefono}
    </Link>
  );
}
