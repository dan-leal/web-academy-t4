import { Router } from "express";
import productController from "./product.controller";
import { productSchema, productSchemaID } from "./product.schema";
import { validate } from "../../middlewares/validate";
import isAdmin from "../../middlewares/isAdmin";
import isAuth from "../../middlewares/isAuth";

const router = Router();

router.get("/", isAuth, productController.index);
router.post("/", isAuth, isAdmin, validate(productSchema), productController.create);
router.get("/:id", isAuth, validate(productSchemaID), productController.read);
router.patch("/:id", isAuth, isAdmin, validate(productSchema), productController.update);
router.delete("/", isAuth, isAdmin, validate(productSchemaID), productController.remove);

export default router;
