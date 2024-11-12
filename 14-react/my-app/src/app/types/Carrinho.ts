interface ResumoCarrinhoProps {
  quantidadeItensTotal: number;
  precoTotal: number;
}

interface ItemCarrinhoType {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  removerItem?: (id: string) => void;
}

interface ListagemCarrinhoProps {
  itensCarrinho: ItemCarrinhoType[];
  setItensCarrinho: React.Dispatch<React.SetStateAction<ItemCarrinhoType[]>>;
}


export type { ItemCarrinhoType, ListagemCarrinhoProps, ResumoCarrinhoProps };
