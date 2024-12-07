import { Router } from "express";
import authController from "./auth.controller";

const router = Router();

router.post("/", authController.signup);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

export default router;
