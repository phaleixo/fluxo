// Header.tsx
import Image from "next/image";

type HeaderProps = {
  onToggleSidebar: () => void;
};

export function Header({}: HeaderProps) {
  return (
    <header className="w-full flex items-center justify-between px-2 sm:px-4 py-3 border-b border-gray-200 bg-white shadow-md">
      <div className="flex items-center gap-1">
        <h1 className="text-2xl font-bold text-gray-900 ml-1 flex items-center gap-2">
          <Image
            src="/fluxo.svg"
            alt="Fluxo Logo"
            width={32}
            height={32}
            className="inline-block"
          />
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
