"use client";
import React from "react";

import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import ListagemProduto from "./components/ListagemProduto/ListagemProduto";

export default function Produtos() {
  return (
    <>
      <main>
        <div className="container p-5">
          <ResumoCarrinho></ResumoCarrinho>
          <ListagemProduto></ListagemProduto>
        </div>
      </main>
    </>
  );
}
