"use client";
import React from "react";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";

export default function Carrinho() {
  return (
    <>
      <main>
        <div className="container p-5">

          <ResumoCarrinho></ResumoCarrinho>
          <ListagemCarrinho></ListagemCarrinho>
        </div>
      </main>
    </>
  );
}
