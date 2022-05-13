import { Router } from "express";
import {
  getProducts,
  getHardware,
  getAudio,
  getSmarthome,
  getBooks,
  getChair,
  getGames,
  getPeripherals
} from "./../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/home", getProducts);
productsRouter.get("/hardware", getHardware);
productsRouter.get("/audio", getAudio);
productsRouter.get("/smarthome", getSmarthome);
productsRouter.get("/books", getBooks);
productsRouter.get("/chair", getChair);
productsRouter.get("/games", getGames);
productsRouter.get("/accessory", getPeripherals);

export default productsRouter;
