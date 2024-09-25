import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { engine } from 'express-handlebars';

import router from './router/router';
import { dirname } from 'path';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3333;

// configurando o Handlebars
app.engine(
  'handlebars',
  engine({ helpers: require(`${__dirname}/views/helpers/helpers.ts`) }),
);
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

// configurando bootstrap
app.use('/js', [
  express.static(`${__dirname}/../public/js`),
  express.static(`${__dirname}/../node_modules/bootstrap/dist/js`),
]);

// configurando logger
app.use('/img', express.static(`${__dirname}/../public/img`));
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
