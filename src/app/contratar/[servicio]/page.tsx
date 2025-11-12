"use client";
import { useParams } from "next/navigation";

export default function ContratarPage() {
  const { servicio } = useParams();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1>Contratar: {servicio}</h1>
      <p>Detalles del servicio: {servicio}</p>
      {/* Aquí irá el formulario o botón de pago */}
    </main>
  );
}
