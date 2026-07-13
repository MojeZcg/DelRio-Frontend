"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const images = [
  "/carrousel/1.webp",
  "/carrousel/2.webp",
  "/carrousel/3.webp",
  "/carrousel/4.webp",
];

export default function HeroCarousel() {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  // El carrusel solo es visible en xl+; en mobile evitamos descargar las
  // imágenes e inicializar embla montándolo únicamente cuando corresponde.
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className="hidden w-135 justify-center xl:flex 2xl:w-160">
      {!isDesktop ? (
        <Skeleton className="aspect-3/2 w-full rounded-xl" />
      ) : (
        <Carousel
          className="w-full"
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((src, index) => {
              const isLoaded = loadedImages[index];

              return (
                <CarouselItem key={src}>
                  <div className="relative aspect-3/2 w-full overflow-hidden rounded-xl">
                    {/* Skeleton */}
                    {!isLoaded && (
                      <Skeleton className="absolute inset-0 rounded-xl" />
                    )}

                    {/* Image */}
                    <Image
                      title={`Hero image ${index + 1} DelRio Internet`}
                      src={src}
                      alt={`Hero image ${index + 1}`}
                      fill
                      sizes="(min-width: 96rem) 40rem, 33.75rem"
                      loading={index === 0 ? "eager" : "lazy"}
                      onLoad={() =>
                        setLoadedImages((prev) => ({
                          ...prev,
                          [index]: true,
                        }))
                      }
                      className={`object-cover transition-opacity duration-500 ${
                        isLoaded ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      )}
    </div>
  );
}
