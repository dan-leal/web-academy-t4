"use client";
import { useAddFavorito } from "@/app/hooks/useAddFavorito";
import { CardProdutoProps } from "../../types/Produto";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

// Deverá receber via props o objeto Produto;
// Considere o primeiro valor do array de "fotos" para renderizar a imagem do produto.
// Deverá receber via props a função adicionarCarrinho que deverá ser chamada ao clicar no botão "Adicionar no carrinho".
export default function CardProduto({
  produto,
  adicionarCarrinho,
}: CardProdutoProps) {
  const { isPending, addFavorito } = useAddFavorito(
    () => toast.success("Produto favoritado com sucesso!"),
    () => toast.error("Algo deu errado")
  );

  return (
    <>
      <div className="col">
        <div className="card shadow-sm h-100">
          <Image
            src={produto.fotos[0].src}
            alt={produto.fotos[0].titulo}
            width={300}
            height={200}
            className="card-img-top w-100 h-auto"
          />

          <div className="card-body bg-light">
            <h5 className="card-title">{produto.nome}</h5>
            <p className="card-text text-secondary">{`R$ ${produto.preco}`}</p>
            <button
              className="btn btn-dark d-block w-100"
              type="button"
              onClick={() => adicionarCarrinho(produto)}
            >
              Adicionar no carrinho
            </button>
            <button
              className="btn btn-success d-block mt-1 w-100"
              type="button"
              onClick={() => addFavorito(produto)}
            >
              Favoritar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
