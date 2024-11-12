"use client";
import React from "react";
import { mockProdutos } from "@/app/mocks/produto";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import ListagemProduto from "./components/ListagemProduto/ListagemProduto";
import { Produto } from "./types/Produto";

export default function Produtos() {
  const produtos = mockProdutos;
  const [quantidadeItensTotal, setQuantidade] = React.useState(0);
  const [precoTotal, setPrecoTotal] = React.useState(0);

  const handleClickReativo = (item: Produto) => {
    setQuantidade((prev) => prev + 1);
    setPrecoTotal((prev) => prev + Number(item.preco));
  };


  return (
    <>
      <main>
        <div className="container p-5">
          <ResumoCarrinho
            quantidadeItensTotal={quantidadeItensTotal}
            precoTotal={precoTotal}
          ></ResumoCarrinho>
          <ListagemProduto
            produtos={produtos}
            adicionarAoCarrinho={handleClickReativo}
          ></ListagemProduto>
        </div>
      </main>
    </>
  );
}
