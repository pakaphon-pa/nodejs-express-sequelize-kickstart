import express from "express";
import {
  deletedEducation,
  createEducation,
  updateEducation,
} from "../controllers/education";
import { authenticated } from "../middlewares/authenticated";

const router = express.Router();

router.post("/", authenticated, createEducation);
router.put("/:id", authenticated, updateEducation);
router.delete("/:id", authenticated, deletedEducation);

export default router;
