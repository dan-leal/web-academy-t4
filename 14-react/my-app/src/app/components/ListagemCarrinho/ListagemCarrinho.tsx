"use client";
import React from "react";
import ItemCarrinho from "../ItemCarrinho/ItemCarrinho";
import { ItemCarrinhoType, ListagemCarrinhoProps } from "@/app/types/Carrinho";

export default function ListagemCarrinho({
  itensCarrinho,
  setItensCarrinho,
}: ListagemCarrinhoProps) {
  const removerItem = (id: string) => {
    setItensCarrinho((prevItens) => prevItens.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="card mb-4">
        <div className="row card-body">
          <h5 className="card-title mb-4 fw-light">Produtos selecionados</h5>
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
                {itensCarrinho.map((item: ItemCarrinhoType, index: number) => (
                  <ItemCarrinho
                    key={index}
                    nome={item.nome}
                    preco={item.preco}
                    quantidade={item.quantidade}
                    id={item.id}
                    removerItem={removerItem}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
