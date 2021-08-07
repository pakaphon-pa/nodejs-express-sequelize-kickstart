import express from "express";
import { authenication } from "../controllers/auth";
import { validateResult } from "../utils/validators/validateResult";
import { authValidate } from "../utils/validators/account";

const router = express.Router();

router.post("/", authValidate, validateResult, authenication);

export default router;
