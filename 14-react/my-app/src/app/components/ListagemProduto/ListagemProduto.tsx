"use client";
import React from "react";
import CardProduto from "../CardProduto/CardProduto";

import { IListagemProdutosProps, Produto } from "../../types/Produto";
import { useListaProdutos } from "@/app/hooks/useListaProdutos";

export default function ListagemProduto({
  adicionarAoCarrinho,
}: IListagemProdutosProps) {
  const { produtos, isPending, isError } = useListaProdutos();

  if (isPending) return <h5>Carregando...</h5>;

  if (isError) return <h5>Ocorreu um erro ao carregar os produtos.</h5>;

  if (!produtos) return <h5>Não há produtos disponíveis no momento.</h5>;

  return (
    <>
      <h5 className="mb-3">Produtos disponíveis:</h5>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {produtos.map((item, index) => (
          <CardProduto
            key={index}
            produto={item}
            adicionarCarrinho={adicionarAoCarrinho}
          />
        ))}
      </div>
    </>
  );
}
