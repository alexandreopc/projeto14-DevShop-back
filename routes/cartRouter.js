import { Router } from "express";
import { cartController, getProductsCart } from "./../controllers/cartController.js";

const cartRouter = Router();

cartRouter.post("/cart", cartController);
cartRouter.get("/cart", getProductsCart);

export default cartRouter;