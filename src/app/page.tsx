import PricingCardsEmpresas from "@/components/mainpage/PricingCardEmpresas";
import PricingCards from "@/components/mainpage/PricingCardHogar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-24">
      {/* === HERO === */}
      <div className="fixed inset-0 -z-10">
        {/* Fondo principal */}
        <Image
          src="/bg.webp"
          alt="Fondo principal DelRio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Texto + Imagen lateral */}
      <div className="flex h-160 w-full flex-col items-center justify-center md:flex-row xl:gap-20 2xl:gap-32">
        <div className="flex max-w-xl flex-col items-center gap-6 text-center text-white md:items-start md:text-left">
          <h1 className="text-5xl leading-tight font-bold">
            Tu{" "}
            <span className="bg-linear-to-r from-[#1661ec] via-[#5422dd] to-[#6d2fd1] bg-clip-text text-transparent">
              conexión
            </span>{" "}
            al mundo, más humana que nunca.
          </h1>
          <p className="max-w-sm text-sm text-gray-200 md:text-lg">
            Conectamos tu hogar con la velocidad y estabilidad que merecés.
          </p>

          <Dialog>
            <DialogTrigger className="mt-4 rounded-lg bg-linear-to-r from-[#1661ec] via-[#5422dd] to-[#6d2fd1] px-6 py-3 text-base font-medium ring-2 transition-all duration-500 hover:bg-[#5846e8] hover:shadow-lg hover:shadow-white/30 md:px-32">
              Comprueba la disponibilidad{" "}
              <span className="hidden md:inline"> en tu zona</span>
            </DialogTrigger>
            <DialogContent className="bg-blue-950 text-white">
              <DialogHeader>
                <DialogTitle>Comprueba la disponibilidad</DialogTitle>
                <DialogDescription className="mt-4 text-sm leading-snug text-white/80">
                  Para verificar si nuestro servicio está disponible en tu zona,
                  por favor comunicate con nosotros a través de nuestro número
                  de teléfono o dirección de correo electrónico. Nuestro equipo
                  estará encantado de asistirte y proporcionarte la información
                  que necesitás.
                </DialogDescription>
                <div className="mt-4 flex flex-col items-center gap-2 text-sm">
                  <p>
                    📞 <strong>Teléfono:</strong>{" "}
                    <a
                      href="tel:+5492604001234"
                      className="text-blue-600 hover:underline"
                    >
                      +54 9 260 400 1234
                    </a>
                  </p>
                  <p>
                    ✉️ <strong>Correo:</strong>{" "}
                    <a
                      href="mailto:contacto@delriointernet.com"
                      className="text-blue-600 hover:underline"
                    >
                      contacto@delriointernet.com
                    </a>
                  </p>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        {/* Imagen ilustrativa lateral */}
        <div className="bg-black">
          <Image
            src="/heroimage.webp"
            alt="Familia conectada en casa"
            width={1920}
            height={1080}
            className="hidden h-100 w-auto rounded-xl opacity-95 shadow-lg xl:block 2xl:h-110"
          />
        </div>
      </div>

      {/* === PLANES HOGAR === */}
      <section
        id="planes"
        className="-z-10 flex scroll-mt-24 flex-col items-center justify-center bg-white text-black"
      >
        <h3 className="py-12 text-center text-3xl font-semibold">
          Conocé nuestros planes diseñados para ti
        </h3>

        <PricingCards />

        <p className="max-w-2xl py-10 text-center text-sm">
          Hasta{" "}
          <span className="bg-linear-to-r from-[#1661ec] via-[#5422dd] to-[#6d2fd1] bg-clip-text text-transparent">
            300 Mbps
          </span>{" "}
          con WiFi 6, conexión estable y soporte prioritario. Accedé a series,
          películas y descuentos exclusivos, con cámaras de seguridad en
          comodato e IP fija para mayor control.
        </p>
      </section>

      {/* === DIFERENCIADORES === */}
      <section className="bg-linear-to-r from-[#1661ec] to-[#6d2fd1] py-20 text-center text-white">
        <h4 className="mb-10 text-3xl font-semibold">
          ¿Por qué elegir DelRio?
        </h4>
        <div className="flex flex-wrap justify-center gap-10 text-lg">
          <div className="max-w-xs">
            <p className="font-bold">Atención Personalizada</p>
            <p className="text-white/80">
              Soporte humano y asistencia técnica directa, sin bots ni esperas.
            </p>
          </div>
          <div className="max-w-xs">
            <p className="font-bold">Infraestructura Propia</p>
            <p className="text-white/80">
              Control total de red para garantizar estabilidad y rendimiento.
            </p>
          </div>
          <div className="max-w-xs">
            <p className="font-bold">Soporte 24/7</p>
            <p className="text-white/80">
              Siempre disponibles, cuando más lo necesitás.
            </p>
          </div>
        </div>
      </section>

      {/* === PLANES EMPRESAS === */}
      <section
        id="planesempresas"
        className="flex scroll-mt-24 flex-col items-center justify-center bg-white text-black"
      >
        <h3 className="py-12 text-center text-3xl font-semibold">
          Planes para empresas que impulsan tu negocio
        </h3>

        <PricingCardsEmpresas />

        <p className="max-w-2xl py-10 text-center text-sm">
          Soluciones de internet empresarial desde{" "}
          <span className="bg-linear-to-r from-[#1661ec] via-[#5422dd] to-[#6d2fd1] bg-clip-text text-transparent">
            500 Mbps
          </span>{" "}
          con instalación profesional, soporte técnico prioritario y IP fija.
          Ideal para mantener tu negocio siempre conectado y eficiente.
        </p>
      </section>

      {/* === CIERRE VISUAL === */}
      <section className="relative bg-black/90 py-16 text-center text-white">
        <h4 className="mb-4 text-2xl font-semibold">
          Más que internet, somos tu conexión al futuro.
        </h4>
        <Link
          href="/contacto"
          className="mt-4 inline-block rounded-lg bg-white/10 px-8 py-3 font-medium text-white ring-1 ring-white/30 transition-all hover:bg-white/20"
        >
          Contactá con nosotros
        </Link>
      </section>
    </main>
  );
}
