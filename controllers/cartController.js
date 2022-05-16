import db from "./../db.js";

export async function cartController(req, res) {
    try {
        const selectedProduct = req.body;
        await db.collection("cart").insertOne(selectedProduct);
        res.status(200).send("Produto adicionado no carrrinho");

    } catch (error) {
        console.log(error);
        res.send(error)
    }

}

export async function getProductsCart(req, res) {
    const {email} = req.headers;
    try {
        const products = await db.collection("cart").find({email}).toArray();
        res.status(200).send(products);

    } catch (error) {
        res.status(500, error);
        console.log(error);
    }
}