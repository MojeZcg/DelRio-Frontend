import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const getMonserrat = Montserrat({
  variable: "--font-monserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Del Rio Internet",
  description: "DelRio Isp website",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className={`${getMonserrat.variable} antialiased`}>
        <div className="fixed inset-0 -z-10">
          {/* Imagen de fondo */}
          <Image
            src="/bg.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
          />

          {/* Capa de difuminado negro */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <header>
          <div className="text-white">
            <nav className="fixed w-full border-b border-gray-300 bg-black/10 px-12 py-4 shadow-sm">
              <div className="flex items-center justify-between">
                <Link href="/" className="pl-6">
                  <Image
                    src="/logoTransparentWhite.png"
                    alt="DelRio Logo"
                    width={995}
                    height={511}
                    className="h-16 w-auto"
                  />
                </Link>
                <ul className="flex items-center gap-8 text-lg">
                  <li>
                    <Link href="/">Autogestión</Link>
                  </li>
                  <li>
                    <Link href="/">Servicios</Link>
                  </li>
                  <li>
                    <Link href="/">Empresas</Link>
                  </li>
                  <li>
                    <Link href="/">Bases y condiciones</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-gray-700 bg-black/20 px-8 py-6 text-sm text-gray-300">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} DelRio Internet. Todos los
              derechos reservados.
            </p>
            <Link
              href="/terminos"
              className="underline underline-offset-2 transition-colors hover:text-white"
            >
              Términos y Condiciones
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
