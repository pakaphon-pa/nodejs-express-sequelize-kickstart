import express from "express";
import { upsertSocial } from "../controllers/social";
import { authenticated } from "../middlewares/authenticated";

const router = express.Router();

router.post("/upsert", authenticated, upsertSocial);

export default router;
