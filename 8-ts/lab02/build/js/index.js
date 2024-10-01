"use strict";
// Objetivo: Criar uma pequena aplicação de estatísticas de uma turma.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    getAltura() {
        return this.altura;
    }
    getPeso() {
        return this.peso;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    setAltura(altura) {
        this.altura = altura;
    }
    setPeso(peso) {
        this.peso = peso;
    }
    getDados() {
        return `Id ${this.id} Nome: ${this.nome}, Idade: ${this.idade}, Altura: ${this.altura}, Peso: ${this.peso}`;
    }
}
class Turma {
    constructor(nome) {
        this.nome = nome;
        this.id = crypto.randomUUID();
        this.alunos = [];
        this.nome = nome;
    }
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }
    removerAluno(id) {
        this.alunos = this.alunos.filter(aluno => aluno.getId() !== id);
    }
    editarAluno(id, nome, idade, altura, peso) {
        const aluno = this.alunos.find(aluno => aluno.getId() === id);
        if (aluno) {
            aluno.setNome(nome);
            aluno.setIdade(idade);
            aluno.setAltura(altura);
            aluno.setPeso(peso);
        }
    }
    getNumAlunos() {
        return this.alunos.length;
    }
    getMediaIdades() {
        const totalIdades = this.alunos.reduce((sum, aluno) => sum + aluno.getIdade(), 0);
        return this.alunos.length ? totalIdades / this.alunos.length : 0;
    }
    getMediaAlturas() {
        const totalAlturas = this.alunos.reduce((sum, aluno) => sum + aluno.getAltura(), 0);
        return this.alunos.length ? (totalAlturas / this.alunos.length).toFixed(2) : '0.00';
    }
    getMediaPesos() {
        const totalPesos = this.alunos.reduce((sum, aluno) => sum + aluno.getPeso(), 0);
        return this.alunos.length ? (totalPesos / this.alunos.length).toFixed(2) : '0.00';
    }
}
// Criando os Alunos e Turma
let Dave = new Aluno('Dave', 20, 1.80, 80);
let turma = new Turma('Turma 1');
turma.adicionarAluno(Dave);
function gerarAlunosAleatorios() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://randomuser.me/api/?results=9');
            const data = yield response.json();
            const users = data.results;
            users.forEach((user) => {
                const nome = `${user.name.first} ${user.name.last}`;
                const idade = user.dob.age;
                const altura = parseFloat((Math.random() * (3.0 - 1.5) + 1.5).toFixed(2)); // Altura aleatória entre 1.5m e 3.0m
                const peso = parseFloat((Math.random() * (100 - 50) + 50).toFixed(2)); // Peso aleatório entre 50kg e 100kg
                const aluno = new Aluno(nome, idade, altura, peso);
                turma.adicionarAluno(aluno);
            });
        }
        catch (error) {
            console.error('Erro ao gerar alunos aleatórios:', error);
            throw error;
        }
    });
}
gerarAlunosAleatorios();
// Criando a interface gráfica
const app = document.getElementById('app');
const h1 = document.createElement('h1');
h1.textContent = 'Turma 1';
app === null || app === void 0 ? void 0 : app.appendChild(h1);
const ul = document.createElement('ul');
app === null || app === void 0 ? void 0 : app.appendChild(ul);
const inputNome = document.createElement('input');
inputNome.placeholder = 'Nome';
app === null || app === void 0 ? void 0 : app.appendChild(inputNome);
const inputIdade = document.createElement('input');
inputIdade.placeholder = 'Idade';
app === null || app === void 0 ? void 0 : app.appendChild(inputIdade);
const inputAltura = document.createElement('input');
inputAltura.placeholder = 'Altura';
app === null || app === void 0 ? void 0 : app.appendChild(inputAltura);
const inputPeso = document.createElement('input');
inputPeso.placeholder = 'Peso';
app === null || app === void 0 ? void 0 : app.appendChild(inputPeso);
const br = document.createElement('br');
app === null || app === void 0 ? void 0 : app.appendChild(br);
const buttonGerarAlunoAleatório = document.createElement('button');
buttonGerarAlunoAleatório.type = 'button';
buttonGerarAlunoAleatório.className = 'btn btn-primary';
buttonGerarAlunoAleatório.textContent = 'Gerar Aluno Aleatório';
app === null || app === void 0 ? void 0 : app.appendChild(buttonGerarAlunoAleatório);
buttonGerarAlunoAleatório.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://randomuser.me/api/');
        const data = yield response.json();
        const user = data.results[0];
        inputNome.value = `${user.name.first} ${user.name.last}`;
        inputIdade.value = String(user.dob.age);
        inputAltura.value = (Math.random() * (3.0 - 1.5) + 1.5).toFixed(2); // Altura aleatória entre 1.5m and 3.0m
        inputPeso.value = (Math.random() * (100 - 50) + 50).toFixed(2); // Peso aelatório entre 50kg and 100kg
    }
    catch (error) {
        console.error('Erro ao gerar aluno aleatório:', error);
    }
}));
const buttonAdicionar = document.createElement('button');
buttonAdicionar.type = 'button';
buttonAdicionar.className = 'btn btn-primary';
buttonAdicionar.textContent = 'Adicionar Aluno';
app === null || app === void 0 ? void 0 : app.appendChild(buttonAdicionar);
function adicionarAlunoHandler() {
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
        atualizarTabelaAlunos();
        atualizarEstatisticasUI();
    }
}
buttonAdicionar.addEventListener('click', adicionarAlunoHandler);
const tabelaAlunos = document.createElement('table');
tabelaAlunos.className = 'table table-striped mt-4';
app === null || app === void 0 ? void 0 : app.appendChild(tabelaAlunos);
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
    tbody.innerHTML = '';
    // confere que todos os alunos presentes possuem dados válido
    turma['alunos'] = turma['alunos'].filter(aluno => aluno.getNome() && aluno.getIdade() && aluno.getAltura() && aluno.getPeso());
    turma['alunos'].forEach(aluno => {
        var _a, _b;
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
        (_a = tr.querySelector('.editar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
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
        (_b = tr.querySelector('.deletar')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
            turma.removerAluno(aluno.getId());
            tbody.removeChild(tr);
            atualizarTabelaAlunos();
            atualizarEstatisticasUI();
        });
    });
}
// Para afetar o comportamento de adicionarAluno e removerAluno, podemos usar a técnica de monkey patching
// onde a função original é setada a uma variável e a função original é substituída por uma nova função que chama a função original
// e atualiza a tabela de alunos e as estatísticas da turma.
// somente para os alunos adicionados automaticamente, pois os alunos adicionados manualmente já estão sendo tratados de forma correta.
turma.adicionarAluno = (function (original) {
    return function (...args) {
        original.apply(this, args);
        atualizarTabelaAlunos();
        atualizarEstatisticasUI();
    };
})(turma.adicionarAluno);
turma.removerAluno = (function (original) {
    return function (...args) {
        original.apply(this, args);
        atualizarTabelaAlunos();
        atualizarEstatisticasUI();
    };
})(turma.removerAluno);
atualizarTabelaAlunos();
const estatisticasDiv = document.createElement('div');
app === null || app === void 0 ? void 0 : app.appendChild(estatisticasDiv);
function atualizarEstatisticasUI() {
    estatisticasDiv.innerHTML = `
    <br>
    <p>Número de Alunos: ${turma.getNumAlunos()}</p>
    <p>Média de Idades: ${turma.getMediaIdades()}</p>
    <p>Média de Alturas: ${turma.getMediaAlturas()}</p>
    <p>Média de Pesos: ${turma.getMediaPesos()}</p>
  `;
}
