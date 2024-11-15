"use client";
import { useEffect, useState, useContext, createContext } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface IAuthContext {
  emailUsuario: string | null;
  login: (email: string) => void;
  logout: () => void;
}
export const AuthContext = createContext<IAuthContext>({
  emailUsuario: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [emailUsuario, setEmailUsuario] = useState<string | null>(null);

  // TODO : get emailUsuario do localStorage
  useEffect(() => {});

  // TODO: atualiza estado local + atualiza localstorage
  const login = () => null;

  // TODO: atualiza estado local + atualiza localstorage
  const logout = () => null;

  const value = { emailUsuario, login, logout };

  return <AuthContext.Provider value={value}></AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};

export default AuthProvider;
