"use client";
import Image from "next/image";
import React from "react";

import Navbar from "./components/Navbar/Navbar";
import ResumoCarrinho from "./components/Carrinho/ResumoCarrinho";

export default function Produtos() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <div className="container p-5">
          <ResumoCarrinho></ResumoCarrinho>

          <h5 className="mb-3">Produtos disponíveis:</h5>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
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
                  <h5 className="card-title">Notebook 1</h5>
                  <p className="card-text text-secondary">R$ 1500</p>
                  <button className="btn btn-dark d-block w-100" type="button">
                    Adicionar no carrinho
                  </button>
                </div>
              </div>
            </div>

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
                  <h5 className="card-title">Notebook 1</h5>
                  <p className="card-text text-secondary">R$ 1500</p>
                  <button className="btn btn-dark d-block w-100" type="button">
                    Adicionar no carrinho
                  </button>
                </div>
              </div>
            </div>

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
                  <h5 className="card-title">Notebook 1</h5>
                  <p className="card-text text-secondary">R$ 1500</p>
                  <button className="btn btn-dark d-block w-100" type="button">
                    Adicionar no carrinho
                  </button>
                </div>
              </div>
            </div>

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
                  <h5 className="card-title">Notebook 1</h5>
                  <p className="card-text text-secondary">R$ 1500</p>
                  <button className="btn btn-dark d-block w-100" type="button">
                    Adicionar no carrinho
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
