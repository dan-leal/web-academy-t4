import { Product, PrismaClient, Order } from "@prisma/client";
import { CreateOrderDTO, CreateProductDTO, SearchProductDTO } from "./product.types";

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

export const createOrder = async (
  order: CreateOrderDTO
): Promise<Order> => {
  return prisma.order.create({
    data: {
      ...order,
      products: {
        create: order.products.map(product => ({
          id: product.id,
          name: product.name,
          price: product.price,
          stockQuantity: product.stockQuantity,
          createdAt: product.createdAt,
          updatedAt: product.updatedAt,
        })),
      },
    },
  });
}

export const getProductById = async (
  produto: SearchProductDTO
): Promise<Product | null> => {
  return await prisma.product.findUnique({
    where: {
      id: produto.id,
    },
  });
};

export const updateProduct = async (
  product: SearchProductDTO
): Promise<Product | null> => {
  return await prisma.product.update({
    where: {
      id: product.id,
    },
    data: product,
  });
};

export const removeProduct = async (id: string): Promise<Product | null> => {
  return await prisma.product.delete({
    where: {
      id,
    },
  });
};
