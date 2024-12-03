import { Request, Response } from "express";
import { ChangeLanguageDTO } from "./language.types";
import { ReasonPhrases } from "http-status-codes";

const changeLanguage = async (req: Request, res: Response) => {
  const { lang }: ChangeLanguageDTO = req.body;
  res.cookie("lang", lang).json(ReasonPhrases.OK);
};

export default { changeLanguage };
