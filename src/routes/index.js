import express from "express";
import account from "./account";
import auth from "./auth";
import experience from "./experience";
import educationModel from "../models/education";
const router = express.Router();

router.use("/account", account);
router.use("/auth", auth);
router.use("/experience", experience);
router.use("/education", educationModel);

export default router;
