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
import { contactos } from "@/lib/contacto";

interface PlanFeatures {
  speed: string;
  price: number;
  installation?: boolean;
  support?: boolean;
  wifi?: boolean;
  full?: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  features: PlanFeatures;
  color: string;
  recomended?: boolean;
  planmsg: string;
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
      support: true,
      wifi: true,
      full: true,
    },
    color: "#1661ec",
    planmsg: "Hola! Quiero saber mas sobre el Plan Standard",
  },
  {
    title: "Plan Esencial",
    description: "Equilibrio perfecto para hogares con múltiples dispositivos.",
    features: {
      speed: "100 Mbps",
      price: 20000,
      installation: true,
      support: true,
      wifi: true,
      full: true,
    },
    color: "#323dd8",
    recomended: true,
    planmsg: "Hola! Quiero saber mas sobre el Plan Esencial",
  },
  {
    title: "Plan Élite",
    description: "Velocidad máxima para streaming, gaming y trabajo remoto.",
    features: {
      speed: "300 Mbps",
      price: 30000,
      installation: true,
      support: true,
      wifi: true,
      full: true,
    },
    color: "#24228f",
    planmsg: "Hola! Quiero saber mas sobre el Plan Élite",
  },
];

interface FeatureItem {
  label: React.ReactNode;
  key: keyof PlanFeatures;
}

const featureList: FeatureItem[] = [
  { label: "Instalación Profesional", key: "installation" },
  { label: "Soporte técnico especializado", key: "support" },
  { label: "WiFi 6", key: "wifi" },
  {
    label: (
      <div className="flex items-center gap-2">
        Beneficios Full
        <HoverCard>
          <HoverCardTrigger className="flex items-center">
            <Info size={16} />
          </HoverCardTrigger>
          <HoverCardContent className="max-w-[260px] text-sm leading-snug">
            Posiblididad de contratar los beneficios full, con{" "}
            <strong>IP fija</strong> con
            <strong> soporte especializado 24/7</strong>, monitoreo de la red y
            más beneficios exclusivos.
          </HoverCardContent>
        </HoverCard>
      </div>
    ),
    key: "full",
  },
];

function PricingCard({
  title,
  description,
  features,
  color,
  recomended,
  planmsg,
}: PricingCardProps) {
  return (
    <div className="relative overflow-visible rounded-2xl pt-4 lg:p-0">
      <div
        className={`flex h-full w-68 flex-col items-center overflow-hidden border-x border-b shadow-lg shadow-gray-300 lg:w-72 lg:rounded-2xl lg:border-3 xl:w-86 ${recomended ? "lg:border-green-500" : "lg:border-gray-100/20"}`}
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
          <h3 className="pb-1 text-3xl font-bold">{title}</h3>
          <p className="text-2xl">{features.speed}</p>
        </div>

        <div className="flex w-full flex-col items-center justify-center px-6 pb-2">
          <p className="pt-4 pb-6 text-center text-xs">{description}</p>

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
            target="_blank"
            href={`${contactos.comercial.whatsapp}?text=${encodeURIComponent(planmsg)}`}
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
      <div className="hidden justify-center gap-4 bg-transparent md:flex xl:gap-16">
        {pricingCards.map((card, index) => (
          <PricingCard key={index} {...card} />
        ))}
      </div>

      {/* 📱 Mobile carousel */}
      <div className="md:hidden">
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
