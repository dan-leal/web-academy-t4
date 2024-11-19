import { ProdutoType } from "../types/Produto";
import apiFavoritos from "./apiFavoritos";

export async function getListaFavoritos(): Promise<ProdutoType[]> {
  return apiFavoritos.get("/favoritos").then((response) => response.data);
}
