"use client";
import { useParams } from "next/navigation";
// Datos de ejemplo por servicio
const servicios = {
  esencial: {
    nombre: "Fibra 100Mb",
    descripcion:
      "Internet simétrico de 100Mb ideal para uso básico y videollamadas.",
    precio: 19.99,
  },
  fibra300: {
    nombre: "Fibra 300Mb",
    descripcion:
      "Internet simétrico de 300Mb perfecto para streaming y teletrabajo.",
    precio: 29.99,
  },
  fibra600: {
    nombre: "Fibra 600Mb",
    descripcion:
      "Internet simétrico de alta velocidad para gamers y hogares conectados.",
    precio: 39.99,
  },
};

export default function ContratarPage() {
  const { servicio } = useParams();

  const servicioKey = Array.isArray(servicio) ? servicio[0] : servicio;
  const data = servicios[servicioKey as keyof typeof servicios] || {
    nombre: servicioKey || "Desconocido",
    descripcion: "Servicio no encontrado.",
    precio: null,
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-3xl font-bold">Contratar: {data.nombre}</h1>
      <p className="max-w-xl text-center text-lg">{data.descripcion}</p>
      {data.precio && (
        <p className="text-2xl font-semibold">Precio: {data.precio}€/mes</p>
      )}

      <button className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-lg text-white transition-all hover:bg-blue-700">
        Continuar con la contratación
      </button>
    </main>
  );
}
