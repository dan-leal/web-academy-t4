import { Request, Response } from "express";

const products: any = [];

const index = (req: Request, res: Response) => {
  res.json(products);
};

const create = (req: Request, res: Response) => {};
const read = (req: Request, res: Response) => {};
const update = (req: Request, res: Response) => {};
const remove = (req: Request, res: Response) => {};

export default { index, create, read, update, remove };
