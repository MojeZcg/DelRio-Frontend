import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useState } from "react";

export default function ContactImage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-2xl">
      {!loaded && (
        <Skeleton className="absolute inset-0 h-full w-full rounded-2xl" />
      )}

      <Image
        src="/contacto.webp"
        alt="Contacto"
        fill
        className={`object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
