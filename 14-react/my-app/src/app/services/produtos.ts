import { ProdutoType } from "../types/Produto";
import api from "./api";

export async function getListaProdutos(): Promise<ProdutoType[]> {
  return api.get("/produto").then((response) => response.data);
}
