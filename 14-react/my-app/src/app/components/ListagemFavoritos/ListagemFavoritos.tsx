"use client";
import React from "react";
import { ProdutoType } from "@/app/types/Produto";
import ItemFavorito from "../itemFavorito/ItemFavorito";
import { useListaFavoritos } from "@/app/hooks/useListaFavoritos";

export default function ListagemFavoritos() {
  const { favoritos, isPending, isError } = useListaFavoritos();


  if (isPending) return <h5>Carregando...</h5>;

  if (isError) return <h5>Ocorreu um erro ao carregar os produtos.</h5>;

  if (!favoritos) return <h5>Não há produtos disponíveis no momento.</h5>;

  return (
    <>
      <div className="card mb-4">
        <div className="row card-body">
          <h5 className="card-title mb-4 fw-light">Produtos favoritados</h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className=" col-4">Produto</th>
                  <th className=" col-2 ">Valor</th>
                  <th className=" col-2 ">Opções</th>
                </tr>
              </thead>
              <tbody>
                {favoritos.map((item: ProdutoType) => (
                  <ItemFavorito
                    key={item.id}
                    nome={item.nome}
                    preco={item.preco}
                    id={item.id}
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
