import http from "http";
import fs, { readdir } from "fs";
import dotenv from "dotenv";
import exec from "child_process";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT ?? 3333;

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    // pegar comando do console
    let comando = process.argv[2];

    // ler os arquivos e aguardar resposta da Promise
    let arquivos = await lerArquivo(comando);

    // escreve a resposta para o Express e formata para html
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    arquivos.map((arquivo) => {
      let html = createLink(arquivo);
      res.write(html, "utf-8");
    });
    return res.end();
  }
});

const lerArquivo = (arquivo) =>
  new Promise((resolve, reject) => {
    fs.readdir(arquivo, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

const createLink = (filename) => {
  return `<a href="/${filename}">${filename}</a><br>\n`;
};

server.listen(PORT);
