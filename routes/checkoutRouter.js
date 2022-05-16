import { Router } from "express";
import { checkoutController } from "./../controllers/checkoutController.js";

const checkoutRouter = Router();

checkoutRouter.post("/success", checkoutController);

export default checkoutRouter;

