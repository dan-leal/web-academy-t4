import { Request, Response } from "express";
import { SingupDTO } from "./auth.types";
import { createUser } from "../user/user.service";
import { UserTypes } from "../userType/userType.constants";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const singup = async (req: Request, res: Response) => {
  const user: SingupDTO = req.body;
  try {
    const novoUsuario = await createUser({
      ...user,
      userTypeId: UserTypes.USER,
    });
    res.status(StatusCodes.CREATED).json(novoUsuario);
  } catch (e) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};

const login = (req: Request, res: Response) => {};
const logout = (req: Request, res: Response) => {};

export default { singup, login, logout };
