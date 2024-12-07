import { Product } from "@prisma/client";
import { Order } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
export type CreateProductDTO = Pick<
  Product,
  "name" | "price" | "stockQuantity"
  >;

export type CreateOrderDTO = {
  userId: string;
  totalValue: Decimal;
  products: Product[];
};

export type SearchProductDTO = Pick<Product, "id">;
