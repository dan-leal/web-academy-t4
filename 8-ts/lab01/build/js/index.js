"use strict";
// Criar uma pequena aplicação “Lembretes/To Do List”.
// Descrição: O usuário deve ser capaz de criar/inserir, editar e apagar pequenos lembretes para realizar atividades pendentes.
// Cada lembrete deve ter:
// Título
// Data e Hora de Inserção
// Cria o elemento de parágrafo e adiciona a div App
const app = document.getElementById("app");
const p = document.createElement("p");
p.textContent = "Lembretes para realizar";
app === null || app === void 0 ? void 0 : app.appendChild(p);
// Cria o elemento de input para adicionar lembrete
const entrada = document.createElement("input");
entrada.setAttribute("type", "text");
entrada.setAttribute("placeholder", "Digite seu lembrete");
app === null || app === void 0 ? void 0 : app.appendChild(entrada);
// Criar o elemento adicionar
const botao = document.createElement("button");
botao.textContent = "Adicionar";
// adiciona o elemento na div App
app === null || app === void 0 ? void 0 : app.appendChild(botao);
// Array para armazenar os lembretes como tuplas
const lembretes = [];
// cria um evento de click para o botão
botao.addEventListener("click", () => {
    if (entrada.value === "") {
        alert("O lembrete não pode ser vazio");
        return;
    }
    const lembrete = [entrada.value, new Date().toLocaleString()];
    lembretes.push(lembrete);
    renderLembretes();
    entrada.value = "";
});
// Função para renderizar os lembretes
function renderLembretes() {
    // Limpa a lista antes de renderizar
    ul.innerHTML = "";
    lembretes.forEach(([titulo, dataHora], i) => {
        const li = document.createElement("li");
        li.textContent = `${titulo} - Criado em ${dataHora}`;
        ul.appendChild(li);
        // adiciona um botão de editar ao li
        const botaoEditar = document.createElement("button");
        botaoEditar.textContent = "Editar";
        li.appendChild(botaoEditar);
        botaoEditar.addEventListener("click", () => {
            const novoLembrete = prompt("Insira o valor do novo lembrete");
            if (novoLembrete) {
                lembretes[i] = [novoLembrete, new Date().toLocaleString()];
                renderLembretes();
            }
            else {
                alert("O lembrete não pode ser vazio");
            }
        });
        //  Adiciona um botão de remover ao li
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        li.appendChild(botaoRemover);
        botaoRemover.addEventListener("click", () => {
            lembretes.splice(i, 1);
            renderLembretes();
        });
    });
}
// Criar o elemento de To Do List e adiciona a div App
const ul = document.createElement("ul");
app === null || app === void 0 ? void 0 : app.appendChild(ul);
// Adiciona um botão que limpa todos os lembretes
const clearButton = document.createElement("button");
clearButton.textContent = "Limpar todos";
app === null || app === void 0 ? void 0 : app.appendChild(clearButton);
clearButton.addEventListener("click", () => {
    lembretes.length = 0;
    renderLembretes();
});
