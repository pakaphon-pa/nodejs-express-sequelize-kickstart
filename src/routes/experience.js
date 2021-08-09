import express from "express";
import {
  deletedExperience,
  createExperience,
  updateExperience,
} from "../controllers/experience";
import { authenticated } from "../middlewares/authenticated";

const router = express.Router();

router.post("/", createExperience);
router.put("/:id", updateExperience);
router.delete("/:id", authenticated, deletedExperience);

export default router;
