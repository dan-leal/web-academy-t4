import apiFavoritos from "./apiFavoritos";
import { Produto } from "../types/Produto";

export async function addProdutoFavorito(produto: Produto) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return apiFavoritos
    .post<Produto>("", produto)
    .then((response) => response.data);
}
