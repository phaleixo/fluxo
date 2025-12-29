// DashboardCards.tsx
// Componente que exibe os cards de receitas, despesas, saldo e a receber

import {
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  FileWarning,
} from "lucide-react";

const cards = [
  {
    title: "Receitas (Mês)",
    value: "R$ 18.500,45",
    icon: ArrowUpRight,
    bgColor: "bg-green-400",
    iconColor: "text-green-800",
    info: "↑ 12% vs mês anterior",
  },
  {
    title: "Despesas (Mês)",
    value: "R$ 4.250,00",
    icon: ArrowDownRight,
    bgColor: "bg-red-400",
    iconColor: "text-red-800",
    info: "↓ 5% vs mês anterior",
  },
  {
    title: "Saldo Total",
    value: "R$ 14.250,45",
    icon: Wallet,
    bgColor: "bg-blue-400",
    iconColor: "text-blue-800",
    info: "Caixa positivo",
  },
  {
    title: "A Receber",
    value: "R$ 2.300,00",
    icon: FileWarning,
    bgColor: "bg-yellow-400",
    iconColor: "text-yellow-800",
    info: "3 faturas vencendo",
  },
];

export function DashboardCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4 px-1 pr-1 sm:px-0 sm:pr-0">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`rounded-xl shadow-lg p-2 sm:p-3 flex flex-col gap-1 relative overflow-hidden ${card.bgColor} border border-gray-200 min-w-0`}
        >
          <div className="absolute right-2 top-2 opacity-40">
            <card.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${card.iconColor}`} />
          </div>
          <div className="text-xs sm:text-sm font-bold text-gray-900 drop-shadow-sm">
            {card.title}
          </div>
          <div className="text-base sm:text-lg font-extrabold text-gray-950 drop-shadow">
            {card.value}
          </div>
          <div className="text-[10px] sm:text-xs text-gray-900 mt-1 font-semibold">
            {card.info}
          </div>
        </div>
      ))}
    </div>
  );
}
