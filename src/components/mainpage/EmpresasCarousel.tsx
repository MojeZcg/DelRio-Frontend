"use client";

import Image from "next/image";
import Link from "next/link";

const companies = [
  {
    name: "Chandon",
    src: "/chandon.webp",
    link: "https://www.chandon.com.ar/",
  },
  { name: "Holcim", src: "/holcim.webp", link: "https://www.holcim.com.ar/" },
  {
    name: "Tuboscope",
    src: "/tuboscope.webp",
    link: "https://www.nov.com/about/our-business-units/tuboscope",
  },
  {
    name: "Casa Tapaus",
    src: "/tapaus.webp",
    link: "https://www.instagram.com/casatapaus/?hl=en",
  },
  {
    name: "Matervini",
    src: "/matervini.webp",
    link: "https://www.matervini.com/",
  },
  { name: "Suri", src: "/suri.webp", link: "https://www.suri-sa.com.ar/" },
  {
    name: "Crexell Transportes S.A.",
    src: "/crexell.webp",
    link: "https://www.crexellsa.com/",
  },
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
  {
    name: "Lujan Agrícola",
    src: "/agricola.webp",
    link: "https://lujanagricola.com.ar/",
  },
];

interface EmpresasCarouselProps {
  variant?: "dark" | "light";
}

export default function EmpresasCarousel({}: EmpresasCarouselProps) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Logos */}
      <div className="flex">
        <div className="animate-scroll flex shrink-0">
          {companies.map((company, index) => (
            <div
              key={index}
              className="mx-0 flex shrink-0 items-center justify-center rounded-lg p-4 shadow-sm transition-all duration-300 select-none hover:shadow-md lg:mx-2"
            >
              <Link
                target="_blank"
                href={company.link}
                className="relative h-30 w-40 lg:h-40 lg:w-50"
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
        <div className="animate-scroll flex shrink-0" aria-hidden="true">
          {companies.map((company, index) => (
            <div
              key={`duplicate-${index}`}
              className="mx-0 flex shrink-0 items-center justify-center rounded-lg p-4 shadow-sm transition-all duration-300 select-none hover:shadow-md lg:mx-2"
            >
              <Link
                target="_blank"
                href={company.link}
                className="relative h-30 w-40 lg:h-40 lg:w-50"
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
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
}
