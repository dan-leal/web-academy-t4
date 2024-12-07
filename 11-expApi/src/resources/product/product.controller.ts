import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import {
  checkAlreadyExists,
  createProduct,
  getAllProducts,
  getProductById,
  removeProduct,
  updateProduct,
  createOrder
} from "./product.service";
import { CreateOrderDTO, CreateProductDTO } from "./product.types";
import { Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

const index = async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const product: CreateProductDTO = req.body;
    if (!(await checkAlreadyExists(product.name))) {
      const newProduct = await createProduct(product);
      res.status(StatusCodes.ACCEPTED).json(newProduct);
    } else {
      res.status(StatusCodes.CONFLICT).send(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const read = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await getProductById({ id });
    res.status(StatusCodes.ACCEPTED).json(product);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product: CreateProductDTO = req.body;
    const updatedProduct = await updateProduct({ id, ...product });

    if (product) {
      res.status(StatusCodes.ACCEPTED).json(updatedProduct);
    } else {
      res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const product = await removeProduct(id);

    if (product) {
      res.status(StatusCodes.ACCEPTED).json(`Produto de ID: ${id} removido`);
    } else {
      res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const addToCart = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const product = await getProductById({ id });
    if (product) {
      if (req.session.cart) {
        req.session.cart.push(product);
        res.status(StatusCodes.ACCEPTED).json(req.session.cart);
      } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Cart está indisponível");
      }
    } else {
      res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
}

const buy = async (req: Request, res: Response): Promise<void> => {
  const products = req.session.cart;

  if (!products) {
    res.status(StatusCodes.BAD_REQUEST).send("Carrinho vazio");
    return;
  }
  const totalValue = products.reduce((acc, curr) => acc.plus(new Decimal(curr.price)), new Decimal(0));
  try {
    if (req.session.cart && req.session.uid) {
      // const order: CreateOrderDTO = {
      //   products,
      //   totalValue,
      //   userId: req.session.uid,
      // };
      // const newOrder = await createOrder(order);
      req.session.cart = [];

      res.status(StatusCodes.ACCEPTED).send("Compra efetuada com sucesso");
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Cart está indisponível");
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
}

export default { index, create, read, update, remove, addToCart, buy };
