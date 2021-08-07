import { check } from "express-validator";

export const accountValidate = [
  check("email", "Must be a valid email of 5 to 30 chars")
    .isEmail()
    .isLength({ min: 5, max: 30 }),
  check("password", "Must be a valid of 8 to 10 chars").isLength({
    min: 8,
    max: 10,
  }),
  check("password_confirm", "Must be a valid of 8 to 10 chars").isLength({
    min: 8,
    max: 10,
  }),
  check("first_name", "Firstname must be alphabetic.").matches(/^[A-Za-z\s]+$/),
  check("last_name", "Lastname must be alphabetic.").matches(/^[A-Za-z\s]+$/),
  check("title", "Title have not in list").isIn(["Mrs.", "Mr.", "Miss"]),
];
