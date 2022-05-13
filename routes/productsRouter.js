import { Router } from "express";
import { getProducts, getHardware, getAudio } from "./../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/home", getProducts);
productsRouter.get("/hardware", getHardware);
productsRouter.get("/audio", getAudio);

export default productsRouter;