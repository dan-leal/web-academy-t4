import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import validateEnv from "./utils/validateEnv";
import router from "./router";
import createCookieLang from "./middlewares/createCookieLang";

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 7777;

app.use(cookieParser());
app.use(express.json());
app.use(createCookieLang);
app.use(router);

app.get("/", (req, res) => {
  res.send("Oi");
});

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
