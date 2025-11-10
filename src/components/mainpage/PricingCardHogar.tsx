import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck, Check, Info } from "lucide-react";

interface PlanFeatures {
  speed: string;
  price: number;
  installation?: boolean;
  support24?: boolean;
  wifi?: boolean;
  staticIP?: boolean;
  benefits?: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  features: PlanFeatures;
  color: string;
  recomended?: boolean;
  vrelativa?: string;
}

const pricingCards: PricingCardProps[] = [
  {
    title: "Plan Standard",
    description:
      "Velocidad mínima para navegación, redes sociales y uso básico.",
    features: {
      speed: "Velocidad basica",
      price: 15000,
      installation: true,
      support24: false,
      wifi: true,
    },
    vrelativa: "50 Mbps",
    color: "#1661ec",
  },
  {
    title: "Plan Esencial",
    description: "Equilibrio perfecto para hogares con múltiples dispositivos.",
    features: {
      speed: "Velocidad intermedia",
      price: 20000,
      installation: true,
      support24: false,
      wifi: true,
    },
    vrelativa: "100 Mbps",
    color: "#323dd8",
    recomended: true,
  },
  {
    title: "Plan Élite",
    description: "Velocidad máxima para streaming, gaming y trabajo remoto.",
    features: {
      speed: "Velocidad máxima",
      price: 30000,
      installation: true,
      support24: false,
      wifi: true,
      benefits: true,
    },
    vrelativa: "300 Mbps",
    color: "#24228f",
  },
];

function PricingCard({
  title,
  description,
  features,
  color,
  recomended,
  vrelativa,
}: PricingCardProps) {
  return (
    <div className="relative overflow-visible pt-4 md:pt-0">
      <div className="flex h-full w-full flex-col items-center rounded-2xl border border-gray-300 shadow-sm shadow-gray-300 lg:w-72 xl:w-82">
        {recomended && (
          <div className="absolute top-1 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-lg bg-green-500 px-10 py-1 text-sm font-medium text-white shadow-md md:-top-4">
            Recomendado <BadgeCheck className="h-4 w-4" />
          </div>
        )}
        <div
          className="flex h-32 w-full flex-col items-center justify-center gap-0.5 rounded-t-2xl text-center text-white"
          style={{ backgroundColor: color }}
        >
          <h4 className="text-2xl font-bold">{title}</h4>
          <p className="text-2xl">{features.speed}</p>
        </div>

        <div className="flex w-full flex-col items-center justify-center px-6">
          <p className="pt-3 pb-1 text-center text-xs">{description}</p>

          <div className="flex w-full flex-col pt-3 pb-6 font-semibold">
            <span className="my-1 ml-1 flex items-center justify-between">
              Instalación sin costo{" "}
              {features.installation && (
                <Check size={22} className="mr-3 text-green-600" />
              )}
            </span>

            <Separator className="my-2" />
            <span className="my-1 ml-1 flex items-center justify-between">
              Soporte 24/7{" "}
              {features.support24 && (
                <Check size={22} className="mr-3 text-green-600" />
              )}
            </span>
            <Separator className="my-2" />
            <span className="my-1 ml-1 flex items-center justify-between">
              WiFi 6{" "}
              {features.wifi && (
                <Check size={22} className="mr-3 text-green-600" />
              )}
            </span>
            <Separator className="my-2" />
            <span className="my-1 ml-1 flex items-center justify-between gap-2">
              IP pública fija{" "}
              {features.staticIP && (
                <Check size={22} className="mr-3 text-green-600" />
              )}
            </span>
            <Separator className="my-2" />
            <span className="my-1 ml-1 flex items-center justify-between gap-2">
              <HoverCard>
                <HoverCardTrigger className="flex items-center gap-1.5">
                  Beneficios Exclusivos <Info size={14} />
                </HoverCardTrigger>
                <HoverCardContent className="max-w-[260px] text-sm leading-snug">
                  Acceso al <strong>Club de Beneficios</strong> con descuentos
                  exclusivos y <strong>plataforma de entretenimiento</strong>{" "}
                  incluida.
                </HoverCardContent>
              </HoverCard>
              {features.benefits && (
                <Check size={22} className="mr-3 text-green-600" />
              )}
            </span>
          </div>

          <Link
            href="/"
            className="group rounded-lg px-12 py-3 font-bold text-white shadow-lg ring ring-transparent transition-all duration-500"
            style={{ backgroundColor: color }}
          >
            <span className="transition-all duration-500 group-hover:text-white">
              Contrata ahora
            </span>
          </Link>
          <p className="my-4 text-center text-xs text-gray-500">
            * Velocidad relativa ({vrelativa}) máxima teórica. Mínimo
            garantizado del 60 %, sujeto a disponibilidad de red.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PricingCards() {
  return (
    <div className="w-full">
      {/* 🖥️ Desktop layout */}
      <div className="hidden justify-center gap-4 lg:flex xl:gap-16">
        {pricingCards.map((card, index) => (
          <PricingCard key={index} {...card} />
        ))}
      </div>

      {/* 📱 Mobile carousel */}
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
  );
}
