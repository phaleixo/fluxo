"use client";

import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { DashboardCards } from "./components/DashboardCards";
import { FinancialDetailsChart } from "./components/FinancialDetailsChart";
import { QuickEntryForm } from "./components/QuickEntryForm";
import { RecentEntriesTable } from "./components/RecentEntriesTable";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        {/* Sidebar: Mobile (Overlay) / Desktop (Fixo) */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex flex-col flex-1 w-full overflow-y-auto overflow-x-hidden">
          <main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6">
              {/* 1. Cards do dashboard: Grid responsivo interno geralmente já resolve */}
              <section>
                <DashboardCards />
              </section>

              {/* 2. Gráfico e Formulário: Empilhados no mobile, Lado a lado no Desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-start">
                <div className="lg:col-span-2 w-full min-w-0 bg-white rounded-lg shadow-sm">
                  <FinancialDetailsChart />
                </div>
                <div className="w-full bg-white rounded-lg shadow-sm">
                  <QuickEntryForm />
                </div>
              </div>

              {/* 3. Tabela: Container com scroll horizontal obrigatório para evitar quebra de layout */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 border-b border-gray-100">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Lançamentos Recentes
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full align-middle">
                    <RecentEntriesTable />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
