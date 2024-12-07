import { NextFunction, Request, Response } from "express";

const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  if (req.session.uid) next();
  else res.status(403).json({ msg: 'Não logado' });
}

export default isAuth;
