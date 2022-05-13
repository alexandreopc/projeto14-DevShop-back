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