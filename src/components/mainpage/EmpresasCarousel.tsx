import Image from "next/image";
import Link from "next/link";

const companies = [
  { name: "Holcim", src: "/holcim.webp", link: "https://www.holcim.com.ar/" },
  {
    name: "Tuboscope",
    src: "/tuboscope.webp",
    link: "https://www.nov.com/about/our-business-units/tuboscope",
  },
  {
    name: "Casarena",
    src: "/casarena.webp",
    link: "https://www.casarena.com/",
  },
  {
    name: "Chandon",
    src: "/chandon.webp",
    link: "https://www.chandon.com.ar/",
  },
  {
    name: "Himan",
    src: "/himan.webp",
    link: "https://himan.com.ar/",
  },
  {
    name: "Tahan",
    src: "/tahan.webp",
    link: "https://empresastahan.com/",
  },
  {
    name: "Matervini",
    src: "/matervini.webp",
    link: "https://www.matervini.com/",
  },
  {
    name: "Casa Tapaus",
    src: "/tapaus.webp",
    link: "https://www.instagram.com/casatapaus/?hl=en",
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

export default function EmpresasCarousel() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="animate-logos-scroll flex">
        {[...Array(2)].map((_, loopIndex) => (
          <div className="flex shrink-0" key={loopIndex}>
            {companies.map((company, companyIndex) => (
              <div
                key={`${loopIndex}-${companyIndex}`}
                className="flex shrink-0 items-center justify-center rounded-lg px-0 py-2 shadow-sm transition-all duration-300 select-none hover:shadow-md sm:mx-2 lg:px-3"
              >
                <Link
                  title={`${company.name} Sitio Oficial`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={company.link}
                  className="relative h-30 w-40 lg:h-35 lg:w-45"
                >
                  <Image
                    title={`${company.name} Logo DelRio Internet`}
                    src={`/logos-empresas${company.src}`}
                    alt={company.name}
                    fill
                    sizes="180px"
                    className="object-contain transition-all duration-300 hover:scale-120 hover:opacity-100"
                  />
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
