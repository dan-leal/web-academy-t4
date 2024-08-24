const champion = document.getElementById("champion");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");



// Texto base
let storyText = `:campeao: é um top laner que inicia com alcance curto e muda para alcance longo após o level 16, então podemos buildar este personagem utilizando items AP ou AD. Como você escolheu :escolha:, seu item inicial é :insertx: e uma poção de vida. Ao voltar base, compre :inserty:, é o mais indicado a comprar antes dos 10 minutos de jogo. Sua build core consiste nos itens: :insertz:.`;

let insertX = ["Espada de Doran", "Escudo de Doran", "Anel de Doran"]; // Itens iniciais
let insertY = ["Botas", "Arco Recurvo", "Adaga"]; // Item da primeira volta base
let insertAP = [
  "Dente de Na'shor, Capuz da Morte Rabadon e Perdição de Lich",
  "Dente de Na'shor, Capuz da Morte Rabadon e Chama Sombria",
  "Dente de Na'shor, Capuz da Morte Rabadon e Cetro de Cristal de Rylai",
]; // 3 items core AP
let insertAD = [
  "Mata-Cráquens, Lâmina da Fúria de Guinsoo e Terminus",
  "Mata-Cráquens, Dente de Na'shor e Terminus",
  "Mata-Cráquens, Espada do Rei Destruído e Lâmina da Fúria de Guinsoo",
]; // 3 items core AD

// função de escolher um valor aleatório dentro array
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Ao clicar em Gerar a build, será executada a função result.
randomize.addEventListener("click", result);

function result() {
  // Cria uma história variável com base no texto padrão
  let newStory = storyText;

  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);

  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);


  // Verifica se foi selecionado campeão, caso contrário, seleciona Kayle por padrão
  if (champion.value !== "") {
    const name = champion.value;
    newStory = newStory.replace(":campeao:", name);
  } else {
    champion.value = "Kayle";
    newStory = newStory.replace(":campeao:", "Kayle");
  }

  // Verifica se os itens selecionados foram AP - Poder mágico ou AD - Poder Físico ou On-Hit
  if (document.getElementById("ad").checked) {
    newStory = newStory.replace(":escolha:", "AD");
    var zItem = randomValueFromArray(insertAD);
  } else {
    newStory = newStory.replace(":escolha:", "AP");
    var zItem = randomValueFromArray(insertAP);
  }
  newStory = newStory.replace(":insertz:", zItem);

  // Adiciona a história nova gerada randomicamente ao HTML
  story.textContent = newStory;
  story.style.visibility = "visible";

  // Consumindo uma API pública pra adicionar imagem do campeão do lol
  const img = document.querySelector("img");
  img.src = `https://ddragon.leagueoflegends.com/cdn/14.16.1/img/champion/${champion.value}.png`;
  img.alt = "Kayle - Campeão de LOL";
  document.body.appendChild(img);
}
