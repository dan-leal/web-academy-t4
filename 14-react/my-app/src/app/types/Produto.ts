interface Fotos {
  titulo: string;
  src: string;
}

interface Produto {
  id: string;
  fotos: Fotos[];
  nome: string;
  preco: string;
  descricao: string;
  vendido: string;
  usuario_id: string;
}

interface CardProdutoProps {
  produto: Produto;
  adicionarCarrinho: (produto: Produto) => void;
}

export type { Produto, CardProdutoProps };
