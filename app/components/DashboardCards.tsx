// DashboardCards.tsx
// Componente que exibe os cards de receitas, despesas, saldo e a receber

import { ArrowUpRight, ArrowDownRight, Wallet, FileWarning } from "lucide-react";

const cards = [
  {
    title: "Receitas (Mês)",
    value: "R$ 18.500,45",
    icon: ArrowUpRight,
    gradient: "from-green-400 to-green-200",
    iconColor: "text-green-900",
    info: "↑ 12% vs mês anterior",
  },
  {
    title: "Despesas (Mês)",
    value: "R$ 4.250,00",
    icon: ArrowDownRight,
    gradient: "from-red-400 to-red-200",
    iconColor: "text-red-900",
    info: "↓ 5% vs mês anterior",
  },
  {
    title: "Saldo Total",
    value: "R$ 14.250,45",
    icon: Wallet,
    gradient: "from-blue-400 to-blue-200",
    iconColor: "text-blue-900",
    info: "Caixa positivo",
  },
  {
    title: "A Receber",
    value: "R$ 2.300,00",
    icon: FileWarning,
    gradient: "from-yellow-400 to-yellow-200",
    iconColor: "text-yellow-900",
    info: "3 faturas vencendo",
  },
];

export function DashboardCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 md:gap-7 mb-3 sm:mb-5 md:mb-7 px-2 pr-2 sm:px-0 sm:pr-0">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`rounded-xl shadow-lg p-4 sm:p-6 flex flex-col gap-2 relative overflow-hidden bg-linear-to-br ${card.gradient} border border-gray-200 min-w-0`}
        >
          <div className="absolute right-4 top-4 opacity-20">
            <card.icon
              className={`w-10 h-10 sm:w-12 sm:h-12 ${card.iconColor}`}
            />
          </div>
          <div className="text-sm sm:text-base font-bold text-gray-700">
            {card.title}
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-gray-900">
            {card.value}
          </div>
          <div className="text-xs sm:text-sm text-gray-700 mt-2">
            {card.info}
          </div>
        </div>
      ))}
    </div>
  );
}
