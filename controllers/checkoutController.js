import db from "./../db.js";

export async function checkoutController(req, res) {
    try {
        const {email} = req.headers;
        console.log(email)
        const body = req.body;
        await db.collection("checkout").insertOne(body);
        await db.collection("cart").deleteMany({email});
        res.status(200).send("Compra efetuada com sucesso!")
    } catch (error) {
        console.log(error);
        res.sendStatus(error);
    }


    
}