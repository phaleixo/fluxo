// FinancialDetailsChart.tsx
// Componente para o gráfico de detalhamento financeiro (Receitas/Despesas)
// Utiliza Tailwind CSS e pode ser integrado com uma lib de gráficos futuramente

export function FinancialDetailsChart() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-2 sm:p-3 w-full h-full min-h-0 border border-gray-200 flex flex-col ">
      <div className="flex items-center justify-between">
        <span className="font-bold text-gray-900 text-sm sm:text-base">
          Detalhamento Financeiro
        </span>
        <select className="border rounded px-1.5 py-0.5 text-xs text-gray-600 font-medium w-28 sm:w-32 ml-2">
          <option>Último Ano</option>
          <option>Últimos 6 meses</option>
          <option>Último mês</option>
        </select>
      </div>
      {/* Gráfico placeholder */}
      <div className="flex-1 flex items-center justify-center text-gray-400 font-semibold text-xs sm:text-sm p-0 m-0">
        <span>Gráfico de Receitas e Despesas</span>
      </div>
      {/* Legenda */}
      <div className="flex gap-2 sm:gap-4 justify-center text-xs font-medium flex-wrap mt-1">
        <div className="flex items-center gap-1 sm:gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
          <span className="text-gray-900">Receitas</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
          <span className="text-gray-900">Despesas</span>
        </div>
      </div>
    </div>
  );
}
