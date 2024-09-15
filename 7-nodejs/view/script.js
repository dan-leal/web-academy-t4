function imprimirLorem() {
  const number = document.getElementById("paragrafosInput").value;
  document.getElementById("saidaDeTexto").innerHTML = `
    <p>${gerarLoremIpsum(number)}</p>
  `;
}

// Inspirado em outros códigos da internet
function gerarLoremIpsum(numParagrafos) {
  let loremIpsum = "";

  // inspirado no site: https://www.codewithfaraz.com/content/166/create-your-own-lorem-ipsum-generator-using-html-css-and-javascript
  let palavra = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
    "Ut",
    "enim",
    "ad",
    "minim",
    "veniam",
    "quis",
    "nostrud",
    "exercitation",
    "ullamco",
    "laboris",
    "nisi",
    "ut",
    "aliquip",
    "ex",
    "ea",
    "commodo",
    "consequat",
    "Duis",
    "aute",
    "irure",
    "dolor",
    "in",
    "reprehenderit",
    "in",
    "voluptate",
    "velit",
    "esse",
    "cillum",
    "dolore",
    "eu",
    "fugiat",
    "nulla",
    "pariatur",
    "Excepteur",
    "sint",
    "occaecat",
    "cupidatat",
    "non",
    "proident",
    "sunt",
    "in",
    "culpa",
    "qui",
    "officia",
    "deserunt",
    "mollit",
    "anim",
    "id",
    "est",
    "laborum",
  ];
  for (let i = 0; i < numParagrafos; i++) {
    var paragraph = "";
    let numPalavras = Math.floor(Math.random() * 50) + 10;
    for (let j = 0; j < numPalavras; j++) {
      // seleciona um índice aleatório do vetor de palavras
      var palavraAleatoria =
        palavra[Math.floor(Math.random() * palavra.length)];

      paragraph += palavraAleatoria + " ";
    }
    loremIpsum += "<p>" + paragraph + "</p>";
  }
  return loremIpsum;
}
