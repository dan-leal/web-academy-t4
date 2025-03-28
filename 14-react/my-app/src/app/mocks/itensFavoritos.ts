import { ProdutoType } from "../types/Produto";

export const mockItensFavoritos: ProdutoType[] = [
  {
    id: "notebook-1",
    fotos: [
      {
        titulo: "notebook-1",
        src: "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-1.jpg",
      },
      {
        titulo: "notebook-2",
        src: "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg",
      },
    ],
    nome: "Notebook Gamer",
    preco: "4599",
    descricao:
      "Um equipamento poderoso para jogos e trabalho, com processador de última geração.",
    vendido: "false",
    usuario_id: "gamer@gamer.com",
  },
];
