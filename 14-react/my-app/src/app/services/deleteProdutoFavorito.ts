import apiFavoritos from "./apiFavoritos";
import { ProdutoType } from "../types/Produto";

export async function deleteProdutoFavorito(produto: ProdutoType) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return apiFavoritos
    .delete<ProdutoType>("/favoritos", { data: produto })
    .then((response) => response.data);
}
