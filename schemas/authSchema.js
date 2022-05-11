import joi from "joi";

export const authSignUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
});

export const authSignInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

