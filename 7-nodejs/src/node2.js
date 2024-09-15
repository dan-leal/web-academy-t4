import http from "http";
import { readFileSync } from "fs";
import { lerDir, createLink, escreveArquivoHTML } from "../utils/utils2.js";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT ?? 3333;

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    // pegar comando do console
    let comando = process.argv[2];

    // ler o diretório e aguardar resposta da Promise
    let pasta = await lerDir(comando);

    // escreve a resposta para o Express e formata para html
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    await pasta.map((arquivo) => {
      let html = createLink(arquivo);
      res.write(html, "utf-8");
    });

    res.end();
    return;
  }
  if (req.url === "/commonJs.txt") {
    // nome do arquivo pela url
    let comando = `./public${req.url}`;
    // ler os arquivos e aguardar resposta da Promise
    const arquivo = readFileSync(comando, "utf8");

    // chama função para escrever o arquivo na página
    escreveArquivoHTML(arquivo, res);

    return res.end();
  }

  if (req.url === "/esModules.txt") {
    // nome do arquivo pela url
    let comando = `./public${req.url}`;
    // ler os arquivos e aguardar resposta da Promise
    const arquivo = readFileSync(comando, "utf8");

    // chama função para escrever o arquivo na página
    escreveArquivoHTML(arquivo, res);

    return res.end();
  }
});

server.listen(PORT);
