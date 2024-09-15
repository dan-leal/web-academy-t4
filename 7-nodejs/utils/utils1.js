const lerDir = (arquivo) =>
  new Promise((resolve, reject) => {
    readdir(arquivo, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

// Função cria link para os arquivos do diretório public
const createLink = (filename) => {
  return `<a href="/${filename}">${filename}</a><br>\n`;
};

// Função escreve a resposta para o Express e formata para html
const escreveArquivoHTML = (arquivo, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  let html = `<a href="/">Voltar</a><br><p>${arquivo}</p>`;
  res.write(html, "utf-8");
};

module.exports = { lerDir, createLink, escreveArquivoHTML };
