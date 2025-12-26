// FinancialDetailsChart.tsx
// Componente para o gráfico de detalhamento financeiro (Receitas/Despesas)
// Utiliza Tailwind CSS e pode ser integrado com uma lib de gráficos futuramente

export function FinancialDetailsChart() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-2 sm:p-4 w-full h-full min-h-98 border border-gray-200 flex flex-col justify-between">
      <div className="font-bold text-gray-900 text-base sm:text-lg mb-2">
        Detalhamento Financeiro
      </div>
      {/* Filtro de período */}
      <div className="flex justify-end mb-3">
        <select className="border rounded px-2 py-1 text-sm sm:text-base text-gray-600 font-medium w-full max-w-xs">
          <option>Último Ano</option>
          <option>Últimos 6 meses</option>
          <option>Último mês</option>
        </select>
      </div>
      {/* Gráfico placeholder */}
      <div className="flex-1 flex items-center justify-center text-gray-400 font-semibold text-sm sm:text-base">
        <span>Gráfico de Receitas e Despesas</span>
      </div>
      {/* Legenda */}
      <div className="flex gap-2 sm:gap-6 justify-center mt-3 text-xs sm:text-base font-medium flex-wrap">
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
          <span className="text-gray-900">Receitas</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
          <span className="text-gray-900">Despesas</span>
        </div>
      </div>
    </div>
  );
}
