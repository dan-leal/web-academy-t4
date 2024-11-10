"use client";
import React from "react";
import ItemCarrinho from "../ItemCarrinho/ItemCarrinho";

export default function ListagemCarrinho() {
  const produto = [
    {
      id: 1,
      title: "Notebook 1",
      value: 1500,
      quantity: 1
    },
    {
      id: 2,
      title: "Notebook 2",
      value: 2000,
      quantity: 2
    },
    {
      id: 3,
      title: "Notebook 3",
      value: 2500,
      quantity: 3
    },
    {
      id: 4,
      title: "Notebook 4",
      value: 3000,
      quantity: 4
    }
  ];

  return (
    <>
      <div className="card mb-4">
        <div className="row card-body">
          <h5 className="card-title mb-4 fw-light">
            Produtos selecionados
          </h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Valor Unitário</th>
                  <th>Quantidade</th>
                  <th>Valor Total</th>
                  <th>Opções</th>
                </tr>
              </thead>
              <tbody>
                {produto.map((item, index) => (
                  <ItemCarrinho key={index} title={item.title} value={item.value} quantity={item.quantity} id={item.id} />
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </div>


    </>
  );
}
