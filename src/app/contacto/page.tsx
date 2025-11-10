export default function ContactPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-linear-to-br from-[#0a0f1f] via-[#101a35] to-[#0b1d42] px-6 pt-24 text-white">
      {/* Fondo con efecto de brillo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,99,255,0.2),transparent_60%)]"></div>

      <div className="relative z-10 w-full max-w-3xl text-center">
        <h1 className="mb-4 bg-linear-to-r from-[#1661ec] via-[#5422dd] to-[#6d2fd1] bg-clip-text text-5xl font-bold text-transparent">
          Contactanos
        </h1>
        <p className="mb-10 text-lg text-gray-300">
          Estamos para ayudarte. Completá el formulario o escribinos a nuestros
          canales directos.
        </p>

        <form
          action="mailto:contacto@delriointernet.com"
          method="post"
          encType="text/plain"
          className="mx-auto flex w-full max-w-2xl flex-col gap-6 text-left"
        >
          <div>
            <label
              htmlFor="nombre"
              className="mb-1 block text-sm font-medium text-gray-200"
            >
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              placeholder="Tu nombre completo"
              className="w-full rounded-lg border border-gray-600 bg-white/10 px-4 py-2 text-gray-100 placeholder-gray-400 focus:border-[#1661ec] focus:ring focus:ring-[#1661ec]/30"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-200"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="nombre@correo.com"
              className="w-full rounded-lg border border-gray-600 bg-white/10 px-4 py-2 text-gray-100 placeholder-gray-400 focus:border-[#1661ec] focus:ring focus:ring-[#1661ec]/30"
            />
          </div>

          <div>
            <label
              htmlFor="mensaje"
              className="mb-1 block text-sm font-medium text-gray-200"
            >
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              placeholder="Contanos cómo podemos ayudarte..."
              className="w-full rounded-lg border border-gray-600 bg-white/10 px-4 py-2 text-gray-100 placeholder-gray-400 focus:border-[#1661ec] focus:ring focus:ring-[#1661ec]/30"
              rows={6}
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-linear-to-r from-[#1661ec] via-[#5422dd] to-[#6d2fd1] py-3 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:opacity-90"
          >
            Enviar mensaje
          </button>
        </form>

        {/* Contacto directo */}
        <div className="mt-12 text-center text-gray-300">
          <p className="mb-1">
            📞 <strong>Teléfono:</strong>{" "}
            <a
              href="https://wa.me/+5492604001234"
              className="text-[#6d8cff] hover:underline"
            >
              +54 9 260 400 1234
            </a>
          </p>
          <p>
            ✉️ <strong>Correo:</strong>{" "}
            <a
              href="mailto:contacto@delriointernet.com"
              className="text-[#6d8cff] hover:underline"
            >
              contacto@delriointernet.com
            </a>
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Horario de atención: Lunes a Viernes de 8:30 a 18:00 y Sábados de
            9:00 a 13:00
          </p>
        </div>
      </div>
    </main>
  );
}
