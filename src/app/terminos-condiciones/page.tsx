import Link from "next/link";
import { Download } from "lucide-react";
import { terminosSecciones } from "@/content/terminos";

export const metadata = {
  title: "DelRio Internet | Términos y Condiciones",
  description:
    "Términos y Condiciones de prestación de servicios de Redes Del Río S.A.S. (DelRio Internet): condiciones de uso y contratación, facturación, obligaciones de las partes, responsabilidades y baja del servicio.",
  keywords: [
    "términos y condiciones DelRio Internet",
    "contrato servicio de internet Mendoza",
    "condiciones de contratación internet",
    "baja del servicio internet Mendoza",
  ],
  alternates: {
    canonical: "/terminos-condiciones",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "DelRio Internet", url: "https://delriointernet.com.ar" }],
  publisher: "DelRio Internet",
};

export default function TerminosCondicionesPage() {
  return (
    <main className="min-h-screen w-full bg-linear-to-tl from-slate-950 via-slate-900 to-(--delrio-dark) pt-22 text-white">
      <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 2xl:py-14">
        {/* === ENCABEZADO === */}
        <header className="text-center">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Términos y Condiciones
          </h1>
          <p className="mt-3 text-sm text-gray-300 sm:text-base">
            Prestación de servicios — Redes Del Río S.A.S.
          </p>
          <Link
            title="Descargar Términos y Condiciones DelRio Internet en PDF"
            href="/terminos-condiciones.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/10"
          >
            <Download className="h-4 w-4 text-[#6d8cff]" />
            Descargar en PDF
          </Link>
        </header>

        {/* === ÍNDICE === */}
        <nav
          aria-label="Índice de secciones"
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6"
        >
          <h2 className="mb-3 text-base font-semibold sm:text-lg">Índice</h2>
          <ol className="grid list-decimal grid-cols-1 gap-x-8 gap-y-2 pl-5 text-sm text-gray-300 sm:grid-cols-2">
            {terminosSecciones.map((seccion) => (
              <li key={seccion.id}>
                <Link
                  href={`#${seccion.id}`}
                  className="underline-offset-2 transition-colors hover:text-white hover:underline"
                >
                  {seccion.titulo}
                </Link>{" "}
                <span className="text-xs text-gray-500">
                  ({seccion.clausulas[0].numero}–
                  {seccion.clausulas[seccion.clausulas.length - 1].numero})
                </span>
              </li>
            ))}
          </ol>
        </nav>

        {/* === CLÁUSULAS === */}
        {terminosSecciones.map((seccion) => (
          <section
            key={seccion.id}
            id={seccion.id}
            className="mt-12 scroll-mt-24"
          >
            <h2 className="border-b border-white/10 pb-3 text-xl font-bold sm:text-2xl">
              {seccion.titulo}
            </h2>
            <ol className="mt-6 space-y-5">
              {seccion.clausulas.map((clausula) => (
                <li
                  key={clausula.numero}
                  id={`clausula-${clausula.numero}`}
                  className="flex scroll-mt-24 gap-3 sm:gap-4"
                >
                  <span
                    aria-hidden="true"
                    className="min-w-8 shrink-0 pt-0.5 text-sm font-semibold text-[#6d8cff] tabular-nums sm:text-base"
                  >
                    {clausula.numero}.
                  </span>
                  <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                    {clausula.texto}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        ))}

        {/* === PIE === */}
        <p className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-400 sm:text-sm">
          Ante cualquier duda sobre estos Términos y Condiciones podés
          escribirnos desde la{" "}
          <Link
            title="Contacto DelRio Internet"
            href="/contacto"
            className="text-[#6d8cff] underline underline-offset-2 hover:text-white"
          >
            página de contacto
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
