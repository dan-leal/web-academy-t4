import http from "http";
import { config } from "dotenv";
import { promises } from "fs";

config({ path: `.env.${process.env.NODE_ENV}` });
const PORT = process.env.PORT ?? 3333;

let lerArquivo = async (filePath) => {
  try {
    return await promises.readFile(filePath, "utf-8");
  } catch (error) {
    console.error(error);
  }
};

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    let html = await lerArquivo("./view/index.html");
    let css = await lerArquivo("./view/style.css");
    let js = await lerArquivo("./view/script.js");
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    html = html.replace("</title>", `</title>\n <style>\n${css}</style>`);
    html = html.replace("</body>", `<script>${js}</script></body>`);
    res.write(`${html}`, "utf-8");
    res.end();
  }
});

server.listen(PORT);
