import express from 'express';
import dotenv from 'dotenv';
import { engine } from 'express-handlebars';
import sass from 'node-sass-middleware';
import router from './router/router';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3333;

// configurando o Handlebars
app.engine(
  'handlebars',
  // eslint-disable-next-line @typescript-eslint/no-require-imports
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

// utilizando sass
app.use(
  sass({
    src: `${__dirname}/../public/scss`,
    dest: `${__dirname}/../public/css`,
    outputStyle: 'compressed',
    prefix: '/css',
  }),
);

app.use('/css', express.static(`${__dirname}/../public/css`));

app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
