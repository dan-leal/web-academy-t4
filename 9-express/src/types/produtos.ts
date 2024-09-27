export interface Produto {
  id: string;
  nome: string;
  preco: number;
  estoque?: number;
}

export type CreateProdutoDto = Pick<Produto, 'nome' | 'preco' | 'estoque'>;
