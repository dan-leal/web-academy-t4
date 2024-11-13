"use client";

import { useState } from "react";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { mockProdutos } from "./mocks/produtos";
import { createContext } from "react";
import FavoritosProvider from "./State/FavoritosProvider";

export default function App() {
  const produtos = mockProdutos;

  return (
    <main>
      <div className="container p-5">
        <ListagemProdutos produtos={produtos} />
      </div>
    </main>
  );
}
