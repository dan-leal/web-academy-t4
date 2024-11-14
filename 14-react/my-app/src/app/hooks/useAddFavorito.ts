import { useMutation } from "@tanstack/react-query";
import { Produto } from "../types/Produto";
import { addProdutoFavorito } from "../services/addProdutoFavorito";

export function useAddFavorito(onSuccess: () => void, onError: () => void) {
  const { mutate, isPending } = useMutation({
    mutationFn: (produto: Produto) => addProdutoFavorito(produto),
    onSuccess,
    onError,
  });

  return {
    addFavorito: mutate,
    isPending,
  };
}
