import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import session from "express-session";
import { v4 as uuidv4 } from "uuid";


import validateEnv from "./utils/validateEnv";
import router from "./router";
import createCookieLang from "./middlewares/createCookieLang";
import { Product } from "@prisma/client";

import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./swagger_output.json";

declare module "express-session" {
  interface SessionData {
    uid: string;
    userTypeId: string;
    cart: Product[];
  }
}


dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 7777;

app.use(cookieParser());
app.use(express.json());
app.use(createCookieLang);
app.use(session({
  genid: (req) => uuidv4(),
  secret: 'Hi9Cf#mK98',
  resave: true,
  saveUninitialized: true,
}));

app.use(router);

app.get("/", (req, res) => {
  res.send("Oi");
});

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerOutput));
