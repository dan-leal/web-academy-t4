const {
  primeiroNome,
  verificarDisponibilidadeEstoque,
  calcularPrecoTotal,
} = require("./validacoes");

describe("primeiroNome()", () => {
  it("Deve retornar o primeiro nome quando o nome completo é fornecido", () => {
    const fullName = "João Doe Etc";
    const result = primeiroNome(fullName);
    expect(result).toBe("João");
  });

  it("Deve retornar o mesmo nome quando não há espaço em branco", () => {
    const name = "Alice";
    const result = primeiroNome(name);
    expect(result).toBe("Alice");
  });

  it("Deve retornar o primeiro nome corretamente quando há espaço em branco no início", () => {
    const name = " Alice Test";
    const result = primeiroNome(name);
    expect(result).toBe("Alice");
  });

  it("Deve retornar o primeiro nome corretamente quando há espaço em branco no final", () => {
    const name = "Alice Test ";
    const result = primeiroNome(name);
    expect(result).toBe("Alice");
  });
});

describe("verificarDisponibilidadeEstoque()", () => {
  it("Deve retornar true se a quantidade desejada do produto especificado estiver disponível no estoque", () => {
    const result = verificarDisponibilidadeEstoque("laptop", 10);
    expect(result).toBe(true);
  });

  it("Deve retornar false se a quantidade desejada do produto especificado não estiver disponível no estoque", () => {
    const result = verificarDisponibilidadeEstoque("livro", 1);
    expect(result).toBe(false);
  });

  it("Deve retornar false se o produto especificado não estiver disponível no estoque", () => {
    const result = verificarDisponibilidadeEstoque("mouse", 1);
    expect(result).toBe(false);
  });

  it("Deve retornar false se a quantidade desejada do produto especificado for maior que a disponível no estoque", () => {
    const result = verificarDisponibilidadeEstoque("smartphone", 21);
    expect(result).toBe(false);
  });

  it("Deve retornar true se a quantidade desejada do produto especificado for igual à disponível no estoque", () => {
    const result = verificarDisponibilidadeEstoque("tablet", 15);
    expect(result).toBe(true);
  });
});

describe("calcularPrecoTotal()", () => {
  it("Deve retornar o valor total dos produtos fornecidos", () => {
    const produtos = [
      { nome: "Produto 1", preco: 10, quantidade: 2 },
      { nome: "Produto 2", preco: 15, quantidade: 2 },
      { nome: "Produto 3", preco: 20, quantidade: 1 },
    ];

    const result = calcularPrecoTotal(produtos);
    expect(result).toBe(70);
  });

  it("Deve retornar 0 se nenhum produto for fornecido", () => {
    const produtos = [];
    const result = calcularPrecoTotal(produtos);
    expect(result).toBe(0);
  });

  it("Deve retornar o valor total do único produto fornecido", () => {
    const produtos = [{ nome: "Produto 1", preco: 10, quantidade: 2 }];
    const result = calcularPrecoTotal(produtos);
    expect(result).toBe(20);
  });
});
