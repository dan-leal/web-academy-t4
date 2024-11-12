"use client";
import React from "react";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";

export default function Carrinho() {
  const [itensCarrinho, setItensCarrinho] = React.useState(mockItensCarrinho);
  const [precoTotal, setPrecoTotal] = React.useState(0);

  React.useEffect(() => {
    const total = itensCarrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    setPrecoTotal(total);
  }, [itensCarrinho]);

  return (
    <>
      <main>
        <div className="container p-5">

          <ListagemCarrinho itensCarrinho={itensCarrinho} setItensCarrinho={setItensCarrinho}></ListagemCarrinho>
          <ResumoCarrinho quantidadeItensTotal={itensCarrinho.length} precoTotal={precoTotal}></ResumoCarrinho>
        </div>
      </main>
    </>
  );
}
