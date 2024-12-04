import { Request, Response } from "express";
import { createUser, findUserByEmail, getAllUsers } from "./user.service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { createUserDTO } from "./user.types";

const index = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.send(users).status(StatusCodes.OK);
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};

const create = async (req: Request, res: Response) => {
  const user = req.body as createUserDTO;
  try {
    if (!(await findUserByEmail(user.email))) {
      const newUser = await createUser(user);
      res.send(newUser).status(StatusCodes.CREATED);
    } else {
      res.status(StatusCodes.CONFLICT).send(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};

const read = async (req: Request, res: Response) => {};
const update = async (req: Request, res: Response) => {};
const remove = async (req: Request, res: Response) => {};

export default { index, create, read, update, remove };
