import accountModel from "../models/account";
import Logger from "../configs/logger";
import { get } from "lodash";

export const createEducation = async (req, res) => {
  try {
    const accountId = get(req, "user", null);
    const title = get(req, "body.title", null);

    if (accountId)
      return res
        .status(404)
        .json({ success: false, error: true, message: "ACCOUNT NOT FOUND!" });
  } catch (error) {
    Logger.error(JSON.stringify(error));
    return res.status(500).json({
      success: false,
      error: true,
      message: JSON.stringify(error),
    });
  }
};
