import express from "express";
import {
  deletedExperience,
  createExperience,
  updateExperience,
} from "../controllers/experience";
import { authenticated } from "../middlewares/authenticated";

const router = express.Router();

router.post("/", authenticated, createExperience);
router.put("/:id", authenticated, updateExperience);
router.delete("/:id", authenticated, deletedExperience);

export default router;
