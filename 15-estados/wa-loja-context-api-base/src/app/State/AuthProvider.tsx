"use client";
import { redirect } from "next/navigation";
import {
  useEffect,
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { set } from "react-hook-form";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface IAuthContext {
  email: string | null;
  login: (email: string) => void;
  logout: () => void;
  setEmail: Dispatch<SetStateAction<string | null>>;
}
export const AuthContext = createContext<IAuthContext>({
  email: null,
  login: () => {},
  logout: () => {},
  setEmail: () => {},
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const emailUsuarioLocalStorage = localStorage.getItem("emailUsuario");

    if (email) {
      setEmail(emailUsuarioLocalStorage);
    }
  }, []);

  // TODO: atualiza estado local + atualiza localstorage
  const login = (email: string) => {
    if (!email) {
      alert("Email é obrigatório");
      return;
    }

    // verifica se email está dentro de user no localstorage
    const usuariosSalvos = localStorage.getItem("user");

    if (usuariosSalvos) {
      const user = JSON.parse(usuariosSalvos);
      if (user.email === email) {
        setEmail(email);
        localStorage.setItem("emailUsuario", email);
        window.location.href = "/";
      }
    } else {
      alert("Email não cadastrado");
    }
  };

  // TODO: atualiza estado local + atualiza localstorage
  const logout = () => setEmail(null);

  return (
    <AuthContext.Provider value={{ email, setEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};

export const useObterUsuarioAtual = () => {
  const getEmailUsuarioLocalStorage = localStorage.getItem("emailUsuario");
  const emailUsuario = getEmailUsuarioLocalStorage
    ? getEmailUsuarioLocalStorage
    : null;

  return emailUsuario;
};

export default AuthProvider;
