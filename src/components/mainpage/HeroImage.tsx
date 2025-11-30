"use client";
import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

export default function HeroImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative flex justify-center">
      {/* Skeleton mientras la imagen carga */}
      {!isLoaded && (
        <Skeleton className="pointer-events-none hidden h-100 w-auto rounded-xl select-none xl:block 2xl:h-100" />
      )}

      {/* Imagen principal */}
      <Image
        src="/heroimage.webp"
        alt="Familia conectada en casa"
        width={1920}
        height={1282}
        priority
        onLoad={() => setIsLoaded(true)}
        className={`pointer-events-none hidden h-80 w-auto rounded-xl opacity-90 shadow-lg transition-opacity duration-500 select-none xl:flex 2xl:h-110 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
