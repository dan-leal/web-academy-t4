import { Router } from "express";
import productController from "./product.controller";
import { productSchema, productSchemaID } from "./product.schema";
import { validate } from "../../middlewares/validate";

const router = Router();

router.get("/", productController.index);
router.post("/", validate(productSchema), productController.create);
router.get("/:id", validate(productSchemaID), productController.read);
router.patch("/:id", validate(productSchema), productController.update);
router.delete("/", validate(productSchemaID), productController.remove);

export default router;
