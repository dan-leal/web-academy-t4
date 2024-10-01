
// Objetivo: Criar uma pequena aplicação de estatísticas de uma turma.

// Descrição:  O usuário deve ser capaz de criar/inserir,
// editar e apagar alunos em uma turma de educação física

// A classe aluno tem os seguintes membros: id, nome completo, idade, altura e peso
// A classe turma tem os seguintes membros: id, nome, lista de alunos, getNumAlunos(), getMediaIdades(), getMediaAlturas(), getMediaPesos().


// Um display com as estatísticas da turma devem estar sempre visível:
// A cada inserção de aluno na turma, as estatísticas devem ser atualizadas
// A cada alteração de dados e um aluno, as estatísticas devem ser atualizadas.


// Usem a estrutura de fontes apresentada no repositório de exemplos usado no curso.
// Usem os templates de métodos quando observarem que existem métodos com parâmetros e tipos de retorno parecidos
// Usem os construtores para estabelecer os modificadores de acesso


class Aluno {
  public id: string = crypto.randomUUID();
  constructor(
    private nome: string,
    private idade: number,
    private altura: number,
    private peso: number,
  ) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }

  public getId(): string {
    return this.id;
  }

  public getNome(): string {
    return this.nome;
  }

  public getIdade(): number {
    return this.idade;
  }

  public getAltura(): number {
    return this.altura;
  }

  public getPeso(): number {
    return this.peso;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public setIdade(idade: number): void {
    this.idade = idade;
  }

  public setAltura(altura: number): void {
    this.altura = altura;
  }

  public setPeso(peso: number): void {
    this.peso = peso;
  }

  public getDados(): string {
    return `Id ${this.id} Nome: ${this.nome}, Idade: ${this.idade}, Altura: ${this.altura}, Peso: ${this.peso}`;
  }
}

class Turma {
  public readonly id: string = crypto.randomUUID();
  private alunos: Aluno[] = [];

  constructor(private nome: string) {
    this.nome = nome;
  }

  public getId(): string {
    return this.id;
  }

  public getNome(): string {
    return this.nome;
  }

  public adicionarAluno(aluno: Aluno): void {
    this.alunos.push(aluno);
    this.atualizarEstatisticas();
  }

  public removerAluno(id: string): void {
    this.alunos = this.alunos.filter(aluno => aluno.getId() !== id);
    this.atualizarEstatisticas();
  }

  public editarAluno(id: string, nome: string, idade: number, altura: number, peso: number): void {
    const aluno = this.alunos.find(aluno => aluno.getId() === id);
    if (aluno) {
      aluno.setNome(nome);
      aluno.setIdade(idade);
      aluno.setAltura(altura);
      aluno.setPeso(peso);
      this.atualizarEstatisticas();
    }
  }

  public getNumAlunos(): number {
    return this.alunos.length;
  }

  public getMediaIdades(): number {
    const totalIdades = this.alunos.reduce((sum, aluno) => sum + aluno.getIdade(), 0);
    return this.alunos.length ? totalIdades / this.alunos.length : 0;
  }

  public getMediaAlturas(): string {
    const totalAlturas = this.alunos.reduce((sum, aluno) => sum + aluno.getAltura(), 0);
    return this.alunos.length ? (totalAlturas / this.alunos.length).toFixed(2) : '0.00';
  }

  public getMediaPesos(): string {
    const totalPesos = this.alunos.reduce((sum, aluno) => sum + aluno.getPeso(), 0);
    return this.alunos.length ? (totalPesos / this.alunos.length).toFixed(2) : '0.00';
  }

  private atualizarEstatisticas(): void {
    console.log(`Número de Alunos: ${this.getNumAlunos()}`);
    console.log(`Média de Idades: ${this.getMediaIdades()}`);
    console.log(`Média de Alturas: ${this.getMediaAlturas()}`);
    console.log(`Média de Pesos: ${this.getMediaPesos()}`);
  }
}

// Criando os Alunos e Turma

let Dave = new Aluno('Dave', 20, 1.80, 80);
let turma = new Turma('Turma 1');
turma.adicionarAluno(Dave);

async function gerarAlunosAleatorios(): Promise<void> {
  try {
    const response = await fetch('https://randomuser.me/api/?results=9');
    const data = await response.json();
    const users = data.results;

    users.forEach((user: { name: { first: string; last: string; }; dob: { age: number; }; }) => {
      const nome = `${user.name.first} ${user.name.last}`;
      const idade = user.dob.age;
      const altura = parseFloat((Math.random() * (3.0 - 1.5) + 1.5).toFixed(2)); // Altura aleatória entre 1.5m e 3.0m
      const peso = parseFloat((Math.random() * (100 - 50) + 50).toFixed(2)); // Peso aleatório entre 50kg e 100kg

      const aluno = new Aluno(nome, idade, altura, peso);
      turma.adicionarAluno(aluno);
    });
  } catch (error) {
    console.error('Erro ao gerar alunos aleatórios:', error);
    throw error;
  }
}

gerarAlunosAleatorios();

// Criando a interface gráfica
const app = document.getElementById('app');
const h1 = document.createElement('h1');
h1.textContent = 'Turma 1';
app?.appendChild(h1);

const ul = document.createElement('ul');
app?.appendChild(ul);

const inputNome = document.createElement('input');
inputNome.placeholder = 'Nome';
app?.appendChild(inputNome);

const inputIdade = document.createElement('input');
inputIdade.placeholder = 'Idade';
app?.appendChild(inputIdade);

const inputAltura = document.createElement('input');
inputAltura.placeholder = 'Altura';
app?.appendChild(inputAltura);

const inputPeso = document.createElement('input');
inputPeso.placeholder = 'Peso';
app?.appendChild(inputPeso);

const br = document.createElement('br');
app?.appendChild(br);

const buttonGerarAlunoAleatório = document.createElement('button');
buttonGerarAlunoAleatório.type = 'button';
buttonGerarAlunoAleatório.className = 'btn btn-primary';
buttonGerarAlunoAleatório.textContent = 'Gerar Aluno Aleatório';
app?.appendChild(buttonGerarAlunoAleatório);

buttonGerarAlunoAleatório.addEventListener('click', async () => {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];

    inputNome.value = `${user.name.first} ${user.name.last}`;
    inputIdade.value = String(user.dob.age);
    inputAltura.value = (Math.random() * (3.0 - 1.5) + 1.5).toFixed(2); // Altura aleatória entre 1.5m and 3.0m
    inputPeso.value = (Math.random() * (100 - 50) + 50).toFixed(2); // Peso aelatório entre 50kg and 100kg
  } catch (error) {
    console.error('Erro ao gerar aluno aleatório:', error);
  }
});

const buttonAdicionar = document.createElement('button');
buttonAdicionar.type = 'button';
buttonAdicionar.className = 'btn btn-primary';
buttonAdicionar.textContent = 'Adicionar Aluno';
app?.appendChild(buttonAdicionar);

buttonAdicionar.addEventListener('click', () => {
  const nome = inputNome.value;
  const idade = Number(inputIdade.value);
  const altura = Number(inputAltura.value);
  const peso = Number(inputPeso.value);

  if (nome && idade && altura && peso) {
    const aluno = new Aluno(nome, idade, altura, peso);
    turma.adicionarAluno(aluno);
    inputNome.value = '';
    inputIdade.value = '';
    inputAltura.value = '';
    inputPeso.value = '';
  }
});

const tabelaAlunos = document.createElement('table');
tabelaAlunos.className = 'table table-striped mt-4';
app?.appendChild(tabelaAlunos);

const thead = document.createElement('thead');
thead.innerHTML = `
  <tr>
    <th>Nome</th>
    <th>Idade</th>
    <th>Altura</th>
    <th>Peso</th>
    <th>Ações</th>
  </tr>
`;
tabelaAlunos.appendChild(thead);

const tbody = document.createElement('tbody');
tabelaAlunos.appendChild(tbody);

function atualizarTabelaAlunos() {
  console.log('Alunos:', turma['alunos']);
  tbody.innerHTML = '';
  // confere que todos os alunos presentes possuem dados válido
  turma['alunos'] = turma['alunos'].filter(aluno => aluno.getNome() && aluno.getIdade() && aluno.getAltura() && aluno.getPeso());
  turma['alunos'].forEach(aluno => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${aluno.getNome()}</td>
      <td>${aluno.getIdade()}</td>
      <td>${aluno.getAltura()}</td>
      <td>${aluno.getPeso()}</td>
      <td>
        <button class="btn btn-warning btn-sm editar">Editar</button>
        <button class="btn btn-danger btn-sm deletar">Deletar</button>
      </td>
    `;
    tbody.appendChild(tr);

    tr.querySelector('.editar')?.addEventListener('click', () => {
      inputNome.value = aluno.getNome();
      inputIdade.value = String(aluno.getIdade());
      inputAltura.value = String(aluno.getAltura());
      inputPeso.value = String(aluno.getPeso());

      buttonAdicionar.textContent = 'Salvar';
      buttonAdicionar.onclick = () => {
        turma.removerAluno(aluno.getId()); // Remove the old position of the edited student
        const editedAluno = new Aluno(inputNome.value, Number(inputIdade.value), Number(inputAltura.value), Number(inputPeso.value));
        turma.adicionarAluno(editedAluno);
        atualizarTabelaAlunos();
        atualizarEstatisticasUI();
        buttonAdicionar.textContent = 'Adicionar Aluno';
        buttonAdicionar.onclick = adicionarAlunoHandler;
        inputNome.value = '';
        inputIdade.value = '';
        inputAltura.value = '';
        inputPeso.value = '';
      };
    });

    tr.querySelector('.deletar')?.addEventListener('click', () => {
      turma.removerAluno(aluno.getId());
      tbody.removeChild(tr);
      atualizarTabelaAlunos();
      atualizarEstatisticasUI();
    });
  });
}

function adicionarAlunoHandler() {
  const nome = inputNome.value;
  const idade = Number(inputIdade.value);
  const altura = Number(inputAltura.value);
  const peso = Number(inputPeso.value);


  if (nome && idade && altura && peso) {
    const aluno = new Aluno(nome, idade, altura, peso);
    console.log(`Adicionando aluno: ${aluno.getDados()}`);
    turma.adicionarAluno(aluno);
    inputNome.value = '';
    inputIdade.value = '';
    inputAltura.value = '';
    inputPeso.value = '';
    atualizarTabelaAlunos();
    atualizarEstatisticasUI();
  }
}

buttonAdicionar.addEventListener('click', adicionarAlunoHandler);

// Para afetar o comportamento de adicionarAluno e removerAluno, podemos usar a técnica de monkey patching
turma.adicionarAluno = (function (original: (aluno: Aluno) => void) {
  return function (this: Turma, ...args: [Aluno]) {
    original.apply(this, args);
    atualizarTabelaAlunos();
    atualizarEstatisticasUI();
  };
})(turma.adicionarAluno);

turma.removerAluno = (function (original: (id: string) => void) {
  return function (this: Turma, ...args: [string]) {
    original.apply(this, args);
    atualizarTabelaAlunos();
    atualizarEstatisticasUI();
  };
})(turma.removerAluno);

atualizarTabelaAlunos();

const estatisticasDiv = document.createElement('div');
app?.appendChild(estatisticasDiv);

function atualizarEstatisticasUI() {
  estatisticasDiv.innerHTML = `
    <br>
    <p>Número de Alunos: ${turma.getNumAlunos()}</p>
    <p>Média de Idades: ${turma.getMediaIdades()}</p>
    <p>Média de Alturas: ${turma.getMediaAlturas()}</p>
    <p>Média de Pesos: ${turma.getMediaPesos()}</p>
  `;
}
