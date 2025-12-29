"use client";
import { useRef, useState } from "react";
import jsPDF from "jspdf";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { FinancialDetailsChart } from "../components/FinancialDetailsChart";
import { RecentEntriesTable } from "../components/RecentEntriesTable";

export default function FinancialReportPage() {
  const reportRef = useRef<HTMLDivElement>(null);
  const [period, setPeriod] = useState("mes");
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Estado para mobile

  const handleSavePDF = () => {
    const doc = new jsPDF();
    if (reportRef.current) {
      doc.html(reportRef.current, {
        callback: (doc) => doc.save("relatorio.pdf"),
        x: 10, y: 10, width: 180, windowWidth: 800,
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar precisa lidar com visibilidade interna via props */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 overflow-y-auto px-4 sm:px-8 py-4 w-full">
          <div className="mb-4 text-xs text-gray-400">
            Home / <span className="text-gray-500">Relatórios</span>
          </div>

          <div className="bg-white rounded-xl shadow p-4 sm:p-8 w-full max-w-5xl mx-auto">
            {/* Header do Relatório: Stack em mobile, Row em tablet+ */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h1 className="font-bold text-gray-900 text-xl">
                Relatório Financeiro
              </h1>
              
              <div className="flex w-full md:w-auto gap-2">
                <select
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="flex-1 md:flex-none border rounded-lg px-3 py-2 text-sm bg-white"
                >
                  <option value="dia">Dia</option>
                  <option value="mes">Mês</option>
                </select>
                <button
                  onClick={handleSavePDF}
                  className="flex-1 md:flex-none bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-violet-700 transition"
                >
                  PDF
                </button>
              </div>
            </div>

            <div ref={reportRef} className="overflow-x-hidden">
              {/* O gráfico deve ser responsivo internamente */}
              <div className="w-full h-75 md:h-100">
                <FinancialDetailsChart />
              </div>
              
              {/* Wrapper para tabela não quebrar o layout */}
              <div className="mt-8 overflow-x-auto">
                <RecentEntriesTable />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}