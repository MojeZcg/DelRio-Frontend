"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Hogar", href: "/hogar" },
    { name: "Empresas", href: "/empresas" },
    { name: "Contacto", href: "/contacto" },
    {
      name: "Clientes",
      href: "https://delriointernet.portaldeinternet.me/users/login",
    },
  ];

  const clientLink = links.find((_, i) => i === 4);

  return (
    <header className="fixed z-50 flex w-full items-center justify-between border-b border-gray-300 bg-black/30 px-6 py-3 shadow-md shadow-white/10 select-none lg:px-12">
      <Link href="/" className="lg:pl-6">
        <Image
          title="DelRio Internet Logo"
          src="/logoTransparentWhite.webp"
          alt="DelRio Internet Logo"
          width={995}
          height={511}
          className="h-12 w-auto lg:h-16"
        />
      </Link>
      <nav className="flex items-center gap-8 text-lg text-white">
        {clientLink && (
          <Link
            title="Clientes DelRio Internet"
            href={clientLink.href}
            className="flex items-center gap-1 underline-offset-4 transition-all hover:underline lg:hidden"
          >
            <User size={14} />
            Clientes
          </Link>
        )}
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
                  {name === "Clientes" && <User className="h-5 w-5" />}
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="text-white lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu size={42} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 mr-2 h-auto w-48 bg-[#050f1e]/70 text-white">
              {links.map(({ name, href }) => {
                const active = pathname === href;
                return (
                  name !== "Clientes" && (
                    <div key={href}>
                      <DropdownMenuItem className="p-0">
                        <Link
                          title={`${name} DelRio Internet`}
                          href={href}
                          className={`flex h-full w-full items-center gap-1 rounded-md p-3 text-lg underline-offset-4 transition-all hover:underline ${
                            active ? "bg-white text-black" : "text-white"
                          }`}
                        >
                          {name}
                        </Link>
                      </DropdownMenuItem>
                      {name !== "Contacto" && <DropdownMenuSeparator />}
                    </div>
                  )
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
