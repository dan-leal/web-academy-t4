import http from "http";

// arquivo index.js
console.log("Instituto de Computacão");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  res.write("Instituto de Computação");
  res.end();
});

server.listen(3333);
