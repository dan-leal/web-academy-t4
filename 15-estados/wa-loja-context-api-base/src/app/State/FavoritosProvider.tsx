"use client";
import { ReactNode, createContext, useState } from "react";

interface FavoritosProviderProps {
  children: ReactNode;
}

interface IFavoritosContextType {
  favoritos: Produto[];
  setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>;
}

export const FavoritosContext = createContext<IFavoritosContextType>({
  favoritos: [],
  setFavoritos: () => {},
});

const FavoritosProvider = ({ children }: FavoritosProviderProps) => {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  const value = { favoritos, setFavoritos };

  return (
    <FavoritosContext.Provider value={value}>
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosProvider;
