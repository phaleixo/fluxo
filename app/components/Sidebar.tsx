// Sidebar.tsx
// Componente responsável pelo menu lateral de navegação
// Utiliza Tailwind CSS e shadcn/ui para estilização

// Simple utility to concatenate class names
function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
import Link from "next/link";
import { Home, FileText, ArrowLeftRight, Users } from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: Home, href: "/" },
  { label: "Transações", icon: ArrowLeftRight, href: "/transaction" },
  { label: "Relatórios", icon: FileText, href: "/financialReport" },
  { label: "Clientes", icon: Users, href: "/clientes" },
];

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({}: SidebarProps) {
  return (
    <aside className="bg-white border border-gray-200 w-16 md:w-44 min-h-screen flex flex-col justify-between shadow-xl transition-all duration-200">
      <div>
        {/* Menu de navegação */}
        <nav className="mt-4 flex flex-col items-center md:items-stretch">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center justify-center md:justify-start gap-0 md:gap-3 px-0 md:pl-3 md:pr-3 py-3 w-full text-gray-900 hover:bg-violet-50 transition rounded-lg font-medium"
              )}
            >
              <item.icon className="w-5 h-5" /> {/* Ícone adicionado */}
              <span className="hidden md:inline ml-3">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
