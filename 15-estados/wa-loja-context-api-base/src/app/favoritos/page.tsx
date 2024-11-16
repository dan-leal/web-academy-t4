"use client";
import { FavoritosContext } from "../State/FavoritosProvider";
import ListagemFavoritos from "../components/ListagemFavoritos/ListagemFavoritos";
import { useContext, useState } from "react";

export default function Favoritos() {
  const { favoritos, setFavoritos } = useContext(FavoritosContext);

  return (
    <main>
      <div className="container p-5">
        <ListagemFavoritos
          produtosFavoritos={favoritos}
          setFavoritos={setFavoritos}
        />
      </div>
    </main>
  );
}
