import { Request, Response } from "express";
import { LoginDTO, SingupDTO } from "./auth.types";
import { createUser, findUserByEmail } from "../user/user.service";
import { UserTypes } from "../userType/userType.constants";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { checkCredentials } from "./auth.service";

const signup = async (req: Request, res: Response) => {
  const usuario: SingupDTO = req.body;
  try {
    const novoUsuario = await createUser({
      ...usuario,
      userTypeId: UserTypes.USER,
    });
    res.status(StatusCodes.CREATED).json(novoUsuario);
  } catch (e) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};

const login = async (req: Request, res: Response) => {
  const credentails = req.body as LoginDTO;
  try {
    const usuario = await checkCredentials(credentails);
    if (!usuario) {
      res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED);
    } else {
      req.session.uid = usuario.id;
      req.session.userTypeId = usuario.userTypeId;

      res.status(StatusCodes.OK).json(StatusCodes.OK);
    }
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
  }
};
const logout = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    res.status(StatusCodes.OK).json(ReasonPhrases.OK);
  });
};

export default { signup, login, logout };
