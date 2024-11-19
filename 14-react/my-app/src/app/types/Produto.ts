interface Fotos {
  titulo: string;
  src: string;
}

interface ProdutoType {
  id: string;
  fotos: Fotos[];
  nome: string;
  preco: string;
  descricao: string;
  vendido: string;
  usuario_id: string;
}

interface IListagemProdutosProps {
  adicionarAoCarrinho: (item: ProdutoType) => void;
}

interface CardProdutoProps {
  produto: ProdutoType;
  adicionarCarrinho: (produto: ProdutoType) => void;
}

type ItemFavoritoProps = Omit<
  ProdutoType,
  "fotos" | "descricao" | "vendido" | "usuario_id"
> & {
  removerItem: (id: string) => void;
};

export type {
  ProdutoType,
  CardProdutoProps,
  IListagemProdutosProps,
  ItemFavoritoProps,
};
