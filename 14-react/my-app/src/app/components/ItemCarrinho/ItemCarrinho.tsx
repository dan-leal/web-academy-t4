"use client";
import React, { useState } from "react";

import valorTotalProduto from "../../utils/produto";
import { ItemCarrinhoType } from "../../types/Carrinho";

export default function ItemCarrinho({ id, nome, preco, quantidade, removerItem }: ItemCarrinhoType) {
  const [carrinho, setCarrinho] = useState<ItemCarrinhoType[]>([]);

  const atualizarCarrinho = (novoCarrinho: ItemCarrinhoType[]) => {
    setCarrinho(novoCarrinho);
  };

  const handleRemoverItem = (id: string) => {
    if (removerItem) {
      removerItem(id);
      const novoCarrinho = carrinho.filter(item => item.id !== id);
      atualizarCarrinho(novoCarrinho);
    }
  };

  return (
    <>
      <tr key={id}>
        <td>{nome}</td>
        <td>R$ {preco.toFixed(2)}</td>
        <td>{quantidade}</td>

        <td>R$ {valorTotalProduto(preco, quantidade).toFixed(2)}</td>
        <td>
          <button className="btn btn-danger btn-sm" onClick={() => handleRemoverItem(id)}>
            Remover
          </button>
        </td>
      </tr>
    </>
  )
}
