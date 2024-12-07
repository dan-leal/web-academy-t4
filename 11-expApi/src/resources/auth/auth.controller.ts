import { Request, Response } from "express";
import { LoginDTO, SingupDTO } from "./auth.types";
import { createUser, findUserByEmail } from "../user/user.service";
import { UserTypes } from "../userType/userType.constants";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { checkCredentials } from "./auth.service";

const signup = async (req: Request, res: Response): Promise<any> => {
  const user: SingupDTO = req.body;
  try {
    if (await findUserByEmail(user.email))
      return res
        .status(StatusCodes.CONFLICT)
        .json({ message: "Email já cadastrado" });
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

const login = async (req: Request, res: Response): Promise<any> => {
  const credentails = req.body as LoginDTO;
  try {
    const usuario = await checkCredentials(credentails);
    if (!usuario) return res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED)
    req.session.uid = usuario.id
    req.session.userTypeId = usuario.userTypeId
    req.session.cart = []
    res.status(StatusCodes.OK).json({ msg: 'Usuário autenticado' });
  }
  catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
  }
};

const logout = async (req: Request, res: Response): Promise<any> => {
  if (!req.session.uid) return res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'Usuário não autenticado' });
  req.session.destroy((err) => {
    if (err) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    res.status(StatusCodes.OK).json({ msg: 'Logout efetuado' });
  });
};

export default { signup, login, logout };
