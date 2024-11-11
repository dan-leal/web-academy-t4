"use client";
import React from "react";
import CardProduto from "../CardProduto/CardProduto";
import { mockProdutos } from "@/app/mocks/produto";

export default function ListagemProduto() {


  return (
    <>
      <h5 className="mb-3">Produtos disponíveis:</h5>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {mockProdutos.map((item, index) => (
          <CardProduto key={index} produto={item} adicionarCarrinho={function (): void {
            throw new Error("Function not implemented.");
          }} />
        ))}
      </div>
    </>
  );
}
