"use client";

import React from "react";
import { mockItensFavoritos } from "../mocks/itensFavoritos";
import ListagemFavoritos from "../components/ListagemFavoritos/ListagemFavoritos";
import { ItemCarrinhoType } from "../types/Carrinho";

export default function Favoritos() {
  // define os itens favoritos mockados

  return (
    <>
      <main>
        <div className="container p-5">
          <ListagemFavoritos></ListagemFavoritos>
        </div>
      </main>
    </>
  );
}
