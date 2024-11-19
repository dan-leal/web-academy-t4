import apiFavoritos from "./apiFavoritos";
import { ProdutoType } from "../types/Produto";

export async function addProdutoFavorito(produto: ProdutoType) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return apiFavoritos
    .post<ProdutoType>("/favoritos", produto)
    .then((response) => response.data);
}
