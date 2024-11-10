"use client";
import React from "react";
import CardProduto from "../CardProduto/CardProduto";

export default function ListagemProduto() {
  const produto = [
    {
      title: "Notebook 1",
      value: 1500
    },
    {
      title: "Notebook 2",
      value: 2000
    },
    {
      title: "Notebook 3",
      value: 2500
    },
    {
      title: "Notebook 4",
      value: 3000
    }
  ];

  return (
    <>
      <h5 className="mb-3">Produtos disponíveis:</h5>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {produto.map((item, index) => (
          <CardProduto key={index} title={item.title} value={item.value} />
        ))}
      </div>
    </>
  );
}
