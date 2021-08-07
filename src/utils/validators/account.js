import { check } from "express-validator";

export const accountValidate = [check("email", "should fill email").isEmail()];
