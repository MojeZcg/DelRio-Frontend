"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [estado, setEstado] = useState("");
  const [loading, setLoading] = useState(false);

  function emailValido(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(email);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setEstado("Enviando...");

    if (!emailValido(email)) {
      setEstado("Ingresá un correo válido (ejemplo: nombre@dominio.com)");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contactar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          nombre,
          mensaje,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setEstado("Mensaje enviado correctamente 🎉");
        setNombre("");
        setEmail("");
        setMensaje("");
      } else {
        setEstado("Error: " + data.detail);
      }
    } catch (error) {
      console.error(error);
      setEstado("Error de conexión con el servidor.");
    }

    setLoading(false);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-3xl flex-col gap-4 text-left"
      >
        <div>
          <Label
            htmlFor="nombre"
            className="mb-1 block text-sm font-medium text-gray-200"
          >
            Nombre
          </Label>
          <Input
            id="nombre"
            name="nombre"
            type="text"
            required
            placeholder="Tu nombre completo"
            className="bg-white/10 text-gray-100 placeholder-gray-400"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <Label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-gray-200"
          >
            Correo electrónico
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            placeholder="nombre@correo.com"
            className="bg-white/10 text-gray-100 placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Label
            htmlFor="mensaje"
            className="mb-1 block text-sm font-medium text-gray-200"
          >
            Mensaje
          </Label>
          <Textarea
            id="mensaje"
            name="mensaje"
            required
            placeholder="Contanos cómo podemos ayudarte..."
            className="min-h-42 bg-white/10 text-gray-100 placeholder-gray-400"
            rows={12}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="mt-2 h-12 w-full bg-linear-to-r from-(--delrio-light) via-(--delrio-medium) to-(--delrio-dark) text-base font-semibold text-white shadow-md ring shadow-white/20 transition-all duration-300 hover:opacity-70 disabled:opacity-50"
        >
          {loading ? "Enviando..." : "Enviar mensaje"}
        </Button>

        {estado && (
          <p
            className={`mt-2 text-center text-xs ${estado.includes("Error") ? "text-red-500" : "text-gray-300"}`}
          >
            {estado}
          </p>
        )}
      </form>
    </>
  );
}
