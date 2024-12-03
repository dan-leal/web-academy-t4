import { Router } from "express";

import productRouter from "../resources/product/product.router";
import languageRouter from "../resources/language/language.router";

const router = Router();
// para redirecionar para o Router dos produtos, seguindo a hierarquia de routers
router.use("/products", productRouter);
router.use("/languages", languageRouter);

export default router;
