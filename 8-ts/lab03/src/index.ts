// Tema: Usando generics, classes e interfaces
// Objetivo: Criar uma pequena aplicação de compras de produtos
// Descrição:  O usuário deve ser capaz de inserir diferentes produtos em um carrinho de compras e ver o valor total do carrinho.
// Classes de Produtos:
// TV(modelo, resolução, tamanho em polegadas, fabricante, valor)
// Celular(modelo, memória, fabricante, valor)
// Bicicleta(modelo, tamanho do aro, fabricante, valor)
//    O cliente deve preencher os dados do produto que vai inserir e ao inserir, ele passa a contar nas estatísticas do carrinho de compras.
// Um display com os dados do carrinho deve estar sempre visível
// A cada inserção de produto na no carrinho, as estatísticas devem ser atualizadas.

// Classe Produto
interface Produto {
  modelo: string;
  fabricante: string;
  valor: number;
}

// Classe TV
class TV implements Produto {
  constructor(
    public modelo: string,
    public resolucao: string,
    public tamanho: number,
    public fabricante: string,
    public valor: number
  ) { }
}

// Classe Celular
class Celular implements Produto {
  constructor(
    public modelo: string,
    public memoria: string,
    public fabricante: string,
    public valor: number
  ) { }
}

// Classe Bicicleta
class Bicicleta implements Produto {
  constructor(
    public modelo: string,
    public tamanhoAro: number,
    public fabricante: string,
    public valor: number
  ) { }
}

// Classe Carrinho
class Carrinho<T extends Produto> {
  private produtos: T[] = [];

  adicionarProduto(produto: T): void {
    this.produtos.push(produto);
  }

  getValorTotal(): number {
    return this.produtos.reduce((total, produto) => total + produto.valor, 0);
  }

  getProdutos(): T[] {
    return this.produtos;
  }
}


// Instanciando os produtos
const tv1 = new TV('TV01', '4k', 50, 'Samsung', 3000);
const celular1 = new Celular('Celular01', '128GB', 'Apple', 5000);
const bicicleta1 = new Bicicleta('Bicicleta01', 26, 'Caloi', 1000);

// Instanciando o carrinho
const carrinho = new Carrinho();

// Adicionando produtos ao carrinho
carrinho.adicionarProduto(tv1);
carrinho.adicionarProduto(celular1);
carrinho.adicionarProduto(bicicleta1);

// Exibindo o valor total do carrinho
console.log('Valor total do carrinho:', carrinho.getValorTotal());

// Exibindo os produtos do carrinho
console.log('Produtos do carrinho:', carrinho.getProdutos());

document.addEventListener('DOMContentLoaded', () => {
  const produtoForm = document.getElementById('produto-form') as HTMLFormElement;
  const tipoProduto = document.getElementById('tipo-produto') as HTMLSelectElement;
  const modeloInput = document.getElementById('modelo') as HTMLInputElement;
  const fabricanteInput = document.getElementById('fabricante') as HTMLInputElement;
  const valorInput = document.getElementById('valor') as HTMLInputElement;
  const especificoInput = document.getElementById('especifico') as HTMLInputElement;
  const carrinhoDiv = document.getElementById('carrinho') as HTMLDivElement;
  const valorTotalDiv = document.getElementById('valor-total') as HTMLDivElement;

  produtoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let produto: Produto;

    switch (tipoProduto.value) {
      case 'TV':
        produto = new TV(
          modeloInput.value,
          especificoInput.value,
          parseInt(fabricanteInput.value),
          fabricanteInput.value,
          parseFloat(valorInput.value)
        );
        break;
      case 'Celular':
        produto = new Celular(
          modeloInput.value,
          especificoInput.value,
          fabricanteInput.value,
          parseFloat(valorInput.value)
        );
        break;
      case 'Bicicleta':
        produto = new Bicicleta(
          modeloInput.value,
          parseInt(especificoInput.value),
          fabricanteInput.value,
          parseFloat(valorInput.value)
        );
        break;
      default:
        return;
    }

    carrinho.adicionarProduto(produto);
    atualizarCarrinho();
  });

  function atualizarCarrinho() {
    carrinhoDiv.innerHTML = '';
    carrinho.getProdutos().forEach((produto) => {
      const produtoDiv = document.createElement('div');
      produtoDiv.textContent = `${produto.modelo} - ${produto.fabricante} - R$${produto.valor.toFixed(2)}`;
      carrinhoDiv.appendChild(produtoDiv);
    });

    valorTotalDiv.textContent = `Valor total: R$${carrinho.getValorTotal().toFixed(2)}`;
  }

  const appDiv = document.getElementById('app') as HTMLDivElement;
  appDiv.appendChild(produtoForm);
  appDiv.appendChild(carrinhoDiv);
  appDiv.appendChild(valorTotalDiv);
});

// Criando o formulário de produto
const produtoForm = document.createElement('form');
produtoForm.id = 'produto-form';

const tipoProdutoLabel = document.createElement('label');
tipoProdutoLabel.textContent = 'Tipo de Produto:';
const tipoProdutoSelect = document.createElement('select');
tipoProdutoSelect.id = 'tipo-produto';
['TV', 'Celular', 'Bicicleta'].forEach(tipo => {
  const option = document.createElement('option');
  option.value = tipo;
  option.textContent = tipo;
  tipoProdutoSelect.appendChild(option);
});
tipoProdutoLabel.appendChild(tipoProdutoSelect);

const modeloLabel = document.createElement('label');
modeloLabel.textContent = 'Modelo:';
const modeloInput = document.createElement('input');
modeloInput.id = 'modelo';
modeloLabel.appendChild(modeloInput);

const fabricanteLabel = document.createElement('label');
fabricanteLabel.textContent = 'Fabricante:';
const fabricanteInput = document.createElement('input');
fabricanteInput.id = 'fabricante';
fabricanteLabel.appendChild(fabricanteInput);

const valorLabel = document.createElement('label');
valorLabel.textContent = 'Valor:';
const valorInput = document.createElement('input');
valorInput.id = 'valor';
valorInput.type = 'number';
valorLabel.appendChild(valorInput);

const especificoLabel = document.createElement('label');
especificoLabel.textContent = 'Especifico (Resolução/Memória/Tamanho do Aro):';
const especificoInput = document.createElement('input');
especificoInput.id = 'especifico';
especificoLabel.appendChild(especificoInput);

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Adicionar Produto';

produtoForm.appendChild(tipoProdutoLabel);
produtoForm.appendChild(modeloLabel);
produtoForm.appendChild(fabricanteLabel);
produtoForm.appendChild(valorLabel);
produtoForm.appendChild(especificoLabel);
produtoForm.appendChild(submitButton);

document.body.appendChild(produtoForm);

const appDiv = document.createElement('div');
appDiv.id = 'app';
document.body.appendChild(appDiv);

const carrinhoDiv = document.createElement('div');
carrinhoDiv.id = 'carrinho';
appDiv.appendChild(carrinhoDiv);

// Criando espaço entre o formulário e o carrinho de compras
const espacoFormCarrinho = document.createElement('div');
espacoFormCarrinho.style.height = '20px';
appDiv.insertBefore(espacoFormCarrinho, carrinhoDiv);

const valorTotalDiv = document.createElement('div');
valorTotalDiv.id = 'valor-total';
appDiv.appendChild(valorTotalDiv);

// Atualizando o valor total do carrinho no HTML
valorTotalDiv.textContent = `Valor total: R$${carrinho.getValorTotal().toFixed(2)}`;


// Função para exibir o carrinho na div
function exibirCarrinho() {
  carrinhoDiv.innerHTML = '';
  carrinho.getProdutos().forEach((produto) => {
    const produtoDiv = document.createElement('div');
    produtoDiv.textContent = `${produto.modelo} - ${produto.fabricante} - R$${produto.valor.toFixed(2)}`;
    carrinhoDiv.appendChild(produtoDiv);
  });

  valorTotalDiv.textContent = `Valor total: R$${carrinho.getValorTotal().toFixed(2)}`;
}

// Exibir o carrinho ao carregar a página
exibirCarrinho();
