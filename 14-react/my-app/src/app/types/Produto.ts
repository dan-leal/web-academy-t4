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

export default Produto;
