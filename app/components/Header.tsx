// Header.tsx
import { Menu } from "lucide-react";

type HeaderProps = {
  onToggleSidebar: () => void;
};

export function Header({}: HeaderProps) {
  return (
    <header className="w-full flex items-center justify-between px-2 sm:px-4 py-3 border-b border-gray-200 bg-white shadow-md">
      <div className="flex items-center gap-1">
        <Menu className="w-5 h-5 text-violet-700" />
        <h1 className="text-lg font-bold text-gray-900 tracking-tight ml-1">
          Fluxo
        </h1>
      </div>
      <div className="flex items-center gap-4">
        {/* Informações do usuário */}
        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="font-bold text-gray-900">João Silva</div>
            <div className="text-xs text-gray-400">Administrador</div>
          </div>
          <div className="bg-violet-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
            JS
          </div>
        </div>
      </div>
    </header>
  );
}
