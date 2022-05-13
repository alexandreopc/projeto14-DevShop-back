import db from "./../db.js";

export async function getProducts(req, res) {
  try {
    const allProducts = await db.collection("products").find({}).toArray();
    res.send(allProducts);
  } catch (e) {
    res.sendStatus(500);
    console.log("erro ao pegar os produtos", e);
  }
}

export async function getHardware(req, res) {
  try {
    const hardware = await db
      .collection("products")
      .find({ category: "hardware" })
      .toArray();
    res.send(hardware);
  } catch (e) {
    res.sendStatus(500);
    console.log("erro ao pegar os itens de hardware", e);
  }
}

export async function getAudio(req, res) {
  try {
    const audio = await db
      .collection("products")
      .find({ category: "audio" })
      .toArray();
    res.send(audio);
  } catch (e) {
    res.sendStatus(500);
    console.log("erro ao pegar os itens de audio", e);
  }
}

export async function getSmarthome(req, res) {
  try {
    const smarthome = await db
      .collection("products")
      .find({ category: "smarthome" })
      .toArray();
    res.send(smarthome);
  } catch (e) {
    res.sendStatus(500);
    console.log("erro ao pegar os itens de smarthome", e);
  }
}

export async function getBooks(req, res) {
  try {
    const books = await db
      .collection("products")
      .find({ category: "books" })
      .toArray();
    res.send(books);
  } catch (e) {
    res.sendStatus(500);
    console.log("erro ao pegar os itens de livros", e);
  }
}

export async function getChair(req, res) {
  try {
    const chair = await db
      .collection("products")
      .find({ category: "chair" })
      .toArray();
    res.send(chair);
  } catch (e) {
    res.sendStatus(500);
    console.log("erro ao pegar os itens de chair", e);
  }
}

export async function getGames(req, res) {
  try {
    const games = await db
      .collection("products")
      .find({ category: "games" })
      .toArray();
    res.send(games);
  } catch (e) {
    res.sendStatus(500);
    console.log("erro ao pegar os itens de games", e);
  }
}
