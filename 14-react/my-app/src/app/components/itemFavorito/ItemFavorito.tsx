"use client";
import React, { useState } from "react";

import valorTotalProduto from "../../utils/produto";
import { ProdutoType, ItemFavoritoProps } from "../../types/Produto";

export default function ItemCarrinho({
  id,
  nome,
  preco,
  removerItem,
}: ItemFavoritoProps) {
  const [favoritos, setFavoritos] = useState<ProdutoType[]>([]);

  const atualizarFavoritos = (favoritos: ProdutoType[]) => {
    setFavoritos(favoritos);
  };

  const handleRemoverItem = (id: string) => {
    if (removerItem) {
      removerItem(id);
      const atualizarFavoritos = favoritos.filter((item) => item.id !== id);
      setFavoritos(atualizarFavoritos);
    }
  };

  return (
    <>
      <tr key={id}>
        <td>{nome}</td>
        <td>R$ {`${parseInt(preco).toFixed(2)}`}</td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleRemoverItem(id)}
          >
            Remover
          </button>
        </td>
      </tr>
    </>
  );
}
