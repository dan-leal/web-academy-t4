import { Router } from "express";

import productRouter from "../resources/product/product.router";

const router = Router();
// para redirecionar para o Router dos produtos, seguindo a hierarquia de routers
router.use("/products", productRouter);

export default router;
