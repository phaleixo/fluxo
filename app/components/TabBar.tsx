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

export function TabBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center bg-white border-t border-gray-200 shadow-t md:hidden h-16">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center flex-1 py-2 transition-all duration-300",
              isActive
                ? "text-violet-600"
                : "text-gray-500 hover:text-violet-500"
            )}
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
