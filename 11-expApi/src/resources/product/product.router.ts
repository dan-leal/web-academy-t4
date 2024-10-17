import { Router } from "express";
import productController from "./product.controller";

const router = Router();

router.get("/", productController.index);
router.post("/", productController.create);
router.get("/:id", productController.read);
router.patch("/:id", productController.update);
router.delete("/", productController.remove);

export default router;
