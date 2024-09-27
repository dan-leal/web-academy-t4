import { Router } from 'express';

import mainController from '../controllers/main';
import produtoController from '../controllers/produto';
const router = Router();

// Controlador Main
router.get('/hb1', mainController.hb1);
router.get('/hb2', mainController.hb2);
router.get('/hb3', mainController.hb3);
router.get('/hb4', mainController.hb4);
router.get('/bem-vindo/:nome', mainController.bemvindo);
router.get('/lorem/:paragrafos', mainController.paragrafos);
router.get('/about', mainController.about);
router.get('/', mainController.hello);

// Controlador Produto
router.get('/produtos', produtoController.index);
router.all('/produtos/create', produtoController.create);
router.post('/produtos/create', produtoController.create);
router.get('/produtos/:id', produtoController.read);
router.post('/produtos/:id', produtoController.remove);
router.get('/produtos/update/:id', produtoController.update);
router.post('/produtos/update/:id', produtoController.update);

export default router;
