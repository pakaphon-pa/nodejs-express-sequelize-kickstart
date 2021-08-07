import express from "express";
import { createAccount } from "../controllers/account";
import { validateResult } from "../utils/validators/validateResult";
import { accountValidate } from "../utils/validators/account";

const router = express.Router();

router.post("/", accountValidate, validateResult, createAccount);

export default router;
