import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

import db from "./../db.js";

export async function signUp(req, res) {
    try {
        const SALT = 10;
        const passwordHash = bcrypt.hashSync(req.body.password, SALT);

        await db.collection("users").insertOne({
            name: req.body.name,
            email: req.body.email,
            password: passwordHash
        });

        return res.sendStatus(201);
    } catch (e) {
        console.log("Error creating new user.", e);
        return res.sendStatus(500);
    }

}

export async function signIn(req, res) {
    try {
        const user = await db.collection("users").findOne({ email: req.body.email });
        if (!user) return res.sendStatus(404);

        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const token = uuid();
            await db.collection("sessions").insertOne({ token, userId: user._id });
            return res.send({ token, name: user.name });
        }

        return res.sendStatus(404);
    } catch (e) {
        console.log("Error recovering user.", e);
        return res.sendStatus(500);
    }
}

