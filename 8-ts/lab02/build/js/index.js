"use strict";
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
// primeiro cria-se a abstração, e depois cria os objetos que obedecem a abstração.
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
let Dave = new Aluno('Dave', 20, 1.80, 80);
console.log(Dave.getDados());
