
import { useMutation } from "@tanstack/react-query";
import { ProdutoType } from "../types/Produto";
import { deleteProdutoFavorito } from "../services/deleteProdutoFavorito";

export function useDeleteFavorito(onSuccess: () => void, onError: () => void) {
  const { mutate, isPending } = useMutation({
    mutationFn: (produto: ProdutoType) => deleteProdutoFavorito(produto),
    onSuccess,
    onError,
  });

  return {
    deleteFavorito: mutate,
    isPending,
  };
}
