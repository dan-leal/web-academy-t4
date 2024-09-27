import { Request, Response } from 'express';
import axios from 'axios';
import { CreateProdutoDto, Produto } from '../types/produtos';

const index = async (req: Request, res: Response) => {
  try {
    let { data: produtos } = await axios.get<Produto[]>(
      `${process.env.DB_SERVER}/produtos`,
    );
    res.render('produto/index', { produtos });
  } catch (err) {
    res.status(500).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    if (req.method === 'GET') {
      res.render('produto/create');
    } else if (req.method === 'POST') {
      let produto: CreateProdutoDto = req.body;
      try {
        await axios.post(`${process.env.DB_SERVER}/produtos`, produto);
        res.status(200).redirect('/produtos');
      } catch (err) {
        res.status(500).json(err);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const read = async (req: Request, res: Response) => {};
const update = async (req: Request, res: Response) => {};
const remove = async (req: Request, res: Response) => {};

export default { index, read, create, update, remove };
