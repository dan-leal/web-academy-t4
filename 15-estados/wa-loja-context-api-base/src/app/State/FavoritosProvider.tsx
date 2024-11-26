"use client";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
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

  useEffect(() => {
    const favoritosLocalStorage = localStorage.getItem("favoritos");

    if (favoritosLocalStorage) {
      setFavoritos(JSON.parse(favoritosLocalStorage));
    }
  }, []);

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
  const novosFavoritos = favoritos.filter((item) => item.id !== id);

  return () => {
    setFavoritos(novosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
  };
};

export const useAdicionaFavorito = (produto: Produto) => {

  const { favoritos, setFavoritos } = useFavoritosContext();

  return () => {
    setFavoritos((favoritos) => [...favoritos, produto]);
    localStorage.setItem("favoritos", JSON.stringify([...favoritos, produto]));
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
