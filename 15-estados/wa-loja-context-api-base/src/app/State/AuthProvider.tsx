"use client";
import { redirect } from "next/dist/server/api-utils";
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
  login: () => { },
  logout: () => { },
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [emailUsuario, setEmailUsuario] = useState<string | null>(null);

  useEffect(() => {
    const emailUsuarioLocalStorage = localStorage.getItem("emailUsuario");

    if (emailUsuarioLocalStorage) {
      setEmailUsuario(emailUsuarioLocalStorage);
    }
  }, []);

  // TODO: atualiza estado local + atualiza localstorage
  const login = (email: string) => {
    setEmailUsuario(email);
  }

  // TODO: atualiza estado local + atualiza localstorage
  const logout = () => setEmailUsuario(null);

  const value = { emailUsuario, login, logout };

  return <AuthContext.Provider value={value}></AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};

export default AuthProvider;
