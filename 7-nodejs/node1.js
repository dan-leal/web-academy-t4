const http = require("http");
let fs = require("fs")
const {exec} = require('child_process');

const server = http.createServer((req,res)=> {
    process.argv.forEach((val, index) => {
        console.log(`${index}: ${val}`)
        })
    let comando = process.argv[2]
    console.log(`O último comando foi: ${comando.length}`)

    fs.readFile("dados.txt",(err,data)=> {
        res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
        res.write(`${data.length}`);
        return res.end();
    })
    
})

server.listen(3333);

