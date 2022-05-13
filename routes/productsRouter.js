import { Router } from "express";
import { getProducts, getHardware, getAudio, getSmarthome, getBooks } from "./../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/home", getProducts);
productsRouter.get("/hardware", getHardware);
productsRouter.get("/audio", getAudio);
productsRouter.get("/smarthome", getSmarthome);
productsRouter.get("/books", getBooks);

export default productsRouter;