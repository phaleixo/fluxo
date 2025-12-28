'use client';

import { QuickEntryForm } from "../components/QuickEntryForm";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export default function TransactionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header onToggleSidebar={() => {}} />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-2 sm:px-8 py-4">
          <div className="mb-4 text-xs text-gray-400">
            Home / <span className="text-gray-500">Transações</span> /{" "}
            <span className="text-gray-900 font-semibold">Novo Lançamento</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 sm:p-8 max-w-2xl mx-auto">
            <div className="font-bold text-gray-900 text-lg mb-6">
              Tipo de Movimentação
            </div>
            <QuickEntryForm showOptional={true} />
          </div>
        </main>
      </div>
    </div>
  );
}
