import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EmpresasPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden text-white">
      {/* 🌆 Fondo fijo con overlay */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/empresa.webp"
          alt="Fondo empresarial"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* 🧭 Contenido principal */}
      <section className="z-10 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-3 text-4xl font-bold md:text-6xl">
          Internet para Empresas
        </h1>
        <h2 className="mb-6 text-lg font-light text-gray-200 md:text-xl">
          Conectividad dedicada, soporte prioritario y máxima estabilidad para
          tu negocio.
        </h2>

        <Link
          href="/contacto"
          className="group mt-4 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-blue-800 px-8 py-3 font-semibold text-white shadow-md transition-all hover:from-blue-700 hover:to-blue-900 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
        >
          Contactar asesor comercial
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>

        <p className="mt-10 text-sm text-gray-300">
          Próximamente más información sobre nuestros planes Business y Business
          Full.
        </p>
      </section>
    </main>
  );
}
