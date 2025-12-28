"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, FileText, ArrowLeftRight, Users } from "lucide-react";

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const menuItems = [
  { label: "Dashboard", icon: Home, href: "/" },
  { label: "Transações", icon: ArrowLeftRight, href: "/transaction" },
  { label: "Relatórios", icon: FileText, href: "/financialReport" },
  { label: "Clientes", icon: Users, href: "/clientes" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-white border border-gray-200 w-16 md:w-44 min-h-screen flex flex-col justify-between shadow-xl transition-all duration-200">
      <nav className="mt-4 flex flex-col items-center md:items-stretch">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "relative flex items-center justify-center md:justify-start gap-0 md:gap-3 px-0 md:pl-3 md:pr-3 py-3 w-full rounded-lg text-gray-900 font-medium transition-all duration-300",
                "hover:bg-violet-50",

                // Fundo cinza suave
                isActive && "bg-gray-200",

                // Barra animada lateral (pseudo-elemento)
                "before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-r-lg before:bg-violet-500 before:transition-all before:duration-300",
                isActive ? "before:opacity-100" : "before:opacity-0"
              )}
            >
              <item.icon className="w-5 h-5 transition-all duration-300" />
              <span className="hidden md:inline ml-3">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
