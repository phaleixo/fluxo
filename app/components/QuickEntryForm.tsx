// QuickEntryForm.tsx
// Componente para o formulário de lançamento rápido de despesas/receitas
// Utiliza Tailwind CSS e shadcn/ui
"use client";

import { useState } from "react";

export function QuickEntryForm() {
  const [type, setType] = useState("Despesa");

  return (
    <div className="bg-white rounded-xl shadow-lg p-2 sm:p-4 w-full h-full border border-gray-200 flex flex-col justify-between">
      <div className="font-bold text-gray-900 text-base sm:text-lg mb-2 sm:mb-4">
        Lançamento Rápido
      </div>
      {/* Alternância entre Despesa e Receita */}
      <div className="flex gap-1 sm:gap-2 mb-2 sm:mb-4">
        <button
          className={`flex-1 py-1.5 sm:py-2 rounded-lg font-semibold text-sm sm:text-base ${
            type === "Despesa"
              ? "bg-rose-100 text-rose-700"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setType("Despesa")}
        >
          Despesa
        </button>
        <button
          className={`flex-1 py-1.5 sm:py-2 rounded-lg font-semibold text-sm sm:text-base ${
            type === "Receita"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setType("Receita")}
        >
          Receita
        </button>
      </div>
      {/* Formulário */}
      <form className="flex flex-col gap-2 sm:gap-3">
        <input
          className="border rounded px-2 py-1.5 sm:px-3 sm:py-2 text-sm sm:text-base text-gray-400 font-medium placeholder-gray-400"
          placeholder="CNPJ / CPF da Empresa"
        />
        <div className="flex gap-2 flex-col sm:flex-row">
          <input
            className="border rounded px-2 py-1.5 sm:px-3 sm:py-2 text-sm sm:text-base text-gray-400 font-medium w-full sm:w-1/2 placeholder-gray-400"
            placeholder="Valor (R$)"
            type="number"
          />
          <input
            className="border rounded px-2 py-1.5 sm:px-3 sm:py-2 text-sm sm:text-base text-gray-400 font-medium w-full sm:w-1/2 placeholder-gray-400"
            placeholder="Data"
            type="date"
          />
        </div>
        <select className="border rounded px-2 py-1.5 sm:px-3 sm:py-2 text-sm sm:text-base text-gray-400 font-medium">
          <option>Operacional</option>
          <option>Serviços</option>
          <option>Matéria Prima</option>
          <option>Infraestrutura</option>
        </select>
        <input
          className="border rounded px-2 py-1.5 sm:px-3 sm:py-2 text-sm sm:text-base text-gray-400 font-medium placeholder-gray-400"
          placeholder="Descrição"
        />
        <button
          type="submit"
          className={`mt-2 py-1.5 sm:py-2 rounded-lg font-bold text-white text-sm sm:text-base ${
            type === "Despesa" ? "bg-rose-500" : "bg-green-500"
          }`}
        >
          + Registrar {type}
        </button>
      </form>
    </div>
  );
}
