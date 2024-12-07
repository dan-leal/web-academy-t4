import { PrismaClient, User } from "@prisma/client";
import { LoginDTO } from "./auth.types";
import { compare } from "bcryptjs";
import { UserTypes } from "../userType/userType.constants";

const prisma = new PrismaClient();

export const checkCredentials = async ({
  email,
  password,
}: LoginDTO): Promise<User | null> => {
  const usuario = await prisma.user.findUnique({
    where: { email },
  });
  if (!usuario) return null;
  const ok = await compare(password, usuario.password);
  if (!ok) return null;
  return usuario;
};

export const checkIsAdmin = async (uid: string): Promise<boolean> => {
  const usuario = await prisma.user.findUnique({
    where: { id: uid },
  });
  return (usuario?.userTypeId) === UserTypes.ADMIN;
};
