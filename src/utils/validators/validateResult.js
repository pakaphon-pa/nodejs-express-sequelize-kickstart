import { validationResult } from "express-validator";
import Logger from "../../configs/logger";

export const validateResult = (req, res, next) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res
        .status(400)
        .json({ success: false, error: true, message: result.array() });
    }
    next();
  } catch (error) {
    Logger.error(JSON.stringify(error));
    return res.json(500).json({
      success: false,
      error: true,
      message: JSON.stringify(error),
    });
  }
};
