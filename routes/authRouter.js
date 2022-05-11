import { Router } from "express";

import { signUp, signIn } from "../controllers/authController.js";
import { validateSignIn, validateSignUp } from "../middlewares/validateAuthMiddleware.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSignUp, signUp);
authRouter.post("/sign-in", validateSignIn, signIn);

export default authRouter;