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
  planslug: string;
}

const pricingCards: PricingCardProps[] = [
  {
    title: "Plan Standard",
    description:
      "Velocidad mínima para navegación, redes sociales y uso básico.",
    features: {
      speed: "50 Mbps",
      price: 15000,
      installation: true,
      support24: false,
      wifi: true,
    },
    color: "#1661ec",
    planslug: "standard",
  },
  {
    title: "Plan Esencial",
    description: "Equilibrio perfecto para hogares con múltiples dispositivos.",
    features: {
      speed: "100 Mbps",
      price: 20000,
      installation: true,
      support24: false,
      wifi: true,
    },
    color: "#323dd8",
    recomended: true,
    planslug: "esencial",
  },
  {
    title: "Plan Élite",
    description: "Velocidad máxima para streaming, gaming y trabajo remoto.",
    features: {
      speed: "300 Mbps",
      price: 30000,
      installation: true,
      support24: false,
      wifi: true,
      benefits: true,
    },
    color: "#24228f",
    planslug: "elite",
  },
];

interface FeatureItem {
  label: React.ReactNode;
  key: keyof PlanFeatures;
}

const featureList: FeatureItem[] = [
  { label: "Instalación sin costo", key: "installation" },
  { label: "Soporte técnico especializado", key: "support24" },
  { label: "WiFi 6", key: "wifi" },
  { label: "IP pública fija", key: "staticIP" },
  {
    label: (
      <HoverCard>
        <HoverCardTrigger className="flex items-center gap-1.5">
          Beneficios Exclusivos <Info size={14} />
        </HoverCardTrigger>
        <HoverCardContent className="max-w-[260px] text-sm leading-snug">
          Acceso al <strong>Club de Beneficios</strong> con descuentos
          exclusivos y <strong>plataforma de entretenimiento</strong> incluida.
        </HoverCardContent>
      </HoverCard>
    ),
    key: "benefits",
  },
];

function PricingCard({
  title,
  description,
  features,
  color,
  recomended,
  planslug,
}: PricingCardProps) {
  return (
    <div className="relative overflow-visible rounded-2xl pt-4 lg:p-0">
      <div
        className={`flex h-full w-full flex-col items-center overflow-hidden border-x border-b shadow-lg shadow-gray-300 lg:w-72 lg:rounded-2xl lg:border-3 xl:w-82 ${recomended ? "lg:border-green-500" : "lg:border-gray-100/20"}`}
      >
        {recomended && (
          <div className="absolute top-1 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-xl bg-green-500 px-10 py-1 text-sm font-medium text-white shadow-md lg:-top-4">
            Recomendado <BadgeCheck className="h-4 w-4" />
          </div>
        )}
        <div
          className="flex h-32 w-full flex-col items-center justify-center rounded-t-lg text-center text-white"
          style={{ backgroundColor: color }}
        >
          <h4 className="text-2xl font-bold">{title}</h4>
          <p className="text-2xl">{features.speed}</p>
        </div>

        <div className="flex w-full flex-col items-center justify-center px-6">
          <p className="pt-3 pb-6 text-center text-xs">{description}</p>

          <div className="flex w-full flex-col gap-3 pb-8 font-semibold">
            {featureList.map((item, i) => (
              <div key={i} className="flex flex-col gap-3">
                <span className="my-1 ml-0.5 flex items-center justify-between">
                  {item.label}
                  {features[item.key] && (
                    <Check size={22} className="mr-1 text-green-600" />
                  )}
                </span>
                {i < featureList.length - 1 && <Separator className="" />}
              </div>
            ))}
          </div>

          <Link
            href={`/contratar/${planslug}`}
            className="group mb-6 rounded-lg px-12 py-3 font-bold text-white shadow-lg ring ring-transparent transition-all duration-500"
            style={{ backgroundColor: color }}
          >
            <span className="transition-all duration-500 group-hover:text-white">
              Contrata ahora
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PricingCards() {
  return (
    <div className="w-full">
      {/* 🖥️ Desktop layout */}
      <div className="hidden justify-center gap-4 bg-transparent lg:flex xl:gap-16">
        {pricingCards.map((card, index) => (
          <PricingCard key={index} {...card} />
        ))}
      </div>

      {/* 📱 Mobile carousel */}
      <div className="lg:hidden">
        <Carousel className="mx-auto w-full max-w-68 bg-transparent">
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
