import { readdir } from "fs";
export function lerDir(arquivo) {
  return new Promise((resolve, reject) => {
    readdir(arquivo, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

// Função cria link para os arquivos do diretório public
export function createLink(filename) {
  return `<a href="/${filename}">${filename}</a><br>\n`;
}

// Função escreve a resposta para o Express e formata para html
export function escreveArquivoHTML(arquivo, res) {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  let html = `<a href="/">Voltar</a><br><p>${arquivo}</p>`;
  res.write(html, "utf-8");
}
