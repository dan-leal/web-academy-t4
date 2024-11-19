import { useMutation } from "@tanstack/react-query";
import { ProdutoType } from "../types/Produto";
import { addProdutoFavorito } from "../services/addProdutoFavorito";

export function useAddFavorito(onSuccess: () => void, onError: () => void) {
  const { mutate, isPending } = useMutation({
    mutationFn: (produto: ProdutoType) => addProdutoFavorito(produto),
    onSuccess,
    onError,
  });

  return {
    addFavorito: mutate,
    isPending,
  };
}
