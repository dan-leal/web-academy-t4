"use client";
import React from "react";
import CardProduto from "../CardProduto/CardProduto";

import { Produto } from "../../types/Produto";

export default function ListagemProduto({ produtos, adicionarAoCarrinho }: { produtos: Produto[], adicionarAoCarrinho: (item: Produto) => void }) {


  return (
    <>
      <h5 className="mb-3">Produtos disponíveis:</h5>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {produtos.map((item, index) => (
          <CardProduto key={index} produto={item} adicionarCarrinho={
            () => {
              adicionarAoCarrinho(item)
            }} />
        ))}
      </div>
    </>
  );
}
