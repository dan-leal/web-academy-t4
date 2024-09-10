import http from "http";
import fs from "fs";
import dotenv from "dotenv";
import exec from "child_process";

const server = http.createServer((req, res) => {
  let comando = process.argv[2];

  fs.readdir(comando, (err, arquivos) => {
    if (err) console.log(err);
    else {
      let pulalinha = "<br>";
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      arquivos.forEach((arquivo) => {
        res.write(arquivo, "utf-8");
        res.write(pulalinha, "utf-8");
      });
      return res.end();
    }
  });
});

server.listen(3333);
