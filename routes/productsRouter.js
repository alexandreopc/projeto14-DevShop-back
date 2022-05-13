import { Router } from "express";
import { getProducts, getHardware } from "./../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/home", getProducts);
productsRouter.get("/hardware", getHardware);

export default productsRouter;