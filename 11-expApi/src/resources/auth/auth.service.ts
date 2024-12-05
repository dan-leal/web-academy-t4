import { PrismaClient, User } from "@prisma/client";
import { LoginDTO } from "./auth.types";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

export const checkCredentials = async ({
  email,
  password,
}: LoginDTO): Promise<false | User> => {
  const usuario = await prisma.user.findUnique({
    where: { email },
  });
  if (!usuario) return false;
  const ok = await compare(password, usuario.password);
  if (ok) return usuario;
  return false;
};
