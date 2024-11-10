"use client";
import React from "react";

import valorTotalProduto from "../../utils/produto";
import ItemCarrinhoProps from "../../types/Carrinho";

export default function ItemCarrinho({ id, title, value, quantity }: ItemCarrinhoProps) {

  return (
    <>
      <tr key={id}>
        <td>{title}</td>
        <td>R$ {value.toFixed(2)}</td>
        <td>{quantity}</td>

        <td>R$ {valorTotalProduto(value, quantity).toFixed(2)}</td>
        <td>
          <button className="btn btn-danger btn-sm">
            Remover
          </button>
        </td>
      </tr>
    </>
  )
}
