import express from "express";
import account from "./account";
import auth from "./auth";
import experience from "./experience";
import education from "./education";
import social from "./social";
const router = express.Router();

router.use("/account", account);
router.use("/auth", auth);
router.use("/experience", experience);
router.use("/education", education);
router.use("/social", social);

export default router;
