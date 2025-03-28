"use client";
import React from "react";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import ListagemProduto from "./components/ListagemProduto/ListagemProduto";
import { ProdutoType } from "./types/Produto";

export default function Produtos() {
  const [quantidadeItensTotal, setQuantidade] = React.useState(0);
  const [precoTotal, setPrecoTotal] = React.useState(0);

  const handleClickReativo = (item: ProdutoType) => {
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
            adicionarAoCarrinho={handleClickReativo}
          ></ListagemProduto>
        </div>
      </main>
    </>
  );
}
