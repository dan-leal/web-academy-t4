import { PrismaClient, User } from "@prisma/client";
import { createUserDTO, userDTO } from "./user.types";
import { genSalt, hash } from "bcryptjs";

const prisma = new PrismaClient();

export const getAllUsers = async (): Promise<userDTO[]> => {
  const users = await prisma.user.findMany();
  return users.map((user) => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });
};

export const createUser = async (user: createUserDTO): Promise<User> => {
  const salt = await genSalt();
  const password = await hash(user.password, salt);
  return await prisma.user.create({ data: { ...user, password } });
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  return await prisma.user.findUnique({ where: { email } });
};
