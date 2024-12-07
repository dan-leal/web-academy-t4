import { Router } from "express";

import productRouter from "../resources/product/product.router";
import languageRouter from "../resources/language/language.router";
import userRouter from "../resources/user/user.router";
import authRouter from "../resources/auth/auth.router";

const router = Router();
// para redirecionar para o Router dos produtos, seguindo a hierarquia de routers
router.use(
  "/",
  // #swagger.tags = ['Auth']
  authRouter
);

router.use(
  "/products",
  // #swagger.tags = ['Products']
  productRouter
);

router.use(
  "/languages",
  // #swagger.tags = ['Languages']
  languageRouter
);

router.use(
  "/users",
  // #swagger.tags = ['Users']
  userRouter
);
export default router;
