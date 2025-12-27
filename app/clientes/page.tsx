// page.tsx - Página de Clientes
"use client";
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export default function ClientesPage() {
  const [search, setSearch] = useState("");
  const [clientes, setClientes] = useState([
    // Exemplo inicial
    {
      nome: "Maria Silva",
      cpfcnpj: "123.456.789-00",
      endereco: "Rua das Flores, 123",
      contato: "(11) 99999-8888",
      email: "maria@email.com",
    },
  ]);
  const [novo, setNovo] = useState({
    nome: "",
    cpfcnpj: "",
    endereco: "",
    contato: "",
    email: "",
  });

  function handleAddCliente(e: React.FormEvent) {
    e.preventDefault();
    if (!novo.nome) return;
    setClientes([...clientes, novo]);
    setNovo({ nome: "", cpfcnpj: "", endereco: "", contato: "", email: "" });
  }

  const clientesFiltrados = clientes.filter(
    (c) =>
      c.nome.toLowerCase().includes(search.toLowerCase()) ||
      c.cpfcnpj.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header onToggleSidebar={() => {}} />
      <div className="flex flex-1">
        <Sidebar isOpen={true} onClose={() => {}} />
        <main className="flex-1 px-2 sm:px-8 py-4">
          <div className="mb-4 text-xs text-gray-400">
            Home / <span className="text-gray-500">Clientes</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Lista de clientes */}
            <div className="bg-white rounded-xl shadow p-4">
              <div className="font-bold text-gray-900 text-lg mb-4">
                Contatos Cadastrados
              </div>
              <input
                className="border rounded px-3 py-2 mb-4 w-full text-sm text-gray-700"
                placeholder="Buscar por nome, CPF/CNPJ ou email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="flex flex-col gap-3">
                {clientesFiltrados.length === 0 && (
                  <div className="text-gray-400">
                    Nenhum cliente encontrado.
                  </div>
                )}
                {clientesFiltrados.map((c, idx) => (
                  <div key={idx} className="border rounded p-3">
                    <div className="font-semibold text-gray-900">{c.nome}</div>
                    <div className="text-xs text-gray-500">
                      CPF/CNPJ: {c.cpfcnpj}
                    </div>
                    <div className="text-xs text-gray-500">
                      Endereço: {c.endereco}
                    </div>
                    <div className="text-xs text-gray-500">
                      Contato: {c.contato}
                    </div>
                    <div className="text-xs text-gray-500">
                      Email: {c.email}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Cadastro de novo cliente */}
            <div className="bg-white rounded-xl shadow p-4">
              <div className="font-bold text-gray-900 text-lg mb-4">
                Cadastrar Novo Cliente
              </div>
              <form className="flex flex-col gap-3" onSubmit={handleAddCliente}>
                <input
                  className="border rounded px-3 py-2 text-sm text-gray-700"
                  placeholder="Nome"
                  value={novo.nome}
                  onChange={(e) => setNovo({ ...novo, nome: e.target.value })}
                  required
                />
                <input
                  className="border rounded px-3 py-2 text-sm text-gray-700"
                  placeholder="CPF/CNPJ"
                  value={novo.cpfcnpj}
                  onChange={(e) =>
                    setNovo({ ...novo, cpfcnpj: e.target.value })
                  }
                />
                <input
                  className="border rounded px-3 py-2 text-sm text-gray-700"
                  placeholder="Endereço"
                  value={novo.endereco}
                  onChange={(e) =>
                    setNovo({ ...novo, endereco: e.target.value })
                  }
                />
                <input
                  className="border rounded px-3 py-2 text-sm text-gray-700"
                  placeholder="Contato (telefone)"
                  value={novo.contato}
                  onChange={(e) =>
                    setNovo({ ...novo, contato: e.target.value })
                  }
                />
                <input
                  className="border rounded px-3 py-2 text-sm text-gray-700"
                  placeholder="Email"
                  type="email"
                  value={novo.email}
                  onChange={(e) => setNovo({ ...novo, email: e.target.value })}
                />
                <button
                  type="submit"
                  className="bg-violet-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-violet-700 transition"
                >
                  Cadastrar Cliente
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
