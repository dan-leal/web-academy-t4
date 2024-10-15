import express from "express";
import dotenv from "dotenv";

import validateEnv from "./utils/validateEnv";
import router from "./router";

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 7777;

app.use(router);

app.get("/", (req, res) => {
  res.send("Oi");
});

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
