"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { calculaValorComPorcentagemDeDesconto } from "../helpers";

interface FavoritosProviderProps {
  children: ReactNode;
}

interface IFavoritosContextType {
  favoritos: Produto[];
  setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>;
  verificaSeProdutoFavorito: (id: string) => boolean;
}

export const FavoritosContext = createContext<IFavoritosContextType>({
  favoritos: [],
  setFavoritos: () => { },
  verificaSeProdutoFavorito: (id: string) => false,
});

const FavoritosProvider = ({ children }: FavoritosProviderProps) => {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  // Função no provider e incluir a função no value do container
  const verificaSeProdutoFavorito = (id: string) =>
    favoritos.some((produto) => produto.id === id);

  const value = { favoritos, setFavoritos, verificaSeProdutoFavorito };

  return (
    <FavoritosContext.Provider value={value}>
      {children}
    </FavoritosContext.Provider>
  );
};

// Hook Customizado para utilizar como necessário
export const useFavoritosContext = () => {
  const favoritosContext = useContext(FavoritosContext);

  return favoritosContext;
};

// Hook Customizado para receber um id e removê-lo da lista de favoritos
export const useRemoverFavorito = (id: string) => {
  const { favoritos, setFavoritos } = useFavoritosContext();

  return (id: string) => {
    setFavoritos((favoritos) => favoritos.filter((item) => item.id !== id));
  };
};

export const useAdicionaFavorito = (produto: Produto) => {

  const { favoritos, setFavoritos } = useFavoritosContext();

  return () => {
    setFavoritos((favoritos) => [...favoritos, produto]);
  };
}

export const useCalculaValorTotalFavoritos = () => {
  const { favoritos } = useFavoritosContext();

  return favoritos.reduce((acc, produto) => {
    return (
      acc +
      calculaValorComPorcentagemDeDesconto(
        Number(produto.preco),
        produto.desconto
      )
    );
  }, 0);
}

export default FavoritosProvider;
