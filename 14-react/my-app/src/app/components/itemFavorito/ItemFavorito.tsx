"use client";
import React from "react";

import { ItemFavoritoProps } from "../../types/Produto";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function ItemCarrinho({
  id,
  nome,
  preco,
}: ItemFavoritoProps) {

  const { mutate } = useMutation({
    mutationFn: (id: string) => axios.delete(`/api/favoritos/${id}`),
    onSuccess: () => {
      alert("Produto removido com sucesso!");
    },
    onError: () => {
      alert("Erro ao remover produto!");
    },
  });

  const handleRemoveItem = (id: string) => {
    mutate(id);
  };

  return (
    <>
      <tr key={id}>
        <td>{nome}</td>
        <td>R$ {`${parseInt(preco).toFixed(2)}`}</td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleRemoveItem(id)}
          >
            Remover
          </button>
        </td>
      </tr>
    </>
  );
}
