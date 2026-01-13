"use client";

import Image from "next/image";
import Link from "next/link";

const companies = [
  {
    name: "Lujan Agrícola",
    src: "/agricola.webp",
    link: "https://lujanagricola.com.ar/",
  },
  {
    name: "Chandon",
    src: "/chandon.webp",
    link: "https://www.chandon.com.ar/",
  },
  {
    name: "Crexell Transportes S.A.",
    src: "/crexell.webp",
    link: "https://www.crexellsa.com/",
  },
  { name: "Holcim", src: "/holcim.webp", link: "https://www.holcim.com.ar/" },
  {
    name: "Hormiserv",
    src: "/hormiserv.webp",
    link: "https://www.hormiserv.com/",
  },
  {
    name: "Maxiconsumo",
    src: "/maxiconsumo.webp",
    link: "https://www.maxiconsumo.com/",
  },
  {
    name: "Clear Petroleum",
    src: "/petroleum.webp",
    link: "https://clear.com.ar/",
  },
  { name: "Suri", src: "/suri.webp", link: "https://www.suri-sa.com.ar/" },
  {
    name: "Casa Tapaus",
    src: "/tapaus.webp",
    link: "https://www.instagram.com/casatapaus/?hl=en",
  },
  {
    name: "Tuboscope",
    src: "/tuboscope.webp",
    link: "https://www.nov.com/about/our-business-units/tuboscope",
  },
  {
    name: "Matervini",
    src: "/matervini.webp",
    link: "https://www.matervini.com/",
  },
];

interface EmpresasCarouselProps {
  variant?: "dark" | "light";
}

export default function EmpresasCarousel({}: EmpresasCarouselProps) {
  // Duplicamos los logos para crear el efecto infinito
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradientes laterales */}
      <div className="pointer-events-none top-0 left-0 z-10 hidden h-full w-12 bg-linear-to-r from-white/10 to-transparent lg:absolute" />
      <div className="pointer-events-none top-0 right-0 z-10 hidden h-full w-12 bg-linear-to-l from-white/10 to-transparent lg:absolute" />

      {/* Logos */}
      <div className="animate-scroll hover:paused inline-flex w-full">
        {duplicatedCompanies.map((company, index) => (
          <div
            key={index}
            className="mx-0 flex items-center justify-center rounded-lg p-4 shadow-sm transition-all duration-300 select-none hover:shadow-md lg:mx-2"
          >
            <Link
              target="_blank"
              href={company.link}
              className="relative h-30 w-40 lg:h-50 lg:w-60"
            >
              <Image
                src={`/logos-empresas${company.src}`}
                alt={company.name}
                fill
                className="object-contain transition-all duration-300 hover:scale-120 hover:opacity-100"
              />
            </Link>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
