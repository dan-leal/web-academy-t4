"use client";
import { ReactNode, createContext, useContext, useState } from "react";

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
  setFavoritos: () => {},
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

export default FavoritosProvider;
