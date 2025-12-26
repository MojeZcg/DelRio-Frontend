"use client";

import { useState } from "react";
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

  return (
    <div className="hidden w-135 justify-center xl:flex 2xl:w-160">
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
                    src={src}
                    alt={`Hero image ${index + 1}`}
                    fill
                    priority={index === 0}
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
    </div>
  );
}
