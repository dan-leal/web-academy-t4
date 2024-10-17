import { Product, PrismaClient } from "@prisma/client";
import { CreateProductDTO } from "./product.types";

const prisma = new PrismaClient();

export const getAllProducts = async (): Promise<Product[]> => {
  return prisma.product.findMany();
};

export const checkAlreadyExists = async (name: string): Promise<boolean> => {
  return !!(await prisma.product.findUnique({ where: { name } })); // !! revela o valor booleano da função
};

export const createProduct = async (
  product: CreateProductDTO
): Promise<Product> => {
  return prisma.product.create({ data: product });
};
