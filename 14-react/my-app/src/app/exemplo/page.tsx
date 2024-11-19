"use client";
import React, { useEffect } from "react";
import { ProdutoType } from "../types/Produto";

export default function Exemplo() {
  const [contar, setContar] = React.useState<number>(0);
  const [dados, setDados] = React.useState<ProdutoType | null>(null);
  const [modal, setModal] = React.useState<boolean>(false);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  useEffect(() => {
    document.title = "Total " + contar;
  }, [contar]);

  useEffect(() => {
    setContar(0);
  }, [modal]);

  console.log(dados);
  return (
    <>
      <main>
        <div className="container p-5">
          <p>{`Total contar é ${contar}`}</p>
        </div>
      </main>
    </>
  );
}
