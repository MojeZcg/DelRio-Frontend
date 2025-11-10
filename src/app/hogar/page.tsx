import Link from "next/link";

import { BadgeCheck, Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// 🏠 HERO SECTION
function HeroHogar() {
  return (
    <section className="w-full bg-transparent py-16 text-center text-white">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold md:text-5xl">
          Internet Hogar DelRio
        </h1>
        <p className="mt-4 text-lg text-blue-100">
          Conectá tu hogar con velocidades simétricas, WiFi 6 y soporte
          confiable. Elegí el plan que mejor se adapte a vos.
        </p>
        <Link
          href="#planes"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-blue-800 shadow-md transition-all hover:bg-blue-100"
        >
          Ver planes
        </Link>
      </div>
    </section>
  );
}

// 💡 PRICING CARDS SECTION
interface PlanFeatures {
  speed: string;
  price: number;
  installation?: boolean;
  support?: boolean;
  wifi?: boolean;
  benefits?: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  features: PlanFeatures;
  color: string;
  recomended?: boolean;
}

const pricingCards: PricingCardProps[] = [
  {
    title: "Plan Standard",
    description: "Velocidad mínima para navegación y uso básico.",
    features: {
      speed: "Velocidad TOPE simétrica",
      price: 15000,
      installation: true,
      support: true,
      wifi: true,
    },
    color: "#1661ec",
  },
  {
    title: "Plan Esencial",
    description: "Mayor rendimiento y prioridad de red sobre el básico.",
    features: {
      speed: "Velocidad intermedia",
      price: 20000,
      installation: true,
      support: true,
      wifi: true,
    },
    color: "#323dd8",
    recomended: true,
  },
  {
    title: "Plan Élite",
    description: "Máxima velocidad disponible y beneficios exclusivos.",
    features: {
      speed: "Velocidad máxima",
      price: 30000,
      installation: true,
      support: true,
      wifi: true,
      benefits: true,
    },
    color: "#24228f",
  },
];

function PricingCard({
  title,
  description,
  features,
  color,
  recomended,
}: PricingCardProps) {
  return (
    <div className="relative h-full overflow-visible pt-4 md:pt-0">
      <div className="flex flex-col items-center rounded-2xl border border-gray-200 shadow-sm lg:w-82">
        {recomended && (
          <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-lg bg-green-600 px-12 py-1 text-sm font-medium text-white shadow">
            Recomendado <BadgeCheck className="h-4 w-4" />
          </div>
        )}

        <div
          className="flex h-32 w-full flex-col items-center justify-center gap-0.5 rounded-t-2xl text-center text-white"
          style={{ backgroundColor: color }}
        >
          <h4 className="text-2xl font-bold">{title}</h4>
          <p className="text-base">{features.speed}</p>
        </div>

        <div className="flex w-full flex-col items-center px-6">
          <p className="pt-3 text-center text-sm text-gray-600">
            {description}
          </p>

          <div className="flex w-full flex-col pt-3 pb-6 text-sm font-semibold text-gray-700">
            <span className="my-1 flex justify-between">
              Instalación sin costo{" "}
              {features.installation && <Check className="text-green-600" />}
            </span>
            <Separator className="my-2" />
            <span className="my-1 flex justify-between">
              Soporte horario comercial{" "}
              {features.support && <Check className="text-green-600" />}
            </span>
            <Separator className="my-2" />
            <span className="my-1 flex justify-between">
              WiFi 6 incluido{" "}
              {features.wifi && <Check className="text-green-600" />}
            </span>
            <Separator className="my-2" />
            <span className="my-1 flex justify-between">
              Beneficios exclusivos{" "}
              {features.benefits && <Check className="text-green-600" />}
            </span>
          </div>

          <Link
            href="/contratar"
            className="group rounded-lg px-10 py-3 font-bold text-white shadow-lg transition-all duration-500"
            style={{ backgroundColor: color }}
          >
            Contratá ahora
          </Link>

          <p className="my-4 text-center text-xs leading-snug text-gray-500">
            * Velocidad relativa sujeta a condiciones técnicas y de red. Se
            garantiza un mínimo del 60 %.
          </p>
        </div>
      </div>
    </div>
  );
}

function PricingCardsHogar() {
  return (
    <section id="planes" className="w-full scroll-mt-24 bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-14 text-center text-3xl font-bold text-gray-800">
          Planes Hogar
        </h2>

        <div className="hidden justify-center gap-6 lg:flex">
          {pricingCards.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
        </div>

        {/* 📱 Mobile */}
        <div className="lg:hidden">
          <Carousel className="mx-auto w-full max-w-68">
            <CarouselContent>
              {pricingCards.map((card, index) => (
                <CarouselItem key={index}>
                  <PricingCard {...card} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

// 🧩 BENEFITS GRID
function BenefitsGrid() {
  const benefits = [
    { text: "Velocidades simétricas en todos los planes" },
    { text: "Soporte remoto con resolución rápida" },
    { text: "Instalación profesional incluida" },
    { text: "WiFi 6 con mejor cobertura y rendimiento" },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-6">
        <h3 className="mb-8 text-center text-2xl font-bold text-gray-50">
          Beneficios del servicio DelRio Hogar
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg bg-gray-50 p-4 shadow-sm"
            >
              <Check className="text-green-600" />
              <span className="text-sm font-medium text-gray-700">
                {b.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ⚖️ LEGAL FOOTER
function FooterLegal() {
  return (
    <footer className="py-6 text-center text-xs text-gray-200">
      * Las velocidades indicadas son máximas teóricas. Se garantiza un mínimo
      del 60 % del ancho de banda contratado, sujeto a disponibilidad técnica y
      condiciones de red.
    </footer>
  );
}

// 🧱 PAGE EXPORT
export default function InternetHogarPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white bg-linear-to-br from-(--delrio-medium) to-(--delrio-dark) pt-24">
      <HeroHogar />
      <PricingCardsHogar />
      <BenefitsGrid />
      <FooterLegal />
    </main>
  );
}
