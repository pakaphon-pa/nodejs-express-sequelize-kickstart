import express from "express";
import { createAccount, getMy } from "../controllers/account";
import { authenticated } from "../middlewares/authenticated";
import { validateResult } from "../utils/validators/validateResult";
import { accountValidate } from "../utils/validators/account";

const router = express.Router();

router.post("/", accountValidate, validateResult, createAccount);
router.get("/my", authenticated, getMy);

export default router;
