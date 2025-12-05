"use client";
import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

export default function ContactImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative hidden max-w-2xl justify-center xl:flex">
      {/* Skeleton mientras la imagen carga */}
      {!isLoaded && (
        <Skeleton className="pointer-events-none hidden h-126 w-auto rounded-2xl select-none lg:block" />
      )}

      {/* Imagen */}
      <Image
        src="/contacto.webp"
        alt="Contacto"
        width={1920}
        height={1558}
        priority
        onLoad={() => setIsLoaded(true)}
        className={`pointer-events-none h-auto w-full rounded-2xl transition-opacity duration-300 select-none ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
