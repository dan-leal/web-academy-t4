import Router from "express";
import routerV1 from "./routerV1";

const router = Router();

router.use("/V1", routerV1);

export default router;
