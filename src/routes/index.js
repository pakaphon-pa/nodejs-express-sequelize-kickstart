import express from "express";
import account from "./account";
import auth from "./auth";
import experience from "./experience";

const router = express.Router();

router.use("/account", account);
router.use("/auth", auth);
router.use("/experience", experience);

export default router;
