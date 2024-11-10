"use client";
import CardProdutoProps from "../../types/Produto";
import Image from "next/image";
import React from "react";

export default function CardProduto({ title, value }: CardProdutoProps) {

  return (
    <>
      <div className="col">
        <div className="card shadow-sm h-100">
          <Image
            src="/placeholder.png"
            className="card-img-top"
            alt="imagem placeholder"
            width={300}
            height={320}
          />

          <div className="card-body bg-light">
            <h5 className="card-title">{title}</h5>
            <p className="card-text text-secondary">{`R$ ${value}`}</p>
            <button className="btn btn-dark d-block w-100" type="button">
              Adicionar no carrinho
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
