import http from "http";
import { config } from "dotenv";
import { readFileSync } from "fs";
config({ path: `.env.${process.env.NODE_ENV}` });
const PORT = process.env.PORT ?? 3333;

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    let html = readFileSync("./view/index.html", "utf-8");
    let css = readFileSync("./view/style.css", "utf-8");
    let js = readFileSync("./view/script.js", "utf-8");
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    html = html.replace("</title>", `</title>\n <style>\n${css}</style>`);
    html = html.replace("</body>", `<script>${js}</script></body>`);
    res.write(`${html}`, "utf-8");
    res.end();
  }
});

server.listen(PORT);
