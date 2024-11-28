const express = require("express");
const { primeiroNome } = require("./src/utils/validacoes");
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server started on port 3000!");
});
