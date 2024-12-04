import { Router } from "express";

import productRouter from "../resources/product/product.router";
import languageRouter from "../resources/language/language.router";
import userRouter from "../resources/user/user.router";
import authRouter from "../resources/auth/auth.router";

const router = Router();
// para redirecionar para o Router dos produtos, seguindo a hierarquia de routers
router.use("/", authRouter);
router.use("/products", productRouter);
router.use("/languages", languageRouter);
router.use("/users", userRouter);
export default router;
