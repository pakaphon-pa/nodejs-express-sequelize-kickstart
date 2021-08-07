import express from "express";
import account from "./account";
import auth from "./auth";

const router = express.Router();

router.use("/account", account);
router.use("/auth", auth);

export default router;
