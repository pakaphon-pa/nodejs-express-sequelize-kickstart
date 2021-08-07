import jwt from "jsonwebtoken";
import constant from "../configs/constant";
import Logger from "../configs/logger";

export const authenticated = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    Logger.info(`AUTHENTICATED WITH TOKEN|${token}`);

    if (!token) {
      return res.status(401).json({
        success: false,
        error: true,
        message: "unauthenticated",
      });
    }

    const decoded = jwt.verify(token, constant.JWT);
    req.user = decoded._id;

    next();
  } catch (error) {
    res.status(500).json({ success: false, error: true, message: `${error}` });
  }
};
