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

export async function getHardware(req, res){
  try{
    const hardware = await db.collection("products").find({category: "hardware"}).toArray();
    res.send(hardware);
  }
  catch(e){
    res.sendStatus(500);
    console.log("erro ao pegar os itens de hardware", e);
  }
}