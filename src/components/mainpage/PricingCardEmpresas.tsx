"use client";

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
  supportPriority?: boolean;
  staticIP?: boolean;
  sla?: boolean;
  monitoring?: boolean;
  installation?: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  features: PlanFeatures;
  color: string;
  recomended?: boolean;
}

const pricingCardsEmpresas: PricingCardProps[] = [
  {
    title: "Empresa Estandard",
    description: "Conectividad confiable para tu negocio en crecimiento.",
    features: {
      speed: "50 Mbps",
      price: 0,
      installation: true,
      staticIP: true,
      supportPriority: true,
    },
    color: "#0a69b7",
  },
  {
    title: "Empresa Escencial",
    description: "Rendimiento garantizado para oficinas y equipos exigentes.",
    features: {
      speed: "100 Mbps",
      price: 0,
      installation: true,
      staticIP: true,
      supportPriority: true,
      sla: true,
      monitoring: true,
    },
    color: "#004aad",
    recomended: true,
  },
  {
    title: "Empresa Elite",
    description:
      "Máxima disponibilidad y soporte 24/7 para operaciones críticas.",
    features: {
      speed: "300 Mbps",
      price: 0,
      installation: true,
      staticIP: true,
      supportPriority: true,
      sla: true,
      monitoring: true,
    },
    color: "#002b7a",
  },
];

function PricingCardEmpresas({
  title,
  description,
  features,
  color,
  recomended,
}: PricingCardProps) {
  const comercial = process.env.COMERCIAL;
  return (
    <div className="relative overflow-visible pt-4 md:pt-0">
      <div
        className={`shadow-gray-302 flex flex-col items-center border-x border-b shadow-lg shadow-gray-300 lg:rounded-2xl lg:border-3 ${recomended ? "lg:border-green-500" : "lg:border-gray-100/50"} rounded-2xl border border-gray-300 shadow-sm lg:w-86`}
      >
        {recomended && (
          <div className="absolute top-1 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-lg bg-green-500 px-10 py-1 text-sm font-medium text-white shadow-md md:-top-4">
            Recomendado <BadgeCheck className="h-4 w-4" />
          </div>
        )}
        <div
          className="flex h-32 w-full flex-col items-center justify-center gap-0.5 rounded-t-xl text-center text-white"
          style={{ backgroundColor: color }}
        >
          <h4 className="text-2xl font-bold">{title}</h4>
          <p className="text-2xl">{features.speed}</p>
        </div>

        <div className="flex w-full flex-col items-center justify-center px-6">
          <p className="pt-3 text-center text-sm">{description}</p>

          <div className="flex w-full flex-col pt-4 pb-6 font-semibold">
            <span className="my-1 ml-1 flex items-center justify-between">
              Instalación profesional{" "}
              {features.installation && (
                <Check size={22} className="mr-3 text-green-600" />
              )}
            </span>

            <Separator className="my-2" />
            <span className="my-1 ml-1 flex items-center justify-between">
              Soporte técnico prioritario{" "}
              {features.supportPriority && (
                <Check size={22} className="mr-3 text-green-600" />
              )}
            </span>

            <Separator className="my-2" />
            <span className="my-1 ml-1 flex items-center justify-between">
              IP pública fija{" "}
              {features.staticIP && (
                <Check size={22} className="mr-3 text-green-600" />
              )}
            </span>

            <Separator className="my-2" />
            <div className="flex items-center justify-between">
              <div className="my-1 ml-1 flex items-center gap-2">
                Beneficios Full
                <HoverCard>
                  <HoverCardTrigger className="flex items-center">
                    <Info size={16} />
                  </HoverCardTrigger>
                  <HoverCardContent className="max-w-[260px] text-sm leading-snug">
                    Posiblididad de contratar los{" "}
                    <strong>Beneficios full</strong>, con{" "}
                    <strong>SLA personalizado</strong> con{" "}
                    <strong>Soporte 24/7 y monitoreo de la red</strong>, ademas
                    de más beneficios exclusivos.
                  </HoverCardContent>
                </HoverCard>
              </div>
              {features.staticIP && (
                <Check size={22} className="mr-3 text-green-600" />
              )}
            </div>
          </div>

          <Link
            target="_blank"
            href={`https://wa.me/${comercial ?? "542615861188"}?text=Hola%21%20Quiero%20solicitar%20el%20plan%20${encodeURIComponent(title)}`}
            className="group rounded-lg px-10 py-3 font-bold text-white shadow-lg ring ring-transparent transition-all duration-500"
            style={{ backgroundColor: color }}
          >
            <span className="transition-all duration-500 group-hover:text-white">
              Solicitar asesor comercial
            </span>
          </Link>

          <p className="my-4 text-center text-xs text-gray-500">
            * Servicio sujeto a disponibilidad técnica y condiciones
            comerciales.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PricingCardsEmpresas() {
  return (
    <div className="w-full">
      {/* 🖥️ Desktop layout */}
      <div className="hidden justify-center gap-4 md:flex xl:gap-16">
        {pricingCardsEmpresas.map((card, index) => (
          <PricingCardEmpresas key={index} {...card} />
        ))}
      </div>

      {/* 📱 Mobile carousel */}
      <div className="md:hidden">
        <Carousel className="mx-auto w-full max-w-68">
          <CarouselContent>
            {pricingCardsEmpresas.map((card, index) => (
              <CarouselItem key={index}>
                <PricingCardEmpresas {...card} />
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
