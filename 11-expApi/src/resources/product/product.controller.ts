import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import {
  checkAlreadyExists,
  createProduct,
  getAllProducts,
} from "./product.service";
import { CreateProductDTO } from "./product.types";

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

const read = async (req: Request, res: Response) => {};
const update = async (req: Request, res: Response) => {};
const remove = async (req: Request, res: Response) => {};

export default { index, create, read, update, remove };
