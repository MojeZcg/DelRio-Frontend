"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Internet Hogar", href: "/hogar" },
    { name: "Internet Empresas", href: "/empresas" },
    { name: "Contacto", href: "/contacto" },
  ];
  const portalHref =
    "https://www.celeris.ar/portal/login?empresa=delrio-internet";

  return (
    <header className="fixed z-50 flex w-full items-center justify-between border-b border-gray-300 bg-black/50 px-4 py-3.5 shadow-md shadow-white/10 select-none sm:px-6 lg:px-12">
      <Link
        title="Pagina principal DelRio Internet"
        href="/"
        className="lg:pl-6"
      >
        <Image
          title="DelRio Internet Logo"
          src="/logoTransparentWhite.webp"
          alt="DelRio Internet Logo"
          width={825}
          height={437}
          sizes="(min-width: 64rem) 125px, 94px"
          className="h-12 w-auto sm:h-12 lg:h-16"
        />
      </Link>
      <nav className="flex items-center gap-3 text-lg text-white sm:gap-6 lg:gap-8">
        <Link
          title="Portal DelRio Internet"
          href={portalHref}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/20 lg:hidden"
        >
          <User size={16} />
          Portal Clientes
        </Link>
        <ul className="hidden gap-8 text-lg lg:flex">
          {links.map(({ name, href }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  title={`${name} DelRio Internet`}
                  href={href}
                  className={`flex items-center gap-1 underline-offset-4 transition-all hover:underline ${
                    active ? "text-white underline" : "text-gray-200"
                  }`}
                >
                  {name === "Internet Empresas" ? "Empresas" : name}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              title="Portal DelRio Internet"
              href={portalHref}
              className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/20"
            >
              <User size={16} />
              Portal Clientes
            </Link>
          </li>
        </ul>

        <div className="text-white lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Abrir menu de navegacion"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
              >
                <Menu size={24} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={10}
              align="end"
              className="w-[calc(100vw-1.5rem)] max-w-xs rounded-2xl border border-white/15 bg-[#050f1e]/90 p-2 text-white shadow-2xl shadow-black/50 backdrop-blur-md sm:w-64"
            >
              <DropdownMenuLabel className="px-2 pb-1 text-xs tracking-wide text-white/60 uppercase">
                Navegacion
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="mx-1 mb-1 bg-white/15" />
              {links.map(({ name, href }) => {
                const active = pathname === href;
                return (
                  <div key={href}>
                    <DropdownMenuItem
                      asChild
                      className="p-0 focus:bg-transparent"
                    >
                      <Link
                        title={`${name} DelRio Internet`}
                        href={href}
                        className={`flex h-full w-full items-center justify-between rounded-xl px-3 py-2.5 text-base font-medium transition-all duration-200 focus-visible:outline-none ${
                          active
                            ? "bg-white text-black shadow-md"
                            : "text-white/90 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <span className="inline-flex items-center gap-2">
                          {name}
                        </span>
                        {active && (
                          <span className="h-2 w-2 rounded-full bg-(--delrio-medium)" />
                        )}
                      </Link>
                    </DropdownMenuItem>
                    {name !== "Contacto" && (
                      <DropdownMenuSeparator className="my-1 bg-white/10" />
                    )}
                  </div>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
