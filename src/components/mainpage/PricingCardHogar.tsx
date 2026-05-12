import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
  tv?: boolean;
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
    title: "Plan Esencial",
    description: "Velocidad para navegación, redes sociales y uso básico.",
    features: {
      speed: "100 Mbps",
      price: 20000,
      installation: true,
      tv: true,
      support: true,
      wifi: true,
      full: false,
    },
    color: "#1661ec",
    planmsg: "Hola! Quiero saber mas sobre el Plan Esencial",
  },
  {
    title: "Plan Estándar",
    description: "Equilibrio perfecto para hogares con múltiples dispositivos.",
    features: {
      speed: "50 Mbps",
      price: 15000,
      installation: true,
      tv: true,
      support: true,
      wifi: true,
      full: false,
    },
    recomended: true,
    color: "#323dd8",
    planmsg: "Hola! Quiero saber mas sobre el Plan Standard",
  },
  {
    title: "Plan Élite",
    description: "Velocidad máxima para streaming, gaming y trabajo remoto.",
    features: {
      speed: "300 Mbps",
      price: 30000,
      installation: true,
      tv: true,
      support: true,
      wifi: true,
      full: false,
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
  { label: "Soporte Especializado", key: "support" },
  { label: "Series, Peliculas, Deportes y TV", key: "tv" },
  { label: "WiFi 2.4/5Ghz", key: "wifi" },
  {
    label: (
      <div className="flex items-center justify-between gap-1.5">
        Accede a
        <HoverCard>
          <HoverCardTrigger className="flex items-center">
            <span className="bg-linear-to-r from-(--delrio-light) via-(--delrio-medium) to-(--delrio-dark) bg-clip-text text-transparent">
              Beneficios Full
            </span>{" "}
            <Info size={16} className="hidden lg:flex" />
          </HoverCardTrigger>
          <HoverCardContent className="max-w-65 text-sm leading-snug">
            Posiblididad de contratar los beneficios full, con{" "}
            <strong>IP fija</strong>, Wifi 5/6* y
            <strong> soporte especializado</strong>, ademas de beneficios
            exclusivos.
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
        className={`flex h-full w-full max-w-68 flex-col items-center overflow-hidden rounded-2xl border lg:w-72 lg:max-w-none lg:border-3 lg:shadow-lg lg:shadow-gray-300 xl:w-86 ${recomended ? "lg:border-green-500" : "lg:border-gray-100/20"}`}
      >
        {recomended && (
          <div className="absolute top-1 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-xl bg-green-500 px-10 py-1 text-sm font-medium text-white shadow-md lg:-top-4">
            Recomendado <BadgeCheck className="h-4 w-4" />
          </div>
        )}
        <div
          className="flex h-36 w-full flex-col items-center justify-center rounded-t-lg text-center text-white"
          style={{ backgroundColor: color }}
        >
          <h3 className="pb-2 text-3xl font-bold">{title}</h3>

          <p className="max-w-76 text-center text-[13.5px] font-medium">
            {description}
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center px-6 pb-2">
          <div className="flex w-full flex-col gap-2 pt-6 pb-8 font-semibold">
            {featureList.map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
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
            title="Contrata Ahora Internet"
            target="_blank"
            rel="noopener noreferrer"
            href={`${contactos.comercial.whatsapp}?text=${encodeURIComponent(planmsg)}`}
            className="group mb-4 rounded-lg px-8 py-3 font-bold text-white shadow-lg ring ring-transparent transition-all duration-300 hover:scale-110 lg:px-12"
            style={{ backgroundColor: color }}
          >
            <span className="transition-all duration-500 group-hover:text-white">
              Contrata ahora
            </span>
          </Link>
          <span className="mb-4 text-xs text-gray-600">
            * Estos servicios estan sujetos a disponibilidad técnica y
            condiciones de red.
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PricingCards() {
  return (
    <div id="planes" className="w-full scroll-mt-27">
      {/* 🖥️ Desktop layout */}
      <div className="hidden justify-center gap-4 bg-transparent md:flex xl:gap-16">
        {pricingCards.map((card, index) => (
          <PricingCard key={index} {...card} />
        ))}
      </div>

      {/* 📱 Mobile carousel */}
      <div className="px-2 md:hidden">
        <Carousel
          className="w-full bg-transparent"
          opts={{ align: "center", startIndex: 1 }}
        >
          <CarouselContent className="">
            {pricingCards.map((card, index) => (
              <CarouselItem
                key={index}
                className="flex basis-[70%] justify-center"
              >
                <PricingCard {...card} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
