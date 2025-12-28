// RecentEntriesTable.tsx
// Componente para exibir a tabela de últimos lançamentos
// Utiliza Tailwind CSS e shadcn/ui

const entries = [
  {
    descricao: "Venda de Serviço #1023",
    categoria: "Serviços",
    data: "12 Out 2023",
    forma: "PIX",
    valor: "+ R$ 1.250,00",
    status: "Pago",
    valorColor: "text-green-600",
  },
  {
    descricao: "Fornecedor ABC Ltda",
    categoria: "Matéria Prima",
    data: "11 Out 2023",
    forma: "Boleto",
    valor: "- R$ 450,00",
    status: "Pago",
    valorColor: "text-rose-600",
  },
  {
    descricao: "Hospedagem Hostinger",
    categoria: "Infraestrutura",
    data: "10 Out 2023",
    forma: "Cartão",
    valor: "- R$ 270,00",
    status: "Pendente",
    valorColor: "text-rose-600",
  },
];

export function RecentEntriesTable() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-2 sm:p-4 border border-gray-200 min-w-0">
      <div className="flex justify-between items-center mb-2 sm:mb-4">
        <div className="font-bold text-gray-900 text-base sm:text-lg">
          Últimos Lançamentos
        </div>
        <a
          href="/financialReport"
          className="text-violet-700 text-xs sm:text-sm font-semibold hover:underline"
        >
          Ver todos
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm min-w-125">
          <thead>
            <tr className="text-gray-700 text-left font-semibold">
              <th className="py-1 sm:py-2">DESCRIÇÃO</th>
              <th>CATEGORIA</th>
              <th>DATA</th>
              <th>FORMA PGTO</th>
              <th>VALOR</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-1 sm:py-2 font-semibold text-gray-900">
                  {entry.descricao}
                </td>
                <td className="text-gray-800">{entry.categoria}</td>
                <td className="text-gray-800">{entry.data}</td>
                <td className="text-gray-800">{entry.forma}</td>
                <td className={`${entry.valorColor} font-bold`}>
                  {entry.valor}
                </td>
                <td>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      entry.status === "Pago"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {entry.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
