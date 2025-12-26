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

  const handleSavePDF = () => {
    const doc = new jsPDF();
    if (reportRef.current) {
      doc.html(reportRef.current, {
        callback: function (doc) {
          doc.save("relatorio.pdf");
        },
        x: 10,
        y: 10,
        width: 180,
        windowWidth: 800,
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header onToggleSidebar={() => {}} />
      <div className="flex flex-1">
        <Sidebar isOpen={true} onClose={() => {}} />
        <main className="flex-1 px-2 sm:px-8 py-4">
          <div className="mb-4 text-xs text-gray-400">
            Home / <span className="text-gray-500">Relatórios</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 sm:p-8 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <div className="font-bold text-gray-900 text-lg">
                Relatório Financeiro
              </div>
              <div className="flex gap-2">
                <select
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="border rounded px-3 py-2 text-sm text-gray-900 font-medium"
                >
                  <option value="dia">Dia</option>
                  <option value="mes">Mês</option>
                </select>
                <button
                  onClick={handleSavePDF}
                  className="bg-violet-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-violet-700 transition"
                >
                  Salvar em PDF
                </button>
              </div>
            </div>
            <div ref={reportRef}>
              <FinancialDetailsChart />
              <div className="mt-6">
                <RecentEntriesTable />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
